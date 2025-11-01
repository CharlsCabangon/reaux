import { useEffect } from 'react';

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

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

  const flickityOptions = {
    freeScroll: true,
    wrapAround: true,
    cellAlign: 'center',
    contain: true,
    draggable: true,
    pageDots: false,
    prevNextButtons: false,
    imagesLoaded: true,
    selectedAttraction: 0.015,
    friction: 0.25,
  };

  return (
    <div>
      <Hero />
      <PressMarquee />
      <Feature feature={getAsset('rendered-perfectly')} />
      <hr />
      <section
        className="flex w-full flex-col items-center gap-8 bg-light-gray py-16 sm:gap-10 sm:py-20 md:gap-12 md:px-8 md:py-24 lg:py-28"
        aria-labelledby="collection-heading"
      >
        <h2 id="collection-heading">Shop the collection</h2>
        <div className="w-full md:hidden">
          <Flickity className="carousel" elementType="list" options={flickityOptions} static>
            <div className="mx-2 w-3/4 sm:w-2/3 md:w-1/2">
              <DecorCard img={getAsset('infinite-bloom')} />
            </div>
            <div className="mx-2 w-3/4 sm:w-2/3 md:w-1/2">
              <DecorCard img={getAsset('static-to-dynamic')} />
            </div>
            <div className="mx-2 w-3/4 sm:w-2/3 md:w-1/2">
              <DecorCard img={getAsset('reaux-vision')} />
            </div>
          </Flickity>
        </div>

        <div
          className="hidden w-full max-w-7xl md:grid md:grid-cols-3 md:gap-6 lg:gap-8"
          role="list"
          aria-label="Featured collection items"
        >
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
      <section
        className="flex w-full flex-col items-center gap-8 py-16 sm:gap-10 sm:py-20 md:gap-12 md:px-8 lg:py-24"
        aria-label="Collection items"
      >
        <div className="w-full md:hidden">
          <Flickity className="carousel" elementType="list" options={flickityOptions} static>
            <div className="mx-2 w-3/4 sm:w-2/3 md:w-1/2">
              <DecorCard img={getAsset('ephemeral')} hasGlare={true} />
            </div>
            <div className="mx-2 w-3/4 sm:w-2/3 md:w-1/2">
              <DecorCard img={getAsset('infinite')} hasGlare={true} />
            </div>
            <div className="mx-2 w-3/4 sm:w-2/3 md:w-1/2">
              <DecorCard img={getAsset('cascade')} hasGlare={true} />
            </div>
          </Flickity>
        </div>
        <div
          className="hidden w-full max-w-7xl md:grid md:grid-cols-3 md:gap-6 lg:gap-8"
          role="list"
        >
          <DecorCard img={getAsset('ephemeral')} hasGlare={true} />
          <DecorCard img={getAsset('infinite')} hasGlare={true} />
          <DecorCard img={getAsset('cascade')} hasGlare={true} />
        </div>
      </section>
      <hr />
      <CTA>
        <h3>Sign up and get 10% off</h3>
        <p className="max-w-2xl">
          Your next treasure awaits. Become a Reaux Club member to enjoy special rewards, early
          previews, and insider moments from the heart of fine jewelry.
        </p>
        <PrimaryBtn name="Join the Reaux Club" />
      </CTA>
    </div>
  );
}
