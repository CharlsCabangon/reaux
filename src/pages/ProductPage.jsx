import { useParams, useNavigate } from 'react-router-dom';

import ProductDetail from '../components/product/ProductDetail';
import FallbackPage from './FallbackPage';
import { PrimaryBtn } from '@/components/controls/Button';
import { jewelryData } from '../data/productData';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = jewelryData.find((p) => p.id === id);

  if (!product) {
    return (
      <FallbackPage>
        <h3 className="mb-4">This piece is unavailable.</h3>
        <PrimaryBtn name="Back" onClick={() => navigate(-1)} />
      </FallbackPage>
    );
  }

  return (
    <>
      <main className="mt-32 min-h-screen md:p-12">
        <ProductDetail product={product} />
      </main>
    </>
  );
}
