import { vi } from 'vitest';

vi.mock('@/assets/icons/SearchIcon', () => ({
  default: () => <div data-testid="search-icon">Search</div>,
}));
vi.mock('@/assets/icons/LocationIcon', () => ({
  default: () => <div data-testid="location-icon">Location</div>,
}));
vi.mock('@/components/controls/ButtonCart', () => ({
  default: () => <button data-testid="button-cart">Cart</button>,
}));
