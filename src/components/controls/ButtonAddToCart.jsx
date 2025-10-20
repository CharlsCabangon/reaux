import { useCart } from '@/context/useCart';

export default function ButtonAddToCart({ product, quantity = 1 }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, Number(quantity));
  };

  return (
    <button
      onClick={handleAdd}
      aria-label="Add to cart"
      className="group relative min-w-20 cursor-pointer overflow-hidden rounded-full border-none bg-black px-12 py-3 text-sm text-white shadow-sm transition-all duration-300 ease-out hover:bg-black active:bg-gray"
    >
      {/* shine layer */}
      <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></span>
      Add to cart
    </button>
  );
}
