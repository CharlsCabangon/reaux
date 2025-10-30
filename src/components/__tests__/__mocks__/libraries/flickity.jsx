import { vi } from 'vitest';

vi.mock('react-flickity-component', () => ({
  __esModule: true,
  default: ({ children, onChange }) => (
    <div data-testid="flickity-mock" data-onchange={onChange}>
      {children}
    </div>
  ),
}));
