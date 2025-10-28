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
        <h3 className="mb-4 font-sourceSerif text-3xl">Your cart is waiting to be adorned</h3>
        <p className="mb-6 text-black-muted">Explore our pieces and fill your cart.</p>
        <div className="flex justify-center">
          <PrimaryBtn name="Go to shop" onClick={handleOpenShopPage} />
        </div>
      </FallbackPage>
    );
  }

  return (
    <main className="mt-32 min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex items-center justify-between">
          <h4>Shopping Cart</h4>
          <div className="flex items-center gap-4">
            <span className="text-base">
              {selectedIds.length === cartItems.length ? 'Unselect all' : 'Select all'}
            </span>
            <Checkbox
              checked={selectedIds.length === cartItems.length}
              onChange={(e) => (e.target.checked ? selectAll() : unselectAll())}
            />
          </div>
        </div>

        <ul className="space-y-3">
          {cartItems.map((ci) => (
            <ProductCartItem key={ci.id} cartItem={ci} />
          ))}
        </ul>

        <div className="mt-6 flex justify-end gap-4 md:flex-row md:items-center md:justify-end">
          <div></div>

          <div className="flex flex-col gap-9 md:flex-row">
            <div>
              <p className="text-base font-normal text-black">Total (selected):</p>
              <h6 className="font-semibold">${selectedTotal.toFixed(2)}</h6>
            </div>
            <PrimaryBtn name="Checkout" onClick={handleCheckout} />
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
