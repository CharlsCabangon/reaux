import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NavBar from '../NavBar';
import NavBarSticky from '../NavBarSticky';

vi.mock('@/assets/logo/ReauxLogo', () => ({
  default: () => <div data-testid="logo">Logo</div>,
}));
vi.mock('@/assets/icons/SearchIcon', () => ({
  default: () => <div data-testid="search-icon">Search</div>,
}));
vi.mock('@/assets/icons/LocationIcon', () => ({
  default: () => <div data-testid="location-icon">Location</div>,
}));
vi.mock('../controls/ButtonCart', () => ({
  default: () => <button data-testid="button-cart">Cart</button>,
}));
describe('NavBar', () => {
  it('renders logo and icons', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('location-icon')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('button-cart')).toBeInTheDocument();
  });

  it('renders navigation links with correct text', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
  });
});

describe('NavBarSticky', () => {
  it('renders logo and icons', () => {
    render(
      <MemoryRouter>
        <NavBarSticky />
      </MemoryRouter>
    );

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('button-cart')).toBeInTheDocument();
  });
  it('renders navigation links with correct text', () => {
    render(
      <MemoryRouter>
        <NavBarSticky />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
  });
});
