export function truncateText(text, charLimit = 50) {
  if (!text) return '';

  const trimmedText = text.trim();

  if (trimmedText.length <= charLimit) {
    return trimmedText;
  }

  return trimmedText.slice(0, charLimit).trim() + '...';
}
