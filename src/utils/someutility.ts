// utils/someUtility.js
export function getBrowserWidth() {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return null; // Return a fallback value if on the server
}
