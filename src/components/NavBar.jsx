import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import ReauxLogo from '@/assets/logo/ReauxLogo';
import ButtonCart from './controls/ButtonCart';
import SearchIcon from '@/assets/icons/SearchIcon';
import LocationIcon from '@/assets/icons/LocationIcon';

export default function NavBar() {
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 w-full bg-off-white/65 px-10 pb-4 pt-6 shadow-md ring-1 ring-white backdrop-blur-sm transition-all"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      <div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <LocationIcon />
            <p className="font-sourceSerif font-normal">Store</p>
          </div>
          <div className="pb-5">
            <ReauxLogo size={14} hasHover={true} />
          </div>
          <div className="flex gap-5">
            <SearchIcon />
            <ButtonCart />
          </div>
        </div>
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
      </div>
    </motion.div>
  );
}
