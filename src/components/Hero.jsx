/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import 'flickity-fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, AnimatePresence } from 'framer-motion';

import Heading from './Heading';
import { PrimaryBtn, SecondaryBtn } from './controls/Button';

import { hero } from '@/data/heroData';

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  const flickityOptions = {
    fade: true,
    wrapAround: true,
    initialIndex: 0,
    autoPlay: 6000,
    selectedAttraction: 0.015,
    friction: 0.25,
    pauseAutoPlayOnHover: false,
    prevNextButtons: true,
    pageDots: false,
    adaptiveHeight: false,
  };

  const handleSlideChange = (index) => setHeroIndex(index);

  return (
    <main role="banner" className="relative min-h-screen w-full overflow-hidden">
      <Flickity
        className="h-full w-full"
        elementType="div"
        options={flickityOptions}
        flickityRef={(ref) => {
          if (ref) {
            ref.on('change', handleSlideChange);
          }
        }}
      >
        {hero.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <LazyLoadImage
              src={item.images[0]}
              alt={item.alt}
              effect="blur"
              className="h-full w-full object-cover"
              wrapperClassName="w-full h-full" // ensures the LazyLoadImage wrapper fills its parent div, so object-cover works correctly
            />
          </div>
        ))}
      </Flickity>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#000]/80 via-[#000]/60 to-transparent md:hidden"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center text-center text-black md:bottom-1/3 md:left-16 md:top-1/2 md:w-1/2 md:-translate-y-1/2 md:items-start md:text-left lg:left-24 xl:left-32">
        <Heading
          heading="A framework | for fine design"
          leading={3}
          className="text-white md:text-black"
        />
        <p className="mt-8 w-[35ch] text-white md:mt-10 md:text-black">
          Crafted through intention and innovation, Reaux defines the new era of fine jewelry.
        </p>
        <div className="hidden md:mt-4 md:flex md:flex-row md:gap-5">
          <PrimaryBtn name="Shop now" />
          <SecondaryBtn name="Discover more" />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:hidden">
          <PrimaryBtn name="Shop now" color="white" />
          <SecondaryBtn name="Discover more" color="white" />
        </div>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="absolute bottom-20 right-4 top-auto z-10 flex w-[calc(100%-2rem)] max-w-xs select-none flex-col justify-start text-right text-black sm:bottom-auto sm:right-8 sm:top-56 sm:w-auto md:right-16 lg:right-24 xl:right-32"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="hidden lg:block">
              <h5 className="font-semibold">{hero[heroIndex]?.title}</h5>
              <p className="mt-3 text-sm leading-relaxed">{hero[heroIndex]?.details}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
