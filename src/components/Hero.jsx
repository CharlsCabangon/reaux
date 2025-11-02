/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from 'react';

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import 'flickity-fade';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import Heading from './Heading';
import { PrimaryBtn, SecondaryBtn } from './controls/Button';

import { hero } from '@/data/heroData';

export default function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);

  const flickityOptions = useMemo(
    () => ({
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
    }),
    []
  );

  const handleSlideChange = (index) => setHeroIndex(index);

  useEffect(() => {
    let flickityInstance = null;

    return () => {
      if (flickityInstance) {
        flickityInstance.off('change', handleSlideChange);
      }
    };
  }, []);

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
            <picture className="h-full w-full">
              {/* mobile: portrait aspect ratio (360x640) */}
              <source media="(max-width: 767px)" srcSet={item.images[2]} type="image/jpeg" />

              {/* tablet: landscape aspect ratio (1500x900) */}
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                srcSet={item.images[1]}
                type="image/jpeg"
              />

              {/* desktop: full resolution (default) */}
              <source media="(min-width: 1024px)" srcSet={item.images[0]} type="image/jpeg" />

              {/* fallback */}
              <img
                src={item.images[0]}
                alt={item.alt || item.title}
                className="h-full w-full object-cover"
                loading={item.id === hero[0].id ? 'eager' : 'lazy'}
              />
            </picture>
          </div>
        ))}
      </Flickity>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#000]/80 via-[#000]/60 to-transparent md:hidden"
        aria-hidden="true"
      />

      <div
        className={clsx(
          'absolute inset-x-0 bottom-10 z-10',
          'flex flex-col items-center gap-2 sm:gap-4 md:gap-5',
          'text-center text-black',
          'md:bottom-[40%] md:left-20 md:top-1/2 md:w-1/2 md:-translate-y-1/2 md:items-start md:text-left',
          'lg:bottom-1/3 lg:left-24 xl:left-32 2xl:left-48'
        )}
      >
        <Heading
          heading="A framework | for fine design"
          leading={3}
          className="text-white md:text-black"
        />
        <p className="mt-4 w-[35ch] text-white md:mt-5 md:text-black">
          Crafted through intention and innovation, Reaux defines the new era of fine jewelry.
        </p>
        <div className="hidden md:flex md:flex-row md:gap-5">
          <PrimaryBtn name="Shop now" />
          <SecondaryBtn name="Discover more" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:hidden">
          <PrimaryBtn name="Shop now" color="white" />
          <SecondaryBtn name="Discover more" color="white" />
        </div>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className={clsx(
          'absolute bottom-20 right-4 top-auto z-10',
          'flex w-[calc(100%-2rem)] max-w-xs select-none flex-col justify-start',
          'text-right text-black',
          'sm:bottom-auto sm:right-8 sm:top-56 sm:w-auto',
          'md:right-16 lg:right-24 xl:right-32 2xl:right-48'
        )}
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
