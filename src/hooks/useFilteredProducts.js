import { useState, useEffect } from 'react';
import { applyCategoryFilter, applyCollectionFilter } from '@/services/filterService';
import { applySort } from '@/services/sortService';

export default function useFilteredProducts(products = [], filters = {}) {
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const { category, collection, sort } = filters;

    let list = products;
    // chaining filters
    list = applyCategoryFilter(list, category);
    list = applyCollectionFilter(list, collection);
    list = applySort(list, sort);

    setFiltered(list);
  }, [products, filters]);

  return filtered;
}
