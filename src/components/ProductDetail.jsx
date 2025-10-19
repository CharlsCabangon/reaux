import { useState } from 'react';

import { AddToCartBtn } from './Buttons';

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <main className="mx-auto mt-32 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        <div className="order-1 flex items-start justify-center">
          <img
            src={product.images.main}
            alt={product.name}
            className="w-full max-w-[700px] cursor-pointer rounded-lg object-cover shadow-md"
          />
        </div>

        <div className="order-2 flex flex-col gap-5">
          <div className="flex flex-col rounded-lg bg-white px-10 py-8 shadow-md">
            <h1 className="text-2xl">{product.name}</h1>
            <p className="mt-1 text-sm">{product.specs}</p>
            <hr className="m-2 mx-0 w-full border-t-[1px] border-black-muted" />
            <p className="font-sourceSerif text-2xl font-normal">{product.price}</p>
            <div className="mt-20 flex items-center justify-end gap-4">
              <AddToCartBtn product={product} />
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
        <h2 className="text-center text-5xl">Recommended for you</h2>
        {/* recommended products */}
      </section>
    </>
  );
}
