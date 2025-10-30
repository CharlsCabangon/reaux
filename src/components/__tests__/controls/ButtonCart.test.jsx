import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../__mocks__/helpers/mockNavigate';
import { mockNavigate } from '../__mocks__/helpers/mockNavigate';
import { setTotalItemsMock } from '../__mocks__/context/cart';

import ButtonCart from '@/components/controls/ButtonCart';

describe('ButtonCart component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    mockNavigate.mockReset();
    setTotalItemsMock(0);
  });

  const renderButton = () => render(<ButtonCart />);

  it('renders the cart button', () => {
    renderButton();

    const button = screen.getByRole('button', { name: /open cart/i });
    expect(button).toBeInTheDocument();
  });

  it('does not show badge when totalItems is 0', () => {
    setTotalItemsMock(0);

    renderButton();

    const badge = screen.queryByText(/0/);
    expect(badge).not.toBeInTheDocument();
  });

  it('shows badge when totalItems is greater than 0', () => {
    setTotalItemsMock(3);

    renderButton();

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('navigates to /cart when clicked', async () => {
    setTotalItemsMock(2);

    renderButton();

    const button = screen.getByRole('button', { name: /open cart/i });

    await user.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/cart');
  });
});
