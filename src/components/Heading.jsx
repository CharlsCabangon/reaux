import PropTypes from 'prop-types';

export default function Heading({ heading, level = 'h1' }) {
  const Tag = level;
  const lines = typeof heading === 'string' ? heading.split('|') : [heading];

  const sizeClasses = {
    h1: 'text-4xl sm:text-5xl md:text-6xl',
    h2: 'text-3xl sm:text-4xl md:text-5xl',
    h3: 'text-2xl sm:text-3xl md:text-4xl',
    h4: 'text-xl sm:text-2xl md:text-3xl',
    h5: 'text-lg sm:text-xl',
    h6: 'text-base sm:text-lg',
  };

  return (
    <Tag
      className={`m-0 font-sourceSerif leading-3 first-letter:font-pinyon first-letter:text-6xl sm:first-letter:text-7xl md:first-letter:text-8xl lg:first-letter:text-9xl ${sizeClasses[level]}`}
      role="heading"
      aria-level={level.slice(1)}
    >
      {lines.map((line, idx) => (
        <span key={idx} className="block leading-3">
          {line}
        </span>
      ))}
    </Tag>
  );
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
