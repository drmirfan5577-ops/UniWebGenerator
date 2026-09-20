const ADMIN_KEY = 'uwg_admin_session';
const ADMIN_PASSWORD = '@1122#';

export function checkAdminPassword(pw: string): boolean {
  return pw === ADMIN_PASSWORD;
}

export function loginAdmin(): void {
  localStorage.setItem(ADMIN_KEY, JSON.stringify({ loggedIn: true, ts: Date.now() }));
}

export function logoutAdmin(): void {
  localStorage.removeItem(ADMIN_KEY);
}

export function isAdminLoggedIn(): boolean {
  try {
    const s = localStorage.getItem(ADMIN_KEY);
    if (!s) return false;
    const data = JSON.parse(s);
    // Session expires in 4 hours
    if (Date.now() - data.ts > 4 * 60 * 60 * 1000) {
      logoutAdmin();
      return false;
    }
    return data.loggedIn === true;
  } catch {
    return false;
  }
}

export function getSiteConfig() {
  try {
    const raw = localStorage.getItem('uwg_site_config');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function saveSiteConfig(cfg: object) {
  localStorage.setItem('uwg_site_config', JSON.stringify(cfg));
}
