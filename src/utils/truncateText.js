export function truncateText(text, wordLimit = 6) {
  if (!text) return '';
  const words = text.trim().split(/\s+/).filter(Boolean);

  const truncated = words.slice(0, wordLimit).join(' ');
  return truncated;
}
