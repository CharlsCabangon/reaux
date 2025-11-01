import { useEffect } from 'react';

import Feature from '@/components/Feature';
import Heading from '@/components/Heading';
import PressMarquee from '@/components/Marquee';
import CTA from '@/components/CTA';
import { PrimaryBtn } from '@/components/controls/Button';

import { getAsset } from '@/data/assetData';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'The Story of Reaux';
  }, []);

  return (
    <main className="mt-32 flex flex-col sm:mt-40 md:mt-48 lg:mt-56" role="main">
      <header className="flex flex-col items-center gap-8 text-center sm:gap-10 md:gap-12">
        <h2 id="story-heading">THE STORY OF REAUX</h2>
        <div className="max-w-[60ch] space-y-3 px-4 sm:px-0">
          <p>
            Reaux was born from a love for clean lines and quiet detail. Each piece is crafted with
            purpose—modern, refined, and timeless.
          </p>
          <em className="block text-sm font-light italic sm:text-base">Rendered perfectly.</em>
        </div>
      </header>
      <hr />
      <Feature feature={getAsset('vision-rendered')} />
      <hr />
      <Feature feature={getAsset('fine-design')} isLeft={false} />
      <PressMarquee />
      <Feature feature={getAsset('reaux-worldwide')} headingGap={true} />
      <hr />
      <CTA>
        <h3>Luxury has its circle. You’re invited.</h3>
        <p className="max-w-2xl">
          Joining Reaux Club means first access to limited collections, private previews, and
          personal styling insights — all crafted for those who see luxury as an art form.
        </p>
        <PrimaryBtn name="Join the Reaux Club" />
      </CTA>
    </main>
  );
}
