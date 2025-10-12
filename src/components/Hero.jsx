import Flickity from 'react-flickity-component';
import ProgressiveImage from 'react-progressive-graceful-image';

import Heading from './Heading';
import { PrimaryBtn, SecondaryBtn } from './Buttons';

import { hero } from '@/data/heroData';

export default function Hero() {
  const flickityOptions = {
    fade: true,
    wrapAround: true,
    initialIndex: 0,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
  };

  return (
    <Flickity
      options={flickityOptions}
      className="relative h-screen w-full overflow-hidden"
      elementType="div"
    >
      {hero.map((item, index) => (
        <div key={index} className="relative h-screen w-full">
          <img
            src={item.images[0]}
            alt={item.alt}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          />
          {/* Overlay Content */}
          <div className="relative z-10 flex h-full flex-col items-start justify-center px-10 text-black">
            <Heading heading={item.heading || 'A framework for fine design'} />
            <div className="mt-5 flex gap-5">
              <PrimaryBtn name="Shop now" />
              <SecondaryBtn name="Discover more" />
            </div>
          </div>
        </div>
      ))}
    </Flickity>
  );
}
