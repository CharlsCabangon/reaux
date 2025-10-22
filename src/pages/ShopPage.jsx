import { useCallback, useMemo, useState } from 'react';

import Banner from '@/components/Banner';
import ProductFilter from '@/components/product/ProductFilter';
import ProductCard from '@/components/product/ProductCard';

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

  return (
    <>
      <Banner img={getAsset('banner-rendered-perfectly')} hasCTA={false} />
      <ProductFilter products={products} value={filters} onFilterChange={handleFilterChange} />
      <main className="relative mt-10 flex h-auto w-full flex-wrap justify-center gap-3">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}
