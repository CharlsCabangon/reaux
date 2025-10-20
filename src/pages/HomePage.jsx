import Hero from '@/components/Hero';
import PressMarquee from '@/components/Marquee';
import Feature from '@/components/Feature';
import DecorCard from '@/components/DecorCard';
import Banner from '@/components/Banner';

import { getAsset } from '@/data/assetData';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressMarquee />
      <Feature img={getAsset('rendered-perfectly')} />
      <hr />
      <section className="flex w-full flex-col items-center gap-20 bg-light-gray py-20">
        <h2>Shop the collection</h2>
        <div className="flex justify-center gap-20">
          <DecorCard img={getAsset('infinite-bloom')} />
          <DecorCard img={getAsset('static-to-dynamic')} />
          <DecorCard img={getAsset('reaux-vision')} />
        </div>
      </section>
      <Banner img={getAsset('banner-diamonds-are-forever')} imgClassName="object-[0_35%]" />
      <section className="flex w-full justify-center gap-20 py-20">
        <DecorCard img={getAsset('ephemeral')} isGlare={true} />
        <DecorCard img={getAsset('infinite')} isGlare={true} />
        <DecorCard img={getAsset('cascade')} isGlare={true} />
      </section>
    </>
  );
}
