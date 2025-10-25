import PropTypes from 'prop-types';

import Heading from './Heading';

export default function Banner({ banner, imgClassName, hasCTA = true }) {
  const isVideo = banner?.type === 'video';
  return (
    <section className="relative flex h-[75vh] w-full justify-center overflow-hidden">
      <div className="relative h-full w-full">
        {isVideo ? (
          <video
            src={banner.src.video}
            className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={banner.src.image}
            alt={banner.src.alt}
            className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
          />
        )}
        <div className="absolute inset-0 bg-[#000]/60"></div>
      </div>
      <div className="absolute bottom-10 z-10 flex w-2/3 flex-col items-center text-center text-off-white">
        <Heading heading={banner.src.title} />
        <p className="mb-3">{banner.src.content}</p>
        {hasCTA && (
          <a href="" className="text-off-white-muted">
            {banner.src.cta}
          </a>
        )}
      </div>
    </section>
  );
}

Banner.propTypes = {
  banner: PropTypes.shape({
    type: PropTypes.oneOf(['image', 'video']).isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  imgClassName: PropTypes.string,
  hasCTA: PropTypes.bool,
};
