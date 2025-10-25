import PropTypes from 'prop-types';

import Tilt from 'react-parallax-tilt';

export default function DecorCard({ img, link = 'See more', hasGlare = false }) {
  return (
    <div className="align-center flex w-[24rem] flex-col justify-center text-center">
      <Tilt
        tiltEnable={false}
        glareEnable={hasGlare}
        glarePosition="all"
        glareMaxOpacity={0.3}
        glareBorderRadius="0.75rem"
      >
        <div className="relative h-[33rem] cursor-pointer overflow-hidden rounded-lg bg-gray shadow-md">
          <img
            src={img.image}
            alt={img.alt}
            className="absolute inset-0 h-full w-full rounded-lg object-cover"
          />
        </div>
      </Tilt>

      <h4 className="mb-1 mt-5">{img.title}</h4>
      <a>{link}</a>
    </div>
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
