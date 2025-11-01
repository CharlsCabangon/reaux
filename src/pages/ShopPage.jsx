import { useState, useEffect, useMemo, useCallback } from 'react';

import Banner from '@/components/Banner';
import ProductFilter from '@/components/product/ProductFilter';
import ProductCard from '@/components/product/ProductCard';
import FallbackPage from './FallbackPage';
import { PrimaryBtn } from '@/components/controls/Button';

import { jewelryData } from '@/data/productData';
import { getAsset } from '@/data/assetData';

import useFilteredProducts from '@/hooks/useFilteredProducts';

export default function ShopPage() {
  const products = useMemo(() => jewelryData, []); // memo so child computations stable

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
      <main
        className="relative mb-20 mt-8 flex h-auto w-full flex-wrap justify-center px-4 sm:mb-24 sm:mt-10 sm:px-6 md:mb-28 md:px-8 lg:mb-32"
        role="main"
        aria-label="Product catalog"
      >
        {filteredProducts.length === 0 ? (
          <FallbackPage>
            <h3 className="mb-4">No pieces rendered</h3>
            <p className="mb-6 text-black-muted">
              Try adjusting your filters to discover more pieces.
            </p>
            <PrimaryBtn name="Clear filters" onClick={handleFilterReset} />
          </FallbackPage>
        ) : (
          <div
            className="grid w-full max-w-7xl grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-x-12 xl:gap-y-3"
            role="list"
            aria-label={`${filteredProducts.length} products available`}
          >
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
