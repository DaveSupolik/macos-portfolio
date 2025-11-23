export function isSafeHttpUrl(url) {
  if (typeof url !== "string" || url.length === 0) return false;
  try {
    const u = new URL(url, window.location.origin);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}
