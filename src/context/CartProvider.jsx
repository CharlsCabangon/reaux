import { useReducer, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from './CartContext';
import { cartReducer } from '@/reducers/cartReducer';
import { CART_ACTIONS } from '@/reducers/cartActions';
import { loadCart, saveCart } from '@/utils/loadCart';
import { calculateTotal, calculateSelectedTotal } from '@/utils/calculateTotal';

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, () => loadCart());

  useEffect(() => saveCart(state.items), [state.items]);

  const addToCart = useCallback((item, quantity = 1) => {
    if (!item || !item.id) return;
    const qty = Number(quantity) || 1;
    dispatch({
      type: CART_ACTIONS.ADD,
      payload: { item, quantity: qty },
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: CART_ACTIONS.REMOVE, payload: id });
  }, []);

  const removeMultiple = useCallback((ids = []) => {
    dispatch({ type: CART_ACTIONS.REMOVE_MULTIPLE, payload: ids });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const qty = Number(quantity) || 0;
    dispatch({
      type: CART_ACTIONS.UPDATE_QTY,
      payload: { id, quantity: qty },
    });
  }, []);

  const toggleItemSelected = useCallback((id) => {
    dispatch({ type: CART_ACTIONS.TOGGLE_SELECT, payload: id });
  }, []);

  const selectAll = useCallback(() => {
    dispatch({ type: CART_ACTIONS.SELECT_ALL });
  }, []);

  const unselectAll = useCallback(() => {
    dispatch({ type: CART_ACTIONS.UNSELECT_ALL });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: CART_ACTIONS.CLEAR });
  }, []);

  const cartItems = state.items;
  const selectedIds = state.selectedIds;

  const total = useMemo(() => calculateTotal(cartItems), [cartItems]);
  const selectedTotal = useMemo(
    () => calculateSelectedTotal(cartItems, selectedIds),
    [cartItems, selectedIds]
  );
  const totalItems = useMemo(() => cartItems.reduce((s, ci) => s + ci.quantity, 0), [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      selectedIds,
      addToCart,
      removeFromCart,
      removeMultiple,
      updateQuantity,
      toggleItemSelected,
      selectAll,
      unselectAll,
      clearCart,
      total,
      selectedTotal,
      totalItems,
    }),
    [
      cartItems,
      selectedIds,
      addToCart,
      removeFromCart,
      removeMultiple,
      updateQuantity,
      toggleItemSelected,
      selectAll,
      unselectAll,
      clearCart,
      total,
      selectedTotal,
      totalItems,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
