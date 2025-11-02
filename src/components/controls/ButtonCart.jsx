import { useNavigate } from 'react-router-dom';

import { useCart } from '@/context/useCart';
import CartIcon from '@/assets/icons/CartIcon';

export default function ButtonCart() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleCartSelect = () => {
    navigate('/cart');
  };

  return (
    <button
      onClick={handleCartSelect}
      aria-label="Open cart"
      className="relative flex transition-opacity duration-300 ease-out hover:opacity-80"
    >
      <CartIcon />
      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black font-roboto text-[10px] text-white sm:h-5 sm:w-5 sm:text-xs">
          {totalItems}
        </span>
      )}
    </button>
  );
}
