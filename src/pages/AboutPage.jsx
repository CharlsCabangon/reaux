import Feature from '@/components/Feature';
import Heading from '@/components/Heading';

import { getAsset } from '@/data/assetData';

export default function AboutPage() {
  return (
    <main className="mt-56 flex flex-col">
      <div className="text-center">
        <h2>THE STORY OF REAUX</h2>
      </div>
      <hr />
      <Feature img={getAsset('ariana-swarovski-capsule-collection')} hasContent={false}>
        <Heading heading="About us" />
      </Feature>
      <hr />
      <Feature img={getAsset('fine-design')} isLeft={false} />
      <hr />
      <Feature img={getAsset('reactive-framework')} />
    </main>
  );
}
