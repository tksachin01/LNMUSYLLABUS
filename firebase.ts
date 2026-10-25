import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;

export const firebaseConfig = {
  apiKey: apiKey || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: projectId || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

// Check if valid Firebase configuration is provided
const isConfigured = Boolean(apiKey && projectId);

// Initialize Firebase safely without throwing if unconfigured
export const app: FirebaseApp | null = isConfigured
  ? (!getApps().length ? initializeApp(firebaseConfig) : getApp())
  : null;

export const db: Firestore | null = app ? getFirestore(app) : null;

// Initialize analytics safely if in browser and app configured
export const initAnalytics = async (): Promise<Analytics | null> => {
  try {
    if (app && typeof window !== "undefined" && await isSupported()) {
      return getAnalytics(app);
    }
  } catch {
    // Analytics optional in sandbox or preview
  }
  return null;
};
