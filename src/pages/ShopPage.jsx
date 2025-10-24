import { useCallback, useMemo, useState } from 'react';

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

  const filteredProducts = useFilteredProducts(products, filters);

  const handleFilterChange = useCallback((nextFilters) => {
    setFilters((prev) => ({ ...prev, ...nextFilters }));
  }, []);

  const handleFilterReset = useCallback(() => {
    setFilters({ category: 'all', collection: 'all', sort: 'default' });
  }, []);

  return (
    <>
      <Banner
        banner={{type: 'video', src: getAsset('capsule-collection-video')}}
        hasCTA={false}
      />
      <ProductFilter
        products={products}
        value={filters}
        onFilterChange={handleFilterChange}
        onFilterReset={handleFilterReset}
      />
      <main className="relative mb-32 mt-10 flex h-auto w-full flex-wrap justify-center gap-3">
        {filteredProducts.length === 0 ? (
          <FallbackPage>
            <h3 className="mb-4">No pieces rendered</h3>
            <PrimaryBtn name="Clear filters" onClick={handleFilterReset} />
          </FallbackPage>
        ) : (
          <div className="flex w-full flex-wrap justify-center gap-3">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
