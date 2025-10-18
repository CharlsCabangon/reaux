import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </>
  );
}
