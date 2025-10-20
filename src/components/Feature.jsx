import PropTypes from 'prop-types';

import Heading from './Heading';

export default function Feature({ img, isLeft = true, children = null }) {
  return (
    <section
      className={`my-10 flex h-screen w-full items-center ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className="flex h-full w-[50%] justify-center">
        <img
          src={img.image}
          alt={img.alt}
          className="h-auto w-[75%] min-w-[400px] max-w-[800px] rounded-lg object-cover"
        />
      </div>
      <div className={`w-[50%] px-5 ${isLeft ? '' : 'ml-20'}`}>
        <Heading heading={img.title} />
        <p className="mt-4 w-5/6 font-light text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eum magni, consectetur atque
          maxime officiis, sunt, incidunt aliquam alias nam sit? Quam quia animi fuga earum, facilis
          atque tempora, voluptas praesentium sed molestias voluptate. Exercitationem iure
          asperiores nam porro voluptatem.
        </p>
        {children}
      </div>
    </section>
  );
}

Feature.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,

  isLeft: PropTypes.bool,
  children: PropTypes.node,
};
