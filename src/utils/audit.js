// Simple in-memory audit log with pluggable sink
const listeners = new Set();
const logs = [];

export const AUDIT_EVENTS = {
  WINDOW_OPEN: "WINDOW_OPEN",
  FILE_VIEW: "FILE_VIEW",
};

export function onAudit(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getAuditLogs() {
  return logs.slice();
}

export function audit(event, payload = {}) {
  const record = {
    ts: new Date().toISOString(),
    event,
    payload,
  };
  logs.push(record);
  for (const l of listeners) {
    try {
      l(record);
    } catch (_) {
      // no-op: prevent audit path from breaking app
    }
  }
}

// Register a default external sink to persist/forward logs
// 1) Try send to backend endpoint (non-blocking)
// 2) Fallback to localStorage ring buffer for durability
const ENDPOINT = "/api/audit";
const STORAGE_KEY = "auditLogs";

function pushLocal(record) {
  try {
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    arr.push(record);
    // Cap to last 1000 records to avoid unbounded growth
    if (arr.length > 1000) arr.splice(0, arr.length - 1000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  } catch {}
}

onAudit(async (record) => {
  try {
    await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      keepalive: true,
    });
  } catch {
    // network unavailable or endpoint missing — persist locally
    pushLocal(record);
  }
});
