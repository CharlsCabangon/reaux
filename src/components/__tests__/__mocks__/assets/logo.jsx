import { vi } from 'vitest';

vi.mock('@/assets/logo/ReauxLogo', () => ({
  default: () => <div data-testid="logo">Logo</div>,
}));
