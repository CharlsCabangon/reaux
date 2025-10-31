import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import QuantitySelector from '@/components/controls/QuantitySelector';

describe('QuantitySelector component', () => {
  let onChangeMock;
  let user;

  beforeEach(() => {
    onChangeMock = vi.fn();
    user = userEvent.setup();
  });

  const renderSelector = (value = 1) =>
    render(<QuantitySelector value={value} onChange={onChangeMock} />);

  it('renders with initial value', () => {
    renderSelector(3);

    const input = screen.getByRole('textbox');
    expect(Number(input.value)).toBe(3);
  });

  it('increments value when + button is clicked', async () => {
    renderSelector(9);
    const incrementButton = screen.getByRole('button', { name: /increase quantity/i });

    await user.click(incrementButton);
    expect(onChangeMock).toHaveBeenCalledWith(10);
  });

  it('does not increment above 10', async () => {
    renderSelector(10);
    const incrementButton = screen.getByRole('button', { name: /increase quantity/i });

    await user.click(incrementButton);
    expect(onChangeMock).toHaveBeenCalledWith(10);
  });

  it('decrements value when - button is clicked', async () => {
    renderSelector(5);
    const decrementButton = screen.getByRole('button', { name: /decrease quantity/i });

    await user.click(decrementButton);
    expect(onChangeMock).toHaveBeenCalledWith(4);
  });

  it('does not decrement below 1', async () => {
    renderSelector(1);
    const decrementButton = screen.getByRole('button', { name: /decrease quantity/i });

    await user.click(decrementButton);

    expect(onChangeMock).toHaveBeenCalledWith(1);
  });

  it('limits value to 10 when incrementing via input', async () => {
    renderSelector(10);
    const input = screen.getByRole('textbox');

    await user.type(input, '1');

    expect(onChangeMock).toHaveBeenCalledWith(10);
  });

  it('ignores invalid input', async () => {
    renderSelector(1);
    const input = screen.getByRole('textbox');

    await user.clear(input);
    await user.type(input, 'abc');

    expect(onChangeMock).not.toHaveBeenCalledWith(expect.stringMatching(/[a-z]/));
  });

  it('allows empty input and passes empty string to onChange', async () => {
    renderSelector(3);
    const input = screen.getByRole('textbox');

    await user.clear(input);

    expect(onChangeMock).toHaveBeenCalledWith('');
  });
});
