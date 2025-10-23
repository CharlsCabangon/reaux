import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../context/useCart';
import { PrimaryBtn } from '@/components/controls/Button';
import ProductCartItem from '@/components/product/ProductCartItem';
import FallbackPage from './FallbackPage';
import Checkbox from '@/components/controls/Checkbox';

export default function CartPage() {
  const { cartItems, updateQuantity, removeCartItem, removeCartItems } = useCart();

  const [selectedIds, setSelectedIds] = useState(() => cartItems.map((ci) => ci.id)); // default: all selected
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleOpenShopPage = () => {
    navigate('/shop');
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleQuantityChange = (id, qty) => {
    updateQuantity(id, Number(qty));
  };

  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    const num = parseFloat((priceStr || '').replace(/[^0-9.]/g, '')) || 0;
    return num;
  };

  const total = useMemo(() => {
    return cartItems
      .filter((ci) => selectedIds.includes(ci.id))
      .reduce((sum, ci) => sum + parsePrice(ci.item.price) * ci.quantity, 0);
  }, [cartItems, selectedIds]);

  const handleCheckout = () => {
    if (!selectedIds.length) {
      setMessage('No items selected for checkout.');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    removeCartItems(selectedIds);
    setSelectedIds([]);
    setMessage('Checked-out items successfully');
    setTimeout(() => setMessage(''), 2500);
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
          <div className="flex gap-4">
            <span className="text-base">
              {selectedIds.length === cartItems.length ? 'Unselect all' : 'Select all'}
            </span>
            <Checkbox
              checked={selectedIds.length === cartItems.length}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedIds(cartItems.map((ci) => ci.id));
                } else {
                  setSelectedIds([]);
                }
              }}
            />
          </div>
        </div>

        <ul className="space-y-3">
          {cartItems.map((ci) => (
            <ProductCartItem
              key={ci.id}
              cartItem={ci}
              selected={selectedIds.includes(ci.id)}
              onSelectToggle={toggleSelect}
              onQuantityChange={handleQuantityChange}
              onRemove={removeCartItem}
            />
          ))}
        </ul>

        <div className="mt-6 flex justify-end gap-4 md:flex-row md:items-center md:justify-end">
          <div></div>

          <div className="flex flex-col gap-9 md:flex-row">
            <div>
              <p className="text-base font-normal text-black">Total:</p>
              <h6 className="font-semibold">${total.toFixed(2)}</h6>
            </div>
            {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
            <PrimaryBtn name="Checkout" onClick={handleCheckout} />
          </div>
        </div>
      </div>
    </main>
  );
}
