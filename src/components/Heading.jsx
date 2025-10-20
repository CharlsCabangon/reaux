import PropTypes from 'prop-types';

export default function Heading({ heading }) {
  return (
    <h1 className="font-sourceSerif text-6xl leading-[0] first-letter:font-pinyon first-letter:text-9xl">
      {heading}
    </h1>
  );
}

Heading.propTypes = {
  heading: PropTypes.string,
};
