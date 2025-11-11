/* eslint-disable no-unused-vars */
import React, { useState, useCallback, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import ReauxLogo from '@/assets/logo/ReauxLogo';
import SearchIcon from '@/assets/icons/SearchIcon';
import ButtonCart from './controls/ButtonCart';
import ButtonMenu from './controls/ButtonMenu';

function NavBarSticky() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((v) => !v);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navLinkClasses = useCallback(
    ({ isActive }) =>
      clsx(
        'relative cursor-pointer font-sourceSerif text-sm sm:text-base text-black no-underline',
        'after:absolute after:bottom-[-3px] after:left-0 after:h-[0.1rem] after:bg-black/75',
        'after:opacity-0 after:transition-all after:duration-200',
        'hover:after:w-full hover:after:opacity-100',
        isActive && 'after:w-full after:opacity-100'
      ),
    []
  );

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full bg-off-white/65 px-4 pb-3 pt-4 shadow-md ring-1 ring-white backdrop-blur-sm transition-all duration-500 sm:px-6 md:px-8 lg:px-10 lg:pb-4 lg:pt-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <ReauxLogo size="small" />
        </div>

        {/* desktop nav */}
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

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <div className="hidden lg:flex">
            <SearchIcon />
          </div>
          <ButtonCart />
          <div className="lg:hidden">
            <ButtonMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, scaleY: 0.8, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1, originY: 0 }}
            exit={{ opacity: 0, scaleY: 0.8, originY: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mt-4 border-t border-off-white/50 pt-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <NavLink to="/" className={navLinkClasses} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={navLinkClasses} onClick={closeMenu}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClasses} onClick={closeMenu}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default memo(NavBarSticky);
