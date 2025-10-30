import { useEffect } from 'react';

import Hero from '@/components/Hero';
import PressMarquee from '@/components/Marquee';
import Feature from '@/components/Feature';
import DecorCard from '@/components/DecorCard';
import Banner from '@/components/Banner';
import CTA from '@/components/CTA';

import { getAsset } from '@/data/assetData';
import { PrimaryBtn } from '@/components/controls/Button';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Reaux Online Store';
  }, []);

  return (
    <>
      <Hero />
      <PressMarquee />
      <Feature feature={getAsset('rendered-perfectly')} />
      <hr />
      <section className="flex w-full flex-col items-center gap-12 bg-light-gray py-28">
        <h2>Shop the collection</h2>
        <div className="flex justify-center gap-20">
          <DecorCard img={getAsset('infinite-bloom')} />
          <DecorCard img={getAsset('static-to-dynamic')} />
          <DecorCard img={getAsset('reaux-vision')} />
        </div>
      </section>
      <Banner
        type="image"
        banner={getAsset('banner-diamonds-are-forever')}
        imgClassName="object-[0_35%]"
      />
      <section className="flex w-full justify-center gap-20 pb-16 pt-24">
        <DecorCard img={getAsset('ephemeral')} hasGlare={true} />
        <DecorCard img={getAsset('infinite')} hasGlare={true} />
        <DecorCard img={getAsset('cascade')} hasGlare={true} />
      </section>
      <hr />
      <CTA>
        <h3>Sign up and get 10% off</h3>
        <p>
          Your next treasure awaits. Become a Reaux Club member to enjoy special rewards, early
          previews, and insider moments from the heart of fine jewelry.
        </p>
        <PrimaryBtn name="Join the Reaux Club" />
      </CTA>
    </>
  );
}
