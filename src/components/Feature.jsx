import PropTypes from 'prop-types';
import clsx from 'clsx';

import Heading from './Heading';

export default function Feature({ feature, isLeft = true, headingGap = false, children = null }) {
  return (
    <section
      className={clsx(
        'flex flex-col items-center justify-center gap-8',
        'my-10 px-4',
        'sm:my-12 sm:gap-10 sm:px-6',
        'md:my-14 md:flex-row md:px-8',
        'lg:my-16 lg:gap-12 lg:px-12 xl:my-20 xl:gap-16',
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      <div className="flex w-full justify-center md:w-1/2">
        <img
          src={feature.image}
          alt={feature.alt}
          className="h-[500px] w-full max-w-[700px] rounded-lg object-cover shadow-md md:h-[650px] lg:h-[750px]"
        />
      </div>

      <div
        className={clsx(
          'flex w-full flex-col gap-3 text-center',
          'md:w-1/2 md:text-left',
          isLeft ? 'md:pl-4 lg:pl-8 xl:pl-10' : 'md:pl-6 lg:pl-10 xl:pl-14'
        )}
      >
        <Heading heading={feature.title} />
        <div
          className={clsx(
            'mx-auto max-w-[60ch] space-y-3 md:mx-0 md:mt-3',
            headingGap ? 'mt-8 sm:mt-10 md:mt-12' : ''
          )}
        >
          {Array.isArray(feature.content) ? (
            feature.content.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{feature.content}</p>
          )}
        </div>
        <a href="#" aria-label={`${feature.cta} - ${feature.title}`}>
          {feature.cta}
        </a>
        {children}
      </div>
    </section>
  );
}

Feature.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  }).isRequired,
  isLeft: PropTypes.bool,
  headingWrap: PropTypes.string,
  headingGap: PropTypes.bool,
  children: PropTypes.node,
};
