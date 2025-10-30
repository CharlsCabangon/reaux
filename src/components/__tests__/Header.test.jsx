import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { useInView } from 'react-intersection-observer';

import Header from '../Header';

vi.mock('../NavBar', () => ({
  default: () => <nav data-testid="navbar">NavBar</nav>,
}));

vi.mock('../NavBarSticky', () => ({
  default: () => <nav data-testid="navbar-sticky">NavBarSticky</nav>,
}));

vi.mock('react-intersection-observer', () => ({
  useInView: vi.fn(),
}));

describe('Header component', () => {
  const renderHeader = () => render(<Header />);

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders NavBar when in view (user at top of page)', () => {
    useInView.mockReturnValue([{ current: null }, true]);

    renderHeader();

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.queryByTestId('navbar-sticky')).not.toBeInTheDocument();
  });

  it('renders NavBarSticky when not in view (user scrolled down)', () => {
    useInView.mockReturnValue([{ current: null }, false]);

    renderHeader();

    expect(screen.getByTestId('navbar-sticky')).toBeInTheDocument();
    expect(screen.queryByTestId('navbar')).not.toBeInTheDocument();
  });
});
