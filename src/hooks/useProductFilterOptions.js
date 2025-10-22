import { useMemo } from 'react';

export default function useProductFilterOptions(products = []) {
  return useMemo(() => {
    const catSet = new Set();
    const collSet = new Set();

    products.forEach((p) => {
      if (p.category) catSet.add(p.category);
      if (p.collection) collSet.add(p.collection);
    });

    const categories = ['all', ...Array.from(catSet).sort()];
    const collections = ['all', ...Array.from(collSet).sort()];

    return { categories, collections };
  }, [products]);
}
