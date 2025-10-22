import { parsePrice } from '@/utils/parsePrice';

export function applySort(list, sortKey) {
  if (!sortKey || sortKey === 'default') return list;

  const listCopy = [...list];

  switch (sortKey) {
    case 'price-asc':
      return listCopy.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case 'price-desc':
      return listCopy.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    case 'name-asc':
      return listCopy.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return listCopy.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return list;
  }
}
