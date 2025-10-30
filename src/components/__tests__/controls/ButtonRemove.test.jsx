import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { removeFromCartMock } from '../__mocks__/context/cart';
import { mockItem } from '../__mocks__/fixtures/product';

import ButtonRemove from '@/components/controls/ButtonRemove';

describe('ButtonRemove component', () => {
  const { id } = mockItem;
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    removeFromCartMock.mockReset();
  });

  const renderButton = () => render(<ButtonRemove id={id} />);

  it('renders the remove button', () => {
    renderButton();

    const button = screen.getByRole('button', { name: /remove item/i });
    expect(button).toBeInTheDocument();
  });

  it('calls removeFromCart with the correct id when clicked', async () => {
    renderButton();

    const button = screen.getByRole('button', { name: /remove item/i });

    await user.click(button);

    expect(removeFromCartMock).toHaveBeenCalledTimes(1);
    expect(removeFromCartMock).toHaveBeenCalledWith(id);
  });
});
