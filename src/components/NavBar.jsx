import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import ReauxLogo from '@/assets/logo/ReauxLogo';
import LocationIcon from '@/assets/icons/LocationIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import ButtonCart from './controls/ButtonCart';
import ButtonMenu from './controls/ButtonMenu';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    clsx(
      'relative cursor-pointer font-sourceSerif text-sm sm:text-base text-black no-underline',
      'after:absolute after:bottom-[-3px] after:left-0 after:h-[0.1rem] after:bg-black/75',
      'after:opacity-0 after:transition-all after:duration-200',
      'hover:after:w-full hover:after:opacity-100',
      isActive && 'after:w-full after:opacity-100'
    );

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 w-5 w-full bg-off-white/65 px-4 pb-3 pt-4 shadow-md ring-1 ring-white backdrop-blur-sm transition-all sm:px-6 sm:pb-4 sm:pt-5 md:px-8 lg:px-10 lg:pt-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      role="banner"
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="hidden items-center gap-3 sm:flex md:gap-4 lg:gap-5">
            <LocationIcon />
            <p className="font-sourceSerif text-sm font-normal md:text-base">Store</p>
          </div>

          <div className="pb-3 sm:pb-4 md:pb-5">
            <ReauxLogo size="base" hasHover={true} />
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
            <div className="hidden lg:flex">
              <SearchIcon />
            </div>
            <ButtonCart />
            <div className="lg:hidden">
              <ButtonMenu onClick={() => handleMenu()} isOpen={isMenuOpen} />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex justify-center gap-6 xl:gap-8">
            <li>
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={navLinkClasses}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClasses}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="mt-4 border-t border-black/10 pt-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <NavLink to="/" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li className="flex items-center justify-center gap-3 pt-2 sm:hidden">
                <LocationIcon />
                <p className="font-sourceSerif text-sm font-normal">Store</p>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </motion.div>
  );
}
