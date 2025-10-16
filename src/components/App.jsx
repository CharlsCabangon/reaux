import Header from './Header';
import Hero from './Hero';
import PressMarquee from './PressMarquee';
import Feature from './Feature';
import Banner from './Banner';
import DecorCard from './DecorCard';

import { getAsset } from '@/data/assetData';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <PressMarquee />
      <Feature img={getAsset('rendered-perfectly')} isLeft={true} />
      <Feature img={getAsset('rendered-perfectly')} isLeft={false} />
      <div className="flex w-full justify-center gap-10 p-5">
        <DecorCard img={getAsset('ephemeral')} link="See more" isGlare={true} />
        <DecorCard img={getAsset('infinite')} link="See more" isGlare={true} />
        <DecorCard img={getAsset('cascade')} link="See more" isGlare={true} />
      </div>
      <Banner img={getAsset('diamonds-are-forever')} />
    </div>
  );
}
