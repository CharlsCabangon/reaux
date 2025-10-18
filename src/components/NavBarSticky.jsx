import { NavLink } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

export default function NavBarSticky() {
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 w-full border-b border-white bg-off-white/65 p-5 shadow-md backdrop-blur-sm transition-all duration-500"
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
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            <path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"></path>
          </svg>

          {/* CART */}
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="5"
          >
            <path d="M216,44H40A12.01343,12.01343,0,0,0,28,56V200a12.01312,12.01312,0,0,0,12,12H216a12.01312,12.01312,0,0,0,12-12V56A12.01343,12.01343,0,0,0,216,44Zm4,156a4.00427,4.00427,0,0,1-4,4H40a4.00427,4.00427,0,0,1-4-4V56a4.00427,4.00427,0,0,1,4-4H216a4.00427,4.00427,0,0,1,4,4ZM172,88a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
