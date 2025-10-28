import PropTypes from 'prop-types';
import { useCart } from '@/context/useCart';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function ButtonRemove({ id }) {
  const { removeFromCart } = useCart();

  return (
    <button
      onClick={() => removeFromCart(id)}
      className="rounded-full p-1 transition-all duration-500 ease-out hover:bg-off-white-muted/50"
      aria-label="Remove item"
    >
      <XMarkIcon className="h-5 w-5 text-black" />
    </button>
  );
}

ButtonRemove.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
