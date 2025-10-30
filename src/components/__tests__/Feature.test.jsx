import { render, screen } from '@testing-library/react';

import { mockAsset } from './__mocks__/fixtures/assets';

import Feature from '../Feature';

describe('Feature component', () => {
  const renderFeature = (asset, props = {}) => render(<Feature feature={asset} {...props} />);

  it('renders the feature image, title, content, and CTA', () => {
    const { title, image, alt, content, cta } = mockAsset[0];

    renderFeature(mockAsset[0]);

    const img = screen.getByRole('img', { name: alt });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', image);
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: cta })).toBeInTheDocument();
  });

  it('renders multiple paragraphs when feature content is an array', () => {
    const { content } = mockAsset[1];

    renderFeature(mockAsset[1]);

    content.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument();
    });
  });
});
