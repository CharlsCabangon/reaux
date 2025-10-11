import Flickity from 'react-flickity-component';

import Heading from './Heading';
import { PrimaryBtn, SecondaryBtn } from './Buttons';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <img
        src="/assets/hero-ariana-gold-swarovski.avif"
        //src="/assets/2160.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-10 text-black">
        <Heading heading="A framework for fine design" />
        <div className="flex gap-5">
          <PrimaryBtn name="Shop now" />
          <SecondaryBtn name="Discover more" />
        </div>
      </div>
    </section>
  );
}
