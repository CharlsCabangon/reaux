import PropTypes from 'prop-types';

export default function ReauxLogo({ color = 'brand-black', size = 15, hasHover = false }) {
  const logoSrcMap = {
    'brand-black': '/assets/logo/reaux-wordmark-brand-black.svg',
    white: '/assets/logo/reaux-wordmark-white.svg',
    black: '/assets/logo/reaux-wordmark-black.svg',
  };

  const src = logoSrcMap[color] || logoSrcMap['brand-black'];

  return (
    <img
      src={src}
      alt="Reaux logo"
      style={{ width: `${size}vw` }}
      className={`max-w-[300px] transition-transform duration-300 ease-in-out ${hasHover ? 'hover:scale-105' : ''}`}
    />
  );
}

ReauxLogo.propTypes = {
  color: PropTypes.oneOf(['white', 'black', 'brand-black']),
  size: PropTypes.number,
  hasHover: PropTypes.bool,
};
