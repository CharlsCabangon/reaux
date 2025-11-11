import { useState, useEffect, useMemo, useCallback } from 'react';

import Banner from '@/components/Banner';
import ProductFilter from '@/components/product/ProductFilter';
import ProductGrid from '@/components/product/ProductGrid';

import { jewelryData } from '@/data/productData';
import { getAsset } from '@/data/assetData';

import useFilteredProducts from '@/hooks/useFilteredProducts';

export default function ShopPage() {
  const products = useMemo(() => jewelryData, []);

  const [filters, setFilters] = useState({
    category: 'all',
    collection: 'all',
    sort: 'default',
  });

  useEffect(() => {
    document.title = 'Reaux Online Store';
  }, []);

  const filteredProducts = useFilteredProducts(products, filters);

  const handleFilterChange = useCallback((nextFilters) => {
    setFilters((prev) => ({ ...prev, ...nextFilters }));
  }, []);

  const handleFilterReset = useCallback(() => {
    setFilters({ category: 'all', collection: 'all', sort: 'default' });
  }, []);

  return (
    <>
      <Banner type="video" banner={getAsset('capsule-collection-video')} hasCTA={false} />
      <ProductFilter
        products={products}
        value={filters}
        onFilterChange={handleFilterChange}
        onFilterReset={handleFilterReset}
      />
      <ProductGrid filteredProducts={filteredProducts} onFilterReset={handleFilterReset} />
    </>
  );
}
