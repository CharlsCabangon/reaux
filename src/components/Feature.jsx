import PropTypes from 'prop-types';
import Heading from './Heading';

export default function Feature({ img, isLeft = true, hasContent = true, children = null }) {
  return (
    <section
      className={`my-14 flex flex-col items-center justify-center gap-10 px-6 md:my-20 md:flex-row ${
        isLeft ? '' : 'md:flex-row-reverse'
      }`}
    >
      <div className="flex w-full justify-center md:w-1/2">
        <img
          src={img.image}
          alt={img.alt}
          className="h-[500px] w-full max-w-[700px] rounded-lg object-cover shadow-md md:h-[650px] lg:h-[750px]"
        />
      </div>

      <div
        className={`w-full text-center md:w-1/2 md:text-left ${isLeft ? 'md:pl-14 md:pr-10' : 'md:pl-20 md:pr-10'}`}
      >
        {hasContent && (
          <>
            <Heading heading={img.title} />
            <p className="mt-4 font-light text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum magni, consectetur
              atque maxime officiis, sunt, incidunt aliquam alias nam sit? Quam quia animi fuga
              earum, facilis atque tempora, voluptas praesentium sed molestias voluptate.
              Exercitationem iure asperiores nam porro voluptatem.
            </p>
          </>
        )}
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
  hasContent: PropTypes.bool,
  children: PropTypes.node,
};
