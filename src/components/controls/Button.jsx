import PropTypes from 'prop-types';

import clsx from 'clsx';
import { color } from 'framer-motion';

export function PrimaryBtn({ name, type = 'button', color = 'black', onClick }) {
  const colorClasses = {
    black: 'bg-black text-white hover:bg-black active:bg-gray',
    white: 'bg-off-white text-black hover:bg-light-gray active:bg-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={name}
      className={clsx(
        'group relative min-w-20 cursor-pointer overflow-hidden',
        'rounded-full border-none px-6 py-2 text-xs shadow-sm',
        'transition-all duration-300 ease-out',
        'sm:px-8 sm:py-2.5 sm:text-sm md:px-10 md:py-3 lg:px-12',
        colorClasses[color]
      )}
    >
      {/* shine layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      ></span>

      <span className="relative z-10 tracking-wide">{name}</span>
    </button>
  );
}

export function SecondaryBtn({ name, type = 'button', color = 'black', onClick }) {
  const colorClasses = {
    black:
      'border-black text-black hover:bg-off-white-muted/50 active:border-gray active:bg-white/50 active:text-gray',
    white:
      'border-off-white text-off-white hover:bg-off-white-muted/50 active:border-white active:bg-white active:text-off-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={name}
      className={clsx(
        'group relative min-w-20 cursor-pointer overflow-hidden',
        'rounded-full border-2 px-6 py-2 text-xs shadow-sm',
        'transition-all duration-300 ease-out',
        'sm:px-8 sm:py-2.5 sm:text-sm md:px-10 md:py-3 lg:px-12',
        colorClasses[color]
      )}
    >
      {/* shine layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      ></span>

      <span className="relative z-10 tracking-wide">{name}</span>
    </button>
  );
}

PrimaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['black', 'white']),
  onClick: PropTypes.func,
};

SecondaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['black', 'white']),
  onClick: PropTypes.func.isRequired,
};
