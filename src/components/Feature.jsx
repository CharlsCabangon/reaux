import Heading from './Heading';

export default function Feature({ img, isLeft }) {
  return (
    <section
      className={`mt-3 flex h-screen w-full items-center ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className="flex h-full w-[50%] justify-center">
        <img src={img.image} alt={img.alt} className="w-[75%] max-w-[800px] h-auto rounded-lg object-cover" />
      </div>
      <div className={`w-[50%] px-5 ${isLeft ? '' : 'ml-24'}`}>
        <Heading heading={img.title} />
        <p className="text-black font-light mt-4 w-5/6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eum magni, consectetur atque
          maxime officiis, sunt, incidunt aliquam alias nam sit? Quam quia animi fuga earum, facilis
          atque tempora, voluptas praesentium sed molestias voluptate. Exercitationem iure
          asperiores nam porro voluptatem.
        </p>
      </div>
    </section>
  );
}
