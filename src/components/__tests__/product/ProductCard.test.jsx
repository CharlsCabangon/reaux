import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

import '../__mocks__/helpers/mockNavigate';
import { mockNavigate } from '../__mocks__/helpers/mockNavigate';
import { mockItem } from '../__mocks__/fixtures/product';

import ProductCard from '@/components/product/ProductCard';

describe('ProductCard component', () => {
  const item = { ...mockItem };

  let user;

  beforeEach(() => {
    user = userEvent.setup();
    mockNavigate.mockReset();
  });

  const renderProductCard = () =>
    render(
      <MemoryRouter>
        <ProductCard item={mockItem} />
      </MemoryRouter>
    );

  it('renders product name, specs, and price', () => {
    renderProductCard();

    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.specs)).toBeInTheDocument();
    expect(screen.getByText(item.price)).toBeInTheDocument();
  });

  it('renders main image initially', () => {
    renderProductCard();

    const img = screen.getByAltText(`${item.name} main view`);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', item.images.main);
  });

  it('switches to worn image on hover and back on mouse leave', async () => {
    renderProductCard();

    const card = screen.getByText(item.name).closest('div');
    await user.hover(card);

    expect(screen.getByAltText(`${item.name} worn view`)).toBeInTheDocument();

    await user.unhover(card);
    expect(screen.getByAltText(`${item.name} main view`)).toBeInTheDocument();
  });

  it('navigates to product page when clicked', async () => {
    renderProductCard();

    const card = screen.getByText(item.name).closest('div');

    await user.click(card);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`/product/${item.id}`);
  });
});
