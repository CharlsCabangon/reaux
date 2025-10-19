import { useNavigate } from 'react-router-dom';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

import { getAsset } from '@/data/assetData';
import { jewelryData } from '@/data/productData';

export default function ShopPage() {
  return (
    <>
      <Banner img={getAsset('banner-rendered-perfectly')} hasCTA={false} />
      <main className="flex h-auto w-full flex-wrap justify-center gap-3 py-20">
        {jewelryData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}
