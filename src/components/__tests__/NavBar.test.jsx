import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import './__mocks__/assets/logo';
import './__mocks__/assets/icons';
import './__mocks__/context/cart';

import NavBar from '../NavBar';
import NavBarSticky from '../NavBarSticky';

const renderNavBar = (initialEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <NavBar />
    </MemoryRouter>
  );

const renderNavBarSticky = (initialEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <NavBarSticky />
    </MemoryRouter>
  );

describe('NavBar component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup;
  });

  it('renders logo and icons', () => {
    renderNavBar();

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('location-icon')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('button-cart')).toBeInTheDocument();
  });

  it('renders navigation links with correct text', () => {
    renderNavBar();

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
  });

  it('marks the current route link as active', () => {
    renderNavBar(['/shop']);

    const shopLink = screen.getByRole('link', { name: /shop/i });

    expect(shopLink).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: /home/i })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: /about us/i })).not.toHaveAttribute('aria-current');
  });

  it('navigates through pages correctly when links are clicked', async () => {
    render(
      <MemoryRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<div data-testid="home-page">Home</div>} />
          <Route path="/shop" element={<div data-testid="shop-page">Shop</div>} />
          <Route path="/about" element={<div data-testid="about-page">About Us</div>} />
        </Routes>
      </MemoryRouter>
    );

    const shopLink = screen.getByRole('link', { name: /shop/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });

    await userEvent.click(shopLink);

    expect(screen.getByTestId('shop-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('about-page')).not.toBeInTheDocument();

    await userEvent.click(aboutLink);

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('shop-page')).not.toBeInTheDocument();
  });
});

describe('NavBarSticky component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup;
  });

  it('renders logo and icons', () => {
    renderNavBarSticky();

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('button-cart')).toBeInTheDocument();
  });

  it('renders navigation links with correct text', () => {
    renderNavBarSticky();

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
  });

  it('marks the current route link as active', () => {
    renderNavBarSticky(['/shop']);

    const shopLink = screen.getByRole('link', { name: /shop/i });

    expect(shopLink).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: /home/i })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: /about us/i })).not.toHaveAttribute('aria-current');
  });

  it('navigates through pages correctly when links are clicked', async () => {
    render(
      <MemoryRouter>
        <NavBarSticky />
        <Routes>
          <Route path="/" element={<div data-testid="home-page">Home</div>} />
          <Route path="/shop" element={<div data-testid="shop-page">Shop</div>} />
          <Route path="/about" element={<div data-testid="about-page">About Us</div>} />
        </Routes>
      </MemoryRouter>
    );

    const shopLink = screen.getByRole('link', { name: /shop/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });

    await userEvent.click(shopLink);

    expect(screen.getByTestId('shop-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('about-page')).not.toBeInTheDocument();

    await userEvent.click(aboutLink);

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    expect(screen.queryByTestId('home-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('shop-page')).not.toBeInTheDocument();
  });
});
