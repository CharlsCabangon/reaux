export function parsePrice(value) {
  if (typeof value === 'number') return value;
  return parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
}
