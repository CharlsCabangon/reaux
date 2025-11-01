import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '@/context/useCart';

import ProductCartItem from '@/components/product/ProductCartItem';
import Dialog from '@/components/Dialog';
import FallbackPage from './FallbackPage';
import Checkbox from '@/components/controls/Checkbox';
import { PrimaryBtn } from '@/components/controls/Button';

export default function CartPage() {
  const { cartItems, removeMultiple, selectedIds, selectAll, unselectAll, selectedTotal } =
    useCart();

  const [activeDialog, setActiveDialog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Your Shopping Cart | Reaux Online Store';
  }, []);

  const handleOpenShopPage = () => navigate('/shop');

  const handleCheckout = () => {
    if (!selectedIds || selectedIds.length === 0) {
      setActiveDialog('failed');
      return;
    }
    setActiveDialog('success');
  };

  const handleDialogClose = () => {
    if (activeDialog === 'success') {
      removeMultiple(selectedIds);
      unselectAll();
    }
    setActiveDialog(null);
  };

  if (!cartItems.length) {
    return (
      <FallbackPage>
        <h3 className="mb-4 font-sourceSerif">Your cart is waiting to be adorned</h3>
        <p className="mb-6 text-sm text-black-muted sm:text-base">
          Explore our pieces and fill your cart.
        </p>
        <div className="flex justify-center">
          <PrimaryBtn name="Go to shop" onClick={handleOpenShopPage} />
        </div>
      </FallbackPage>
    );
  }

  return (
    <main
      className="mt-20 min-h-screen px-4 py-6 sm:mt-24 sm:px-6 md:mt-28 md:px-8 md:py-8 lg:mt-32 lg:px-12 lg:py-12"
      role="main"
      aria-labelledby="cart-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between md:mb-6">
          <h4 id="cart-heading">Shopping Cart</h4>

          <div className="flex items-center gap-3 sm:gap-4">
            <label
              htmlFor="select-all-checkbox"
              className="order-2 cursor-pointer text-sm sm:order-1 sm:text-base"
            >
              {selectedIds.length === cartItems.length ? 'Unselect all' : 'Select all'}
            </label>
            <div className="order-1 sm:order-2">
              <Checkbox
                id="select-all-checkbox"
                checked={selectedIds.length === cartItems.length}
                onChange={(e) => (e.target.checked ? selectAll() : unselectAll())}
                label=""
              />
            </div>
          </div>
        </div>

        <ul className="space-y-3 sm:space-y-4" role="list" aria-label="Shopping cart items">
          {cartItems.map((ci) => (
            <ProductCartItem key={ci.id} cartItem={ci} />
          ))}
        </ul>

        <div
          className="mt-6 flex flex-col gap-4 pr-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-end"
          role="region"
          aria-label="Cart summary"
        >
          <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-8">
            <div className="text-right">
              <p className="text-sm font-normal text-black sm:text-base">Total:</p>
              <p className="text-lg font-semibold sm:text-xl" aria-live="polite" aria-atomic="true">
                ${selectedTotal.toFixed(2)}
              </p>
            </div>

            <PrimaryBtn
              name="Checkout"
              onClick={handleCheckout}
              disabled={selectedIds.length === 0}
            />
          </div>
        </div>
      </div>

      {activeDialog && (
        <Dialog
          isOpen={!!activeDialog}
          title={activeDialog === 'success' ? 'Checkout Successful' : 'Checkout Failed'}
          message={
            activeDialog === 'success'
              ? 'Checkout successful!'
              : 'No items were selected for checkout.'
          }
          onClose={handleDialogClose}
        />
      )}
    </main>
  );
}
