import { useContext } from 'react';
import { CartContext } from './CartContext';

// simple hook wrapper to keep imports consistent across project
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
export default useCart;