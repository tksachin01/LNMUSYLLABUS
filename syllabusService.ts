import { db, initAnalytics } from './firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

export interface AdminUser {
  username: string;
  role: string;
}

export interface SyllabusOverrides {
  [syllabusKey: string]: any;
}

export const LOCAL_OVERRIDES_STORAGE_KEY = 'lnmu_curriculum_overrides_v2';

// Helper to get cached overrides synchronously
export function getCachedOverrides(): SyllabusOverrides {
  try {
    const saved = localStorage.getItem(LOCAL_OVERRIDES_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch {}
  return {};
}

// Helper to save overrides to local storage
export function saveCachedOverrides(overrides: SyllabusOverrides) {
  try {
    localStorage.setItem(LOCAL_OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
  } catch {}
}

// Fetch committed overrides from server with local cache resilience
export async function fetchServerOverrides(): Promise<SyllabusOverrides> {
  const localCache = getCachedOverrides();

  try {
    const res = await fetch('/api/syllabus-overrides');
    if (res.ok) {
      const json = await res.json();
      const serverData = json.overrides || {};

      // Merge server data with local cache so nothing is ever lost
      const merged: SyllabusOverrides = {
        ...localCache,
        ...serverData
      };

      saveCachedOverrides(merged);

      // If local cache had overrides that the server did not have (e.g. server container cold start),
      // re-hydrate the server in the background so all other users immediately have it too
      const missingKeys = Object.keys(localCache).filter(
        k => !k.startsWith('_') && !serverData[k]
      );
      if (missingKeys.length > 0) {
        fetch('/api/syllabus/sync-backup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ overrides: localCache })
        }).catch(() => {});
      }

      return merged;
    }
  } catch (err) {
    console.warn('Failed to fetch syllabus overrides from server API, using local cache:', err);
  }
  return localCache;
}

// Subscribe to real-time updates from Firestore with fallback
export function subscribeToSyllabusUpdates(callback: (overrides: SyllabusOverrides) => void): () => void {
  // Try initializing analytics
  initAnalytics();

  if (!db) {
    return () => {};
  }

  try {
    const docRef = doc(db, 'syllabus_updates', 'overrides');
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          if (data && data.overrides && Object.keys(data.overrides).length > 0) {
            saveCachedOverrides(data.overrides);
            callback(data.overrides);
          }
        }
      },
      (error) => {
        // If Firestore security rules restrict direct client access, server API handles it
        console.info('Firestore live sync listener inactive, relying on server sync:', error.message);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.info('Firestore subscription init note:', err);
    return () => {};
  }
}

// Verify existing admin token on the server
export async function verifyAdminToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    const res = await fetch('/api/admin/verify', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      return Boolean(data.valid);
    }
  } catch (err) {
    console.error('Error verifying admin token:', err);
  }
  return false;
}

// Authenticate admin strictly via server API
export async function loginAdmin(username: string, password: string): Promise<{ success: boolean; token?: string; error?: string; admin?: AdminUser }> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok && data.success) {
      return { success: true, token: data.token, admin: data.admin };
    }
    return { success: false, error: data.error || 'Invalid credentials' };
  } catch (err: any) {
    return { success: false, error: err.message || 'Connection error contacting server' };
  }
}

// Commit changes (both to backend server file storage and Firestore if possible)
export async function commitSyllabusChanges(
  token: string, 
  overrides: SyllabusOverrides, 
  note?: string
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    // 1. Commit to secure server API FIRST
    const res = await fetch('/api/admin/commit-changes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ overrides, logNote: note || 'Committed by Admin' })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Server rejected commit request' };
    }

    // Immediately cache in local storage so changes never disappear on browser refresh
    saveCachedOverrides(overrides);

    // 2. Mirror to Firestore strictly in the background if db is initialized
    if (db) {
      try {
        const docRef = doc(db, 'syllabus_updates', 'overrides');
        Promise.race([
          setDoc(docRef, {
            overrides,
            lastUpdated: new Date().toISOString(),
            updatedBy: 'Admin'
          }, { merge: true }),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Firestore write timeout')), 1000))
        ]).catch(() => {});
      } catch {}
    }

    return { 
      success: true, 
      message: data.message || 'Curriculum successfully committed and live for all users.' 
    };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to communicate with server' };
  }
}

// Reset overrides
export async function resetSyllabusOverrides(token: string): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const res = await fetch('/api/admin/reset-overrides', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    if (res.ok && data.success) {
      saveCachedOverrides({});
      return { success: true, message: data.message };
    }
    return { success: false, error: data.error || 'Failed to reset' };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
