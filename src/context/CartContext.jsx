import { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []); // { id, item, quantity }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, quantity = 1) => {
    if (!item || !item.id) return;
    setCartItems((prev) => {
      const idx = prev.findIndex((ci) => ci.id === item.id);
      if (idx > -1) {
        // update existing quantity
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      // add new entry
      return [...prev, { id: item.id, item, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) => {
      if (quantity <= 0) return prev.filter((ci) => ci.id !== id);
      return prev.map((ci) => (ci.id === id ? { ...ci, quantity } : ci));
    });
  };

  const removeCartItem = (id) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== id));
  };

  const removeCartItems = (ids = []) => {
    if (!ids.length) return;
    setCartItems((prev) => prev.filter((ci) => !ids.includes(ci.id)));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = useMemo(
    () => cartItems.reduce((sum, ci) => sum + ci.quantity, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      removeCartItem,
      removeCartItems,
      clearCart,
      totalItems,
    }),
    [cartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
