import { render, screen, within, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterDropdown from '@/components/product/FilterDropdown';

describe('FilterDropdown component', () => {
  const onChange = vi.fn();
  const options = ['all', 'earrings', 'bangle', 'necklace'];

  const renderFilterDropdown = () =>
    render(
      <FilterDropdown label="Shop by Category" options={options} value="all" onChange={onChange} />
    );

  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders label and toggle button', () => {
    renderFilterDropdown();

    expect(screen.getByText(/shop by category/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('opens and closes dropdown when clicking button', async () => {
    renderFilterDropdown();

    const toggle = screen.getByRole('button');

    await userEvent.click(toggle);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);

    await userEvent.click(toggle);

    await waitForElementToBeRemoved(() => screen.queryByRole('list'));
  });

  it('calls onChange when an option is selected', async () => {
    renderFilterDropdown();

    const toggle = screen.getByRole('button');
    await userEvent.click(toggle);

    const list = screen.getByRole('list');
    const opt = within(list).getByText('earrings');

    await userEvent.click(opt);

    expect(onChange).toHaveBeenCalled();
    const calledWith = onChange.mock.calls[0][0];
    expect(calledWith).toHaveProperty('target.value', 'earrings');
  });
});
