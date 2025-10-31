import Marquee from 'react-fast-marquee';
import { logos } from '@/data/assetData';

export default function PressMarquee() {
  return (
    <div
      className="w-full bg-black py-6 sm:py-8 md:py-10"
      role="region"
      aria-label="Press and media partners"
    >
      <Marquee speed={50} autoFill={true} pauseOnHover={false}>
        {logos.map((logo, index) => (
          <div
            key={logo.id || index}
            className="mx-12 flex items-center sm:mx-16 md:mx-20 lg:mx-24"
          >
            <img
              src={logo.svg}
              alt={logo.alt || logo.id}
              className="h-5 w-auto transition-all duration-300 sm:h-6 md:h-7"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
