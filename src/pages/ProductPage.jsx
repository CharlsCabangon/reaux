import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProductDetail from '../components/product/ProductDetail';
import ProductFeature from '@/components/product/ProductFeature';
import FallbackPage from './FallbackPage';
import { PrimaryBtn } from '@/components/controls/Button';
import { jewelryData } from '../data/productData';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = jewelryData.find((p) => p.id === id);

  useEffect(() => {
    document.title = `${product.name} | Reaux Online Store`;
  }, [product.id, product.name]);

  if (!product) {
    return (
      <FallbackPage>
        <h3 className="mb-4">This piece is unavailable.</h3>
        <p className="mb-6 text-black-muted">The product you're looking for cannot be found.</p>
        <PrimaryBtn name="Back" onClick={() => navigate(-1)} />
      </FallbackPage>
    );
  }

  return (
    <>
      <main
        className="mt-28 min-h-screen px-4 sm:mt-36 sm:px-6 md:mt-40 md:px-8 lg:mt-52 lg:px-12"
        role="main"
        aria-labelledby="product-name"
      >
        <ProductDetail product={product} />
      </main>
      <hr />
      <section
        className="mb-20 sm:mb-24 md:mb-28 lg:mb-32"
        aria-labelledby="recommendations-heading"
      >
        <h2 id="recommendations-heading" className="mb-6 text-center">
          Recommended for you
        </h2>
        <ProductFeature />
      </section>
    </>
  );
}
