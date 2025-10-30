import { vi } from 'vitest';

export const addToCartMock = vi.fn();
export const removeFromCartMock = vi.fn();
export const removeMultipleMock = vi.fn();
export const updateQuantityMock = vi.fn();
export const toggleItemSelectedMock = vi.fn();
export const selectAllMock = vi.fn();
export const unselectAllMock = vi.fn();
export const clearCartMock = vi.fn();
export const totalItemsMock = { value: 0 };

let _totalItems = 0;
let _total = 0;
let _selectedTotal = 0;

export const setTotalItemsMock = (value) => (_totalItems = value);
export const setTotalMock = (value) => (_total = value);
export const setSelectedTotalMock = (value) => (_selectedTotal = value);

vi.mock('@/context/useCart', () => ({
  useCart: () => ({
    cartItems: [],
    selectedIds: [],
    addToCart: addToCartMock,
    removeFromCart: removeFromCartMock,
    removeMultiple: removeMultipleMock,
    updateQuantity: updateQuantityMock,
    toggleItemSelected: toggleItemSelectedMock,
    selectAll: selectAllMock,
    unselectAll: unselectAllMock,
    clearCart: clearCartMock,
    get total() {
      return _total;
    },
    get selectedTotal() {
      return _selectedTotal;
    },
    get totalItems() {
      return _totalItems;
    },
  }),
}));
