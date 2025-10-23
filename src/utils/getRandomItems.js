export function getRandomItems(data, count) {
  if (!Array.isArray(data)) {
    return [];
  }

  const shuffled = [...data].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, Math.min(count, data.length));
}
