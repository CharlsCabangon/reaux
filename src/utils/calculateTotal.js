import { parsePrice } from './parsePrice';

// pure helpers, easy to test
export function calculateTotal(items = []) {
  return items.reduce((sum, ci) => sum + parsePrice(ci.item?.price) * (ci.quantity || 0), 0);
}

export function calculateSelectedTotal(items = [], selectedIds = []) {
  const set = new Set(selectedIds || []);
  return items.reduce(
    (sum, ci) => (set.has(ci.id) ? sum + parsePrice(ci.item?.price) * (ci.quantity || 0) : sum),
    0
  );
}
