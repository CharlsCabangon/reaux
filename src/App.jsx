import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/controls/ScrollToTop';

import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}
