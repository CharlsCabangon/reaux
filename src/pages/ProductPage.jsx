import { useParams, useNavigate } from 'react-router-dom';

import ProductDetail from '../components/ProductDetail';
import { PrimaryBtn } from '@/components/Buttons';
import { jewelryData } from '../data/productData';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = jewelryData.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <main className="min-h-screen p-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4">Product not found.</p>
            <PrimaryBtn name="Back" onClick={() => navigate(-1)} />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen md:p-12">
        <ProductDetail product={product} />
      </main>
    </>
  );
}
