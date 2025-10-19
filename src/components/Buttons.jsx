import { useCart } from '@/context/useCart';
import CartIcon from '@/icons/CartIcon';

export function PrimaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group relative min-w-20 cursor-pointer overflow-hidden rounded-full border-none bg-black px-12 py-3 text-sm text-white transition-all duration-300 ease-out hover:bg-black active:bg-gray"
    >
      {/* shine layer */}
      <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

      <span className="relative z-10">{name}</span>
    </button>
  );
}

export function SecondaryBtn({ name, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group relative min-w-20 cursor-pointer overflow-hidden rounded-full border-2 border-black px-12 py-3 text-sm text-black transition-all duration-300 ease-out hover:bg-off-white-muted/50 active:border-gray active:bg-white/50 active:text-gray"
    >
      {/* shine layer */}
      <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>

      <span className="relative z-10">{name}</span>
    </button>
  );
}

export function AddToCartBtn({ product, quantity = 1 }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, Number(quantity));
  };

  return (
    <button
      onClick={handleAdd}
      className="group relative min-w-20 cursor-pointer overflow-hidden rounded-full border-none bg-black px-12 py-3 text-sm text-white transition-all duration-300 ease-out hover:bg-black active:bg-gray"
      aria-label="Add to cart"
    >
      {/* shine layer */}
      <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
      Add to cart
    </button>
  );
}

export function CartBtn() {
  const { totalItems } = useCart();

  return (
    <button className="relative h-0 border-none bg-none">
      <CartIcon />
      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white font-roboto">
          {totalItems}
        </span>
      )}
    </button>
  );
}
