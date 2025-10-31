import PropTypes from 'prop-types';

import { useCart } from '@/context/useCart';

export default function ButtonAddToCart({ product, quantity = 1 }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, Number(quantity));
  };

  return (
    <button
      onClick={handleAdd}
      aria-label={`Add ${product.name || 'item'} to cart`}
      className="group relative min-w-20 cursor-pointer overflow-hidden rounded-full border-none bg-black px-6 py-2 text-xs text-white shadow-sm transition-all duration-300 ease-out hover:bg-black active:bg-gray sm:px-8 sm:py-2.5 sm:text-sm md:px-10 md:py-3 lg:px-12"
    >
      {/* shine layer */}
      <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
      Add to cart
    </button>
  );
}

ButtonAddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    specs: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string,
    careInstructions: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.shape({
      main: PropTypes.string.isRequired,
      worn: PropTypes.string,
    }).isRequired,
  }).isRequired,
  quantity: PropTypes.number,
};
