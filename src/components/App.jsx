import Header from './Header';
import Hero from './Hero';
import PressMarquee from './PressMarquee';
import DecorCard from './DecorCard';

import { getDecor } from '@/data/assetData';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <PressMarquee />
      <div>
        <DecorCard
          img={getDecor('rendered-perfectly')}
          title="Static to Dynamic"
          link="See more"
        />
      </div>
    </div>
  );
}
