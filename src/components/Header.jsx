import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

import NavBar from './NavBar';
import NavBarSticky from './NavBarSticky';

export default function Header() {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <header className="font-sourceSerif">
      <div ref={ref} className="h-[1px]" />
      <AnimatePresence>{inView ? <NavBar /> : <NavBarSticky />}</AnimatePresence>
    </header>
  );
}
