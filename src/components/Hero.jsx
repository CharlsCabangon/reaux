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
    <main className="relative min-h-screen w-full overflow-hidden">
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
              //src='public/assets/hero-swarovski-dulcis-collection.png'
              alt={item.alt}
              effect="blur"
              className="h-full w-full object-cover"
              wrapperClassName="w-full h-full" // ensures the LazyLoadImage wrapper fills its parent div, so object-cover works correctly
            />
          </div>
        ))}
      </Flickity>

      <div className="absolute left-32 top-10 z-10 flex h-full flex-col items-start justify-center text-black">
        <Heading
          heading={
            <span className="leading-[0]">
              <span>A framework</span>
              <br />
              <span>for fine design</span>
            </span>
          }
        />
        <p className="mt-10 w-1/2">
          Crafted through intention and innovation, Reaux defines the new era of fine jewelry.
        </p>
        <div className="mt-5 flex gap-5">
          <PrimaryBtn name="Shop now" />
          <SecondaryBtn name="Discover more" />
        </div>
      </div>

      <div className="absolute right-32 top-56 z-10 flex h-full w-1/5 select-none flex-col justify-start text-right text-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h5 className="font-semibold">{hero[heroIndex]?.title}</h5>
            <p className="mt-3 text-sm leading-relaxed">{hero[heroIndex]?.details}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
