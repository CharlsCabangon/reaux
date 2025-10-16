import { useState } from 'react';

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import 'flickity-fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion, AnimatePresence } from 'framer-motion';

import Heading from './Heading';
import { PrimaryBtn, SecondaryBtn } from './Buttons';

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
    <section className="relative min-h-screen w-full overflow-hidden">
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

      <div className="absolute left-28 top-0 z-10 flex h-full flex-col items-start justify-center text-black">
        <Heading
          heading={
            <h1 className="leading-[0]">
              <span>A framework</span>
              <br />
              <span>for fine design</span>
            </h1>
          }
        />
        <p className="mt-10 w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis voluptatem
          facilis eveniet sapiente commodi!
        </p>
        <div className="mt-5 flex gap-5">
          <PrimaryBtn name="Shop now" />
          <SecondaryBtn name="Discover more" />
        </div>
      </div>

      <div className="absolute right-28 top-56 z-10 flex h-full w-1/5 select-none flex-col justify-start text-right text-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <p className="font-sourceSerif text-xl font-semibold">{hero[heroIndex]?.title}</p>
            <p className="mt-3 text-sm">{hero[heroIndex]?.details}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
