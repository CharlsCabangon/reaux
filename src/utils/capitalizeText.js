export function capitalize(str = '') {
  return str
    .split(/[\s-_]+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}
