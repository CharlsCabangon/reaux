import { useMemo } from 'react';
import { applyCategoryFilter, applyCollectionFilter } from '@/services/filterService';
import { applySort } from '@/services/sortService';

export default function useFilteredProducts(products = [], filters = {}) {
  const { category, collection, sort } = filters;

  return useMemo(() => {
    let list = products;
    list = applyCategoryFilter(list, category);
    list = applyCollectionFilter(list, collection);
    list = applySort(list, sort);
    return list;
  }, [products, category, collection, sort]);
}
