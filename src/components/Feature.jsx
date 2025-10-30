import PropTypes from 'prop-types';
import Heading from './Heading';

export default function Feature({ feature, isLeft = true, headingGap = false, children = null }) {
  return (
    <section
      className={`my-14 flex flex-col items-center justify-center gap-10 px-6 md:my-20 md:flex-row ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="flex w-full justify-center md:w-1/2">
        <img
          src={feature.image}
          alt={feature.alt}
          className="h-[500px] w-full max-w-[700px] rounded-lg object-cover shadow-md md:h-[650px] lg:h-[750px]"
        />
      </div>

      <div
        className={`flex w-full flex-col gap-3 text-center md:w-1/2 md:text-left ${isLeft ? 'md:pl-10 md:pr-10' : 'md:pl-20 md:pr-10'}`}
      >
        <Heading heading={feature.title} />
        <div className={`max-w-[60ch] space-y-3 ${headingGap ? 'mt-12' : ''}`}>
          {Array.isArray(feature.content) ? (
            feature.content.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{feature.content}</p>
          )}
        </div>
        <a href="#">{feature.cta}</a>
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
  headingGap: PropTypes.bool,
  children: PropTypes.node,
};
