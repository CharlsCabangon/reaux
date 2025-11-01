import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import ReauxLogo from '@/assets/logo/ReauxLogo';
import NavText from './NavText';
import { socials, footerSections } from '@/data/footerData';

function FooterSection({ section, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isMobile) {
    return (
      <div className="flex flex-col gap-3">
        <h6 className="mb-1">{section.title}</h6>
        {section.links.map((link) => (
          <NavText key={link} text={link} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors"
        aria-expanded={isOpen}
        aria-controls={`footer-section-${section.id}`}
      >
        <h6>{section.title}</h6>
        <ChevronDownIcon
          className={`h-5 w-5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} `}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`footer-section-${section.id}`}
            className="flex flex-col gap-3 pb-4 pl-4"
            initial={{ opacity: 0, scaleY: 0.8, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1, originY: 0 }}
            exit={{ opacity: 0, scaleY: 0.8, originY: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {section.links.map((link) => (
              <NavText key={link} text={link} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white" role="contentinfo">
      <div className="relative flex h-auto flex-col items-center px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:items-start md:px-8 lg:h-[45vh] lg:items-center lg:px-10">
        <nav
          className="flex w-full flex-col border-b-2 pb-8 sm:border-b-2 md:w-auto md:flex-row md:gap-12 md:border-b-0 md:border-r-2 md:px-8 md:py-3 lg:gap-16 lg:px-14"
          aria-label="Footer navigation"
        >
          <div className="flex flex-col sm:hidden">
            {footerSections.map((section) => (
              <FooterSection key={section.id} section={section} isMobile={true} />
            ))}
          </div>

          <div className="hidden gap-8 sm:flex sm:flex-wrap sm:justify-center md:flex-nowrap md:justify-start lg:gap-16">
            {footerSections.map((section) => (
              <FooterSection key={section.id} section={section} isMobile={false} />
            ))}
          </div>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center pt-8 md:pt-0">
          <div className="mb-4">
            <ReauxLogo color="white" />
          </div>
          <p className="mb-6 text-xs sm:mb-8">
            &#xa9; {new Date().getFullYear()} Reaux. All rights reserved.
          </p>
          <div className="flex space-x-2" role="list" aria-label="Social media links">
            <SocialIcon
              network="facebook"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
              aria-label="Facebook"
            />
            <SocialIcon
              network="instagram"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
              aria-label="Instagram"
            />
            <SocialIcon
              network="email"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
              aria-label="Email"
            />
            <SocialIcon
              network="twitter"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
              aria-label="Twitter"
            />
            <SocialIcon
              network="tiktok"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
              aria-label="TikTok"
            />
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="group relative flex items-center justify-center overflow-hidden border-t-2 bg-black py-1">
        <div
          className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[2s] ease-out group-hover:translate-x-full"
          aria-hidden="true"
        ></div>
        <SocialIcon
          url={socials.github}
          bgColor="transparent"
          fgColor="white"
          style={{ width: 40, height: 40 }}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub profile"
        />
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center no-underline"
        >
          <NavText text="Developed by Charls Cabangon" />
        </a>
      </div>
    </footer>
  );
}
