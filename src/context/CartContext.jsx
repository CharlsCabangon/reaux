import { createContext, useReducer, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { calculateTotal, calculateSelectedTotal } from "@/utils/calculateTotal";

const STORAGE_KEY = 'cart';

// actions
const ACTIONS = {
  INIT: 'INIT',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  REMOVE_MULTIPLE: 'REMOVE_MULTIPLE',
  UPDATE_QTY: 'UPDATE_QTY',
  TOGGLE_SELECT: 'TOGGLE_SELECT',
  SELECT_ALL: 'SELECT_ALL',
  UNSELECT_ALL: 'UNSELECT_ALL',
  CLEAR: 'CLEAR',
};

// reducer
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INIT: {
      return action.payload || { items: [], selectedIds: [] };
    }

    case ACTIONS.ADD: {
      const { item, quantity } = action.payload;
      if (!item || !item.id) return state;

      const idx = state.items.findIndex((ci) => ci.id === item.id);
      if (idx > -1) {
        const next = state.items.map((ci, i) =>
          i === idx ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
        return { ...state, items: next };
      }

      // new item: select it by default
      return {
        ...state,
        items: [...state.items, { id: item.id, item, quantity }],
        selectedIds: [...state.selectedIds, item.id],
      };
    }

    case ACTIONS.REMOVE: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.filter((ci) => ci.id !== id),
        selectedIds: state.selectedIds.filter((sid) => sid !== id),
      };
    }

    case ACTIONS.REMOVE_MULTIPLE: {
      const ids = action.payload || [];
      if (!ids.length) return state;
      return {
        ...state,
        items: state.items.filter((ci) => !ids.includes(ci.id)),
        selectedIds: state.selectedIds.filter((sid) => !ids.includes(sid)),
      };
    }

    case ACTIONS.UPDATE_QTY: {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((ci) => ci.id !== id),
          selectedIds: state.selectedIds.filter((sid) => sid !== id),
        };
      }
      return {
        ...state,
        items: state.items.map((ci) => (ci.id === id ? { ...ci, quantity } : ci)),
      };
    }

    case ACTIONS.TOGGLE_SELECT: {
      const id = action.payload;
      return {
        ...state,
        selectedIds: state.selectedIds.includes(id)
          ? state.selectedIds.filter((sid) => sid !== id)
          : [...state.selectedIds, id],
      };
    }

    case ACTIONS.SELECT_ALL: {
      return { ...state, selectedIds: state.items.map((ci) => ci.id) };
    }

    case ACTIONS.UNSELECT_ALL: {
      return { ...state, selectedIds: [] };
    }

    case ACTIONS.CLEAR: {
      return { items: [], selectedIds: [] };
    }

    default:
      return state;
  }
}

// safe JSON parse helper
function safeLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [], selectedIds: [] };
    const items = JSON.parse(raw);
    if (!Array.isArray(items)) return { items: [], selectedIds: [] };
    const selectedIds = items.map((ci) => ci.id);
    return { items, selectedIds };
  } catch {
    return { items: [], selectedIds: [] };
  }
}

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => safeLoad());

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // noop
    }
  }, [state.items]);

  // actions (memoized)
  const addToCart = useCallback((item, quantity = 1) => {
    if (!item || !item.id) return;
    const qty = Number(quantity) || 1;
    dispatch({ type: ACTIONS.ADD, payload: { item, quantity: qty } });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE, payload: id });
  }, []);

  const removeMultiple = useCallback((ids = []) => {
    dispatch({ type: ACTIONS.REMOVE_MULTIPLE, payload: ids });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const qty = Number(quantity) || 0;
    dispatch({ type: ACTIONS.UPDATE_QTY, payload: { id, quantity: qty } });
  }, []);

  const toggleItemSelected = useCallback((id) => {
    dispatch({ type: ACTIONS.TOGGLE_SELECT, payload: id });
  }, []);

  const selectAll = useCallback(() => {
    dispatch({ type: ACTIONS.SELECT_ALL });
  }, []);

  const unselectAll = useCallback(() => {
    dispatch({ type: ACTIONS.UNSELECT_ALL });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR });
  }, []);

  // derived values (memoized)
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
