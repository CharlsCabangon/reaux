import { NavLink } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import { CartBtn } from './Buttons';
import SearchIcon from '@/icons/SearchIcon';

export default function NavBarSticky() {
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 w-full border-b border-white bg-off-white/65 px-10 pb-4 pt-6 shadow-md backdrop-blur-sm transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      <div className="flex justify-between">
        <div className="font-pinyon text-3xl">Reaux</div>
        <nav>
          <ul className="flex justify-center gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative cursor-pointer font-sourceSerif text-base text-black no-underline after:absolute after:bottom-[-3px] after:left-0 after:h-[0.1rem] after:bg-black/75 after:opacity-0 after:transition-all after:duration-200 hover:after:w-full hover:after:opacity-100 ${isActive ? 'after:w-full after:opacity-100' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `relative cursor-pointer font-sourceSerif text-base text-black no-underline after:absolute after:bottom-[-3px] after:left-0 after:h-[0.1rem] after:bg-black/75 after:opacity-0 after:transition-all after:duration-200 hover:after:w-full hover:after:opacity-100 ${isActive ? 'after:w-full after:opacity-100' : ''}`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative cursor-pointer font-sourceSerif text-base text-black no-underline after:absolute after:bottom-[-3px] after:left-0 after:h-[0.1rem] after:bg-black/75 after:opacity-0 after:transition-all after:duration-200 hover:after:w-full hover:after:opacity-100 ${isActive ? 'after:w-full after:opacity-100' : ''}`
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <SearchIcon />
          <CartBtn />
        </div>
      </div>
    </motion.div>
  );
}
