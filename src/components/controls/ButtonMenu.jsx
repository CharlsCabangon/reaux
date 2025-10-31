import PropTypes from 'prop-types';

import { Bars3Icon } from '@heroicons/react/20/solid';

export default function ButtonMenu({ onClick, isOpen }) {
  return (
    <button onClick={onClick} aria-label="Toggle menu" aria-expanded={isOpen} className="flex">
      <Bars3Icon className="h-5 w-5 text-black sm:h-6 sm:w-6" />
    </button>
  );
}

ButtonMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};
