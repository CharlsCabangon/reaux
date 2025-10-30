import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../__mocks__/helpers/mockNavigate';
import { mockNavigate } from '../__mocks__/helpers/mockNavigate';
import { toggleItemSelectedMock } from '../__mocks__/context/cart';
import { mockCartItem } from '../__mocks__/fixtures/product';

import ProductCartItem from '@/components/product/ProductCartItem';

describe('ProductCartItem component', () => {
  const cartItem = { ...mockCartItem };

  const renderCartItem = () => render(<ProductCartItem cartItem={cartItem} />);

  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders product name, specs, price, and image', () => {
    renderCartItem();

    expect(screen.getByText(cartItem.item.name)).toBeInTheDocument();
    expect(screen.getByText(cartItem.item.specs)).toBeInTheDocument();
    expect(screen.getByText(cartItem.item.price)).toBeInTheDocument();

    const img = screen.getByRole('img', { name: cartItem.item.name });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', cartItem.item.images.main);
  });

  it('calls toggleItemSelected when checkbox is clicked', async () => {
    renderCartItem();

    const checkbox = screen.getByLabelText(`Select ${cartItem.item.name}`);
    await user.click(checkbox);

    expect(toggleItemSelectedMock).toHaveBeenCalledWith(cartItem.id);
  });

  it('calls navigate to product page when product info is clicked', async () => {
    renderCartItem();

    const productInfo = screen.getByText(cartItem.item.name).closest('div');
    await user.click(productInfo);

    expect(mockNavigate).toHaveBeenCalledWith(`/product/${cartItem.id}`);
  });
});
