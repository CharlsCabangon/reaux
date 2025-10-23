import Hero from '@/components/Hero';
import PressMarquee from '@/components/Marquee';
import Feature from '@/components/Feature';
import DecorCard from '@/components/DecorCard';
import Banner from '@/components/Banner';
import CTA from '@/components/CTA';

import { getAsset } from '@/data/assetData';
import { PrimaryBtn } from '@/components/controls/Button';
import ProductFeature from '@/components/product/ProductFeature';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressMarquee />
      <Feature img={getAsset('rendered-perfectly')} />
      <ProductFeature />
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
      <CTA>
        <h3>Sign up and get 10% off</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iure soluta animi rem
          ducimus ab! Ipsa tempore quas dolor, nobis quam reiciendis at repudiandae ullam, aut rerum
          fugiat dolore recusandae repellat, necessitatibus iure harum sequi voluptates neque magnam
          est molestiae.
        </p>
        <PrimaryBtn name="Join the Reaux Club" />
      </CTA>
    </>
  );
}
