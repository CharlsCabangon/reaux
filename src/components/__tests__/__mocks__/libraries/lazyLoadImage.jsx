import { vi } from 'vitest';

vi.mock('react-lazy-load-image-component', () => ({
  LazyLoadImage: ({ src, alt }) => <img src={src} alt={alt} data-testid={`lazy-img`} />,
}));
