import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import './__mocks__/libraries/flickity';
import './__mocks__/libraries/lazyLoadImage';
import { hero as heroData } from '@/data/heroData';

import Hero from '../Hero';

describe('Hero component', () => {
  const renderHero = () => render(<Hero />);

  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders the first hero slide correctly', () => {
    const { title, details, images, alt } = heroData[0];

    renderHero();

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(details)).toBeInTheDocument();

    const img = screen.getByRole('img', { name: alt });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', images[0]);
  });

  it('renders all hero images', () => {
    renderHero();

    const imgs = screen.getAllByTestId('lazy-img');

    expect(imgs).toHaveLength(heroData.length);
    imgs.forEach((img, idx) => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', heroData[idx].images[0]);
      expect(img).toHaveAttribute('alt', heroData[idx].alt);
    });
  });

  it('renders both primary and secondary buttons with correct text', () => {
    renderHero();

    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /discover more/i })).toBeInTheDocument();
  });
});
