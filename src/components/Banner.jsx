import PropTypes from 'prop-types';

import Heading from './Heading';

export default function Banner({ type, banner, imgClassName, hasCTA = true }) {
  const isVideo = type === 'video';
  return (
    <section
      className="relative flex h-[60vh] w-full justify-center overflow-hidden sm:h-[65vh] md:h-[70vh] lg:h-[75vh]"
      role="region"
      aria-label={banner.title || 'Banner section'}
    >
      <div className="relative h-full w-full">
        {isVideo ? (
          <video
            data-testid="banner-video"
            src={banner.video}
            className={`absolute inset-0 h-full w-full object-cover ${imgClassName || ''}`}
            autoPlay
            loop
            muted
            playsInline
            aria-label={banner.alt || banner.title}
          />
        ) : (
          <img
            src={banner.image}
            alt={banner.alt || banner.title}
            className={`absolute inset-0 h-full w-full object-cover object-center ${imgClassName || ''}`}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-[#000]/60" aria-hidden="true"></div>
      </div>

      <div className="absolute bottom-6 z-10 flex w-[90%] flex-col items-center text-center text-off-white sm:bottom-8 sm:w-[85%] md:bottom-10 md:w-[80%] lg:w-[70%] xl:w-2/3">
        <Heading heading={banner.title} />
        <p className="mb-2 mt-2 sm:mb-3 sm:mt-3">{banner.content}</p>
        {hasCTA && banner.cta && (
          <a
            href="#"
            className="text-off-white-muted"
            aria-label={`${banner.cta} - ${banner.title}`}
          >
            {banner.cta}
          </a>
        )}
      </div>
    </section>
  );
}

Banner.propTypes = {
  type: PropTypes.oneOf(['image', 'video']).isRequired,
  banner: PropTypes.shape({
    image: PropTypes.string,
    video: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  imgClassName: PropTypes.string,
  hasCTA: PropTypes.bool,
};
