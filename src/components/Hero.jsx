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

      <div className="absolute left-4 top-10 z-10 flex h-full flex-col items-start justify-center text-black sm:left-8 md:left-16 lg:left-24 xl:left-32">
        <Heading heading="A framework | for fine design" />
        <p className="mt-10 w-1/2">
          Crafted through intention and innovation, Reaux defines the new era of fine jewelry.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:gap-5">
          <PrimaryBtn name="Shop now" />
          <SecondaryBtn name="Discover more" />
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
              <p className="mt-3 text-sm leading-relaxed">
                {hero[heroIndex]?.details}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
