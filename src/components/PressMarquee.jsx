import Marquee from 'react-fast-marquee';

import { logos } from '@/data/assetData';

export default function PressMarquee() {
  return (
    <div className="w-full bg-black py-8">
      <Marquee speed={40} autoFill={true} pauseOnHover={true}>
        {logos.map((logo) => (
          <div className="mx-24 flex items-center">
            <img
              src={logo.svg}
              alt={logo.id}
              className="h-7 w-auto transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
