import { render, screen } from '@testing-library/react';

import { mockAsset } from './__mocks__/fixtures/assets';

import Banner from '../Banner';

vi.mock('../Heading', () => ({
  __esModule: true,
  default: ({ heading }) => <h2>{heading}</h2>,
}));

describe('Banner component', () => {
  const renderBanner = (asset, cta) =>
    render(<Banner type={asset.id} banner={asset} hasCTA={cta} />);

  it('renders an image banner with heading, content, and CTA', () => {
    const { title, image, alt, content, cta } = mockAsset[0];

    renderBanner(mockAsset[0], true);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: cta })).toBeInTheDocument();

    const img = screen.getByRole('img', { name: alt });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', image);
  });

  it('renders a video banner when type is video', () => {
    const { title, video, content } = mockAsset[2];

    renderBanner(mockAsset[2], true);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();

    const vid = screen.getByTestId('banner-video');
    expect(vid).toBeInTheDocument();
    expect(vid).toHaveAttribute('src', video);
    expect(vid).toHaveAttribute('autoPlay');
    expect(vid).toHaveAttribute('loop');
    expect(vid.muted).toBe(true);
  });

  it('does not render CTA when hasCTA is false', () => {
    const { title, content, cta } = mockAsset[0];

    renderBanner(mockAsset[0], false);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: cta })).not.toBeInTheDocument();
  });
});
