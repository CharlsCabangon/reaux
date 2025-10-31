import PropTypes from 'prop-types';

export function PrimaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={name}
      className="group relative min-w-20 cursor-pointer overflow-hidden rounded-full border-none bg-black px-6 py-2 text-xs text-white shadow-sm transition-all duration-300 ease-out hover:bg-black active:bg-gray sm:px-8 sm:py-2.5 sm:text-sm md:px-10 md:py-3 lg:px-12"
    >
      {/* shine layer */}
      <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

      <span className="relative z-10 tracking-wide">{name}</span>
    </button>
  );
}

export function SecondaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={name}
      className="group relative min-w-20 cursor-pointer overflow-hidden rounded-full border-2 border-black px-6 py-2 text-xs text-black shadow-sm transition-all duration-300 ease-out hover:bg-off-white-muted/50 active:border-gray active:bg-white/50 active:text-gray sm:px-8 sm:py-2.5 sm:text-sm md:px-10 md:py-3 lg:px-12"
    >
      {/* shine layer */}
      <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

      <span className="relative z-10 tracking-wide">{name}</span>
    </button>
  );
}

PrimaryBtn.PropTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func.isRequired,
};

SecondaryBtn.PropTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func.isRequired,
};
