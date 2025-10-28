import { CART_ACTIONS } from './cartActions';

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.INIT: {
      return action.payload || { items: [], selectedIds: [] };
    }

    case CART_ACTIONS.ADD: {
      const { item, quantity } = action.payload;
      if (!item || !item.id) return state;

      const idx = state.items.findIndex((ci) => ci.id === item.id);
      if (idx > -1) {
        const next = state.items.map((ci, i) =>
          i === idx ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
        return { ...state, items: next };
      }

      return {
        ...state,
        items: [...state.items, { id: item.id, item, quantity }],
        selectedIds: [...state.selectedIds, item.id], // new item selected by default
      };
    }

    case CART_ACTIONS.REMOVE: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.filter((ci) => ci.id !== id),
        selectedIds: state.selectedIds.filter((sid) => sid !== id),
      };
    }

    case CART_ACTIONS.REMOVE_MULTIPLE: {
      const ids = action.payload || [];
      if (!ids.length) return state;
      return {
        ...state,
        items: state.items.filter((ci) => !ids.includes(ci.id)),
        selectedIds: state.selectedIds.filter((sid) => !ids.includes(sid)),
      };
    }

    case CART_ACTIONS.UPDATE_QTY: {
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

    case CART_ACTIONS.TOGGLE_SELECT: {
      const id = action.payload;
      return {
        ...state,
        selectedIds: state.selectedIds.includes(id)
          ? state.selectedIds.filter((sid) => sid !== id)
          : [...state.selectedIds, id],
      };
    }

    case CART_ACTIONS.SELECT_ALL: {
      return {
        ...state,
        selectedIds: state.items.map((ci) => ci.id),
      };
    }

    case CART_ACTIONS.UNSELECT_ALL: {
      return { ...state, selectedIds: [] };
    }

    case CART_ACTIONS.CLEAR: {
      return { items: [], selectedIds: [] };
    }

    default:
      return state;
  }
}
