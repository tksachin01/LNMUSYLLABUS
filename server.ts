import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "25mb" }));

// Server-side admin credentials - loaded strictly from environment variables (never hardcoded in code)
const configuredAdminUsername = (process.env.ADMIN_USERNAME || "").trim();
const configuredAdminPassword = process.env.ADMIN_PASSWORD || "";

// Maintain secure secret for HMAC token signing
const ADMIN_SECRET = process.env.ADMIN_SECRET || crypto.randomBytes(32).toString("hex");
const CANONICAL_ADMIN_USERNAME = configuredAdminUsername || "admin";

function isValidAdminUser(inputUser: string): boolean {
  if (!configuredAdminUsername) return false;
  const cleanInput = inputUser.trim().toLowerCase();
  const cleanTarget = configuredAdminUsername.toLowerCase();
  return cleanInput === cleanTarget || cleanInput.split("@")[0] === cleanTarget;
}

function isValidAdminPassword(inputPass: string): boolean {
  if (!configuredAdminPassword) return false;
  return inputPass === configuredAdminPassword;
}

// Directories for persistent storage of committed syllabus overrides
const DATA_DIR = path.join(process.cwd(), "data");
const SRC_DATA_DIR = path.join(process.cwd(), "src", "data");
const OVERRIDES_FILE_DATA = path.join(DATA_DIR, "syllabus_overrides.json");
const OVERRIDES_FILE_SRC = path.join(SRC_DATA_DIR, "syllabus_overrides.json");

function ensureDirs() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(SRC_DATA_DIR)) {
    fs.mkdirSync(SRC_DATA_DIR, { recursive: true });
  }
}

// In-memory cache for ultra-fast, non-blocking reads
let inMemoryOverrides: Record<string, any> = {};

function loadOverrides(): Record<string, any> {
  ensureDirs();
  // If in-memory cache is already populated, return it
  if (Object.keys(inMemoryOverrides).length > 0) {
    return inMemoryOverrides;
  }

  let loaded: Record<string, any> = {};

  // Check data directory
  if (fs.existsSync(OVERRIDES_FILE_DATA)) {
    try {
      const content = fs.readFileSync(OVERRIDES_FILE_DATA, "utf-8");
      loaded = { ...loaded, ...JSON.parse(content) };
    } catch (err) {
      console.error("Error reading overrides file from data/:", err);
    }
  }

  // Check src/data directory as secondary persistent backup
  if (fs.existsSync(OVERRIDES_FILE_SRC)) {
    try {
      const content = fs.readFileSync(OVERRIDES_FILE_SRC, "utf-8");
      loaded = { ...loaded, ...JSON.parse(content) };
    } catch (err) {
      console.error("Error reading overrides file from src/data/:", err);
    }
  }

  inMemoryOverrides = loaded;
  return loaded;
}

function saveOverrides(data: Record<string, any>): boolean {
  ensureDirs();
  inMemoryOverrides = { ...data };
  const jsonStr = JSON.stringify(data, null, 2);
  let saved = false;

  try {
    fs.writeFileSync(OVERRIDES_FILE_DATA, jsonStr, "utf-8");
    saved = true;
  } catch (err) {
    console.error("Error saving overrides file to data/:", err);
  }

  try {
    fs.writeFileSync(OVERRIDES_FILE_SRC, jsonStr, "utf-8");
    saved = true;
  } catch (err) {
    console.error("Error saving overrides file to src/data/:", err);
  }

  return saved;
}

// Initialize overrides on boot
loadOverrides();

// Token helper: Create HMAC-signed token with timestamp
function createAdminToken(username: string): string {
  const payload = JSON.stringify({
    user: username,
    iat: Date.now(),
    exp: Date.now() + 14 * 24 * 60 * 60 * 1000 // 14 days validity
  });
  const b64Payload = Buffer.from(payload).toString("base64url");
  const signature = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(b64Payload)
    .digest("base64url");
  return `${b64Payload}.${signature}`;
}

// Token helper: Verify HMAC-signed token
function verifyAdminToken(token?: string): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [b64Payload, signature] = parts;
  const expectedSig = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(b64Payload)
    .digest("base64url");

  // Constant-time compare to prevent timing attacks
  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSig);
  if (sigBuffer.length !== expectedBuffer.length) return false;
  if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return false;

  try {
    const payloadJson = Buffer.from(b64Payload, "base64url").toString("utf-8");
    const payload = JSON.parse(payloadJson);
    if (!payload.exp || Date.now() > payload.exp) return false;
    const user = String(payload.user || "").trim();
    if (!isValidAdminUser(user)) return false;
    return true;
  } catch {
    return false;
  }
}

// Middleware: Require Admin
function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : undefined;

  if (!verifyAdminToken(token)) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized: Invalid or expired admin session"
    });
  }
  next();
}

// ================= API ROUTES =================

// Public health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Admin login - strictly validates on server, zero client exposure
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ success: false, error: "Username and password required" });
  }

  if (!configuredAdminPassword) {
    return res.status(503).json({
      success: false,
      error: "Admin credentials are not configured on the server."
    });
  }

  const isUserMatch = isValidAdminUser(String(username));
  const isPassMatch = isValidAdminPassword(String(password));

  if (isUserMatch && isPassMatch) {
    const token = createAdminToken(CANONICAL_ADMIN_USERNAME);
    return res.json({
      success: true,
      token,
      admin: {
        username: CANONICAL_ADMIN_USERNAME,
        role: "SUPER_ADMIN"
      }
    });
  }

  // Delay response slightly to prevent brute force timing analysis
  setTimeout(() => {
    res.status(401).json({
      success: false,
      error: "Access Denied: Invalid administrator credentials."
    });
  }, 300);
});

// Admin token verification
app.get("/api/admin/verify", (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : undefined;

  const valid = verifyAdminToken(token);
  if (valid) {
    return res.json({ success: true, valid: true, username: CANONICAL_ADMIN_USERNAME });
  } else {
    return res.status(401).json({ success: false, valid: false });
  }
});

// Public: Get all committed syllabus overrides
app.get("/api/syllabus-overrides", (_req, res) => {
  const overrides = loadOverrides();
  res.json({ success: true, overrides });
});

// Auto-sync endpoint: allows client local cache to re-hydrate server if server was rebooted/fresh
app.post("/api/syllabus/sync-backup", (req, res) => {
  const { overrides } = req.body || {};
  if (overrides && typeof overrides === "object") {
    const current = loadOverrides();
    const toMerge: Record<string, any> = {};
    for (const [k, v] of Object.entries(overrides)) {
      if (!k.startsWith("_") && !current[k]) {
        toMerge[k] = v;
      }
    }
    if (Object.keys(toMerge).length > 0) {
      const updated = {
        ...current,
        ...toMerge,
        _lastCommittedAt: new Date().toISOString(),
        _lastCommittedBy: "Auto-Recovered",
        _lastNote: "Restored from client persistence"
      };
      saveOverrides(updated);
      return res.json({ success: true, synced: Object.keys(toMerge).length });
    }
  }
  res.json({ success: true, synced: 0 });
});

// Admin: Commit syllabus overrides (saves for all public users)
app.post("/api/admin/commit-changes", requireAdmin, (req, res) => {
  const { overrides, logNote } = req.body || {};

  if (!overrides || typeof overrides !== "object") {
    return res.status(400).json({ success: false, error: "Valid overrides object is required" });
  }

  // Merge with existing overrides or replace
  const current = loadOverrides();
  const updated = {
    ...current,
    ...overrides,
    _lastCommittedAt: new Date().toISOString(),
    _lastCommittedBy: CANONICAL_ADMIN_USERNAME,
    _lastNote: logNote || "Updated via Admin Console"
  };

  const saved = saveOverrides(updated);
  if (saved) {
    return res.json({
      success: true,
      message: "Curriculum changes committed successfully! All public users now receive the updated syllabus.",
      committedAt: updated._lastCommittedAt
    });
  } else {
    return res.status(500).json({ success: false, error: "Failed to persist curriculum changes to disk" });
  }
});

// Admin: Reset / clear all overrides
app.post("/api/admin/reset-overrides", requireAdmin, (_req, res) => {
  const cleared = {
    _lastCommittedAt: new Date().toISOString(),
    _lastCommittedBy: CANONICAL_ADMIN_USERNAME,
    _lastNote: "Reset to factory defaults"
  };
  saveOverrides(cleared);
  res.json({ success: true, message: "Curriculum overrides reset to factory default" });
});

// ================= VITE & STATIC FILES =================

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`LNMU Syllabus Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
