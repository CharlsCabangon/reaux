import Banner from '@/components/Banner';
import ProductCard from "@/components/ProductCard";

import { getAsset } from "@/data/assetData";
import { jewelryData } from '@/data/productData';

export default function ShopPage() {
  return (
    <>
      <Banner img={getAsset('banner-rendered-perfectly')} hasInfo={false} />
      <main className="flex flex-wrap justify-center gap-8 w-full h-auto py-20">
        {jewelryData.map((item) => {
          return <ProductCard item={item}/>
        })}
      </main>
    </>
  );
}
