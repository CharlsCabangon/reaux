const STORAGE_KEY = 'cart';

export function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [], selectedIds: [] };
    const items = JSON.parse(raw);
    if (!Array.isArray(items)) return { items: [], selectedIds: [] };
    const selectedIds = items.map((ci) => ci.id);
    return { items, selectedIds };
  } catch {
    return { items: [], selectedIds: [] };
  }
}

export function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // fail silently
  }
}
