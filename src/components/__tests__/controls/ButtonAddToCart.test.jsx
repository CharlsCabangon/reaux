import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { addToCartMock } from '../__mocks__/context/cart';
import { mockItem } from '../__mocks__/fixtures/product';

import ButtonAddToCart from '@/components/controls/ButtonAddToCart';

describe('ButtonAddToCart component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    addToCartMock.mockReset();
  });

  const renderButton = (quantity) =>
    render(<ButtonAddToCart product={mockItem} quantity={quantity} />);

  it('renders the button with correct label', () => {
    renderButton();

    const button = screen.getByRole('button', { name: /add to cart/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/add to cart/i);
  });

  it('calls addToCart with default quantity when clicked', async () => {
    renderButton(); // quantity defaults to 1
    const button = screen.getByRole('button', { name: /add to cart/i });

    await user.click(button);

    expect(addToCartMock).toHaveBeenCalledTimes(1);
    expect(addToCartMock).toHaveBeenCalledWith(mockItem, 1);
  });

  it('calls addToCart with custom quantity when clicked', async () => {
    renderButton(5);
    const button = screen.getByRole('button', { name: /add to cart/i });

    await user.click(button);

    expect(addToCartMock).toHaveBeenCalledTimes(1);
    expect(addToCartMock).toHaveBeenCalledWith(mockItem, 5);
  });

  it('is accessible via aria-label', () => {
    renderButton();

    const button = screen.getByRole('button', { name: /add to cart/i });

    expect(button).toHaveAccessibleName('Add to cart');
  });
});
