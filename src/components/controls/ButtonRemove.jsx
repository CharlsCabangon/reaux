import PropTypes from 'prop-types';

import { XMarkIcon } from '@heroicons/react/20/solid';

export default function ButtonRemove({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-1 transition-all duration-500 ease-out hover:bg-off-white-muted/50"
    >
      <XMarkIcon className="size-5 text-black" />
    </button>
  );
}

ButtonRemove.propTypes = {
  onClick: PropTypes.func.isRequired,
};
