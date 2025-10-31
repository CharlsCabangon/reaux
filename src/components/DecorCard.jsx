import PropTypes from 'prop-types';

import Tilt from 'react-parallax-tilt';

export default function DecorCard({ img, link = 'See more', hasGlare = false }) {
  return (
    <article className="mx-auto flex w-full max-w-xs flex-col items-center justify-center text-center sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <Tilt
        tiltEnable={false}
        glareEnable={hasGlare}
        glarePosition="all"
        glareMaxOpacity={0.3}
        glareBorderRadius="0.75rem"
        className="w-full"
      >
        <div
          className="relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg bg-gray shadow-md transition-shadow duration-300 hover:shadow-xl"
          role="img"
          aria-label={img.alt}
        >
          <img
            src={img.image}
            alt={img.alt}
            className="absolute inset-0 h-full w-full rounded-lg object-cover"
          />
        </div>
      </Tilt>

      <h4 className="mb-1 mt-4 sm:mt-5">{img.title}</h4>
      <a href="#" aria-label={`${link} ${img.title}`}>
        {link}
      </a>
    </article>
  );
}

DecorCard.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  link: PropTypes.string,
  hasGlare: PropTypes.bool,
};
