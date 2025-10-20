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
      className="relative h-0 border-none bg-none"
    >
      <CartIcon />
      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black font-roboto text-xs text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}
