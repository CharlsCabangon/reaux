import { useState } from 'react';

import ButtonAddToCart from '../controls/ButtonAddToCart';
import QuantitySelector from '../controls/QuantitySelector';

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        <div className="order-1 flex items-start justify-center">
          <img
            src={product.images.main}
            alt={product.name}
            className="w-full max-w-[700px] cursor-pointer rounded-lg object-cover shadow-md"
          />
        </div>

        <div className="order-2 flex flex-col gap-5">
          <div className="flex flex-col rounded-lg bg-white px-10 py-8 shadow-md">
            <h5>{product.name}</h5>
            <p className="mt-1 text-sm">{product.specs}</p>
            <hr className="m-2 mx-0 w-full border-t-[1px] border-black-muted" />
            <h5>{product.price}</h5>
            <div className="mt-20 flex items-center justify-between gap-4">
              <div className="relative">
                <div className="absolute -top-7 font-roboto text-sm">Quantity:</div>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
              <ButtonAddToCart product={product} quantity={quantity} />
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-white px-10 py-8 shadow-md">
            <h3 className="text-sm font-semibold">Description</h3>
            <p className="mb-2 text-sm tracking-wide text-black">{product.description}</p>
            <h3 className="text-sm font-semibold">Care instructions</h3>
            {product.careInstructions.map((instruction, idx) => {
              return (
                <li key={idx} className="ml-5 text-sm font-light">
                  {instruction}
                </li>
              );
            })}
          </div>
        </div>
      </main>
      <hr className="mb-15" />
      <section>
        <h2 className="text-center">Recommended for you</h2>
        {/* recommended products */}
      </section>
    </>
  );
}
