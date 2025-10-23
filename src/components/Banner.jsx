import PropTypes from 'prop-types';

import Heading from './Heading';

export default function Banner({ img, imgClassName, hasCTA = true }) {
  return (
    <section className="relative flex h-[75vh] w-full justify-center">
      <div className="relative h-full w-full">
        <img
          src={img.image}
          alt={img.alt}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
        <div className="absolute inset-0 bg-[#000]/60"></div>
      </div>
      <div className="absolute bottom-16 z-10 w-2/3 text-center text-off-white">
        <Heading heading={img.title} />
        <p className="mb-3 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta enim dicta
          atque iste, illo, et delectus, quibusdam quos suscipit sequi quasi eum. Cupiditate dolore
          recusandae consequatur natus exercitationem beatae ipsa architecto earum repellendus!
          Suscipit.
        </p>
        {hasCTA && (
          <a href="" className="text-off-white-muted">
            Read more
          </a>
        )}
      </div>
    </section>
  );
}

Banner.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  imgClassName: PropTypes.string,
  hasCTA: PropTypes.bool,
};
