import { SocialIcon } from 'react-social-icons';
import ReauxLogo from '@/assets/logo/ReauxLogo';
import NavText from './NavText';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white" role="contentinfo">
      <div className="relative flex h-auto flex-col items-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:h-[45vh] lg:flex-row lg:items-center lg:px-10">
        {/* Navigation Links */}
        <nav
          className="flex w-full flex-col gap-8 border-b-2 pb-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12 lg:w-auto lg:gap-16 lg:border-b-0 lg:border-r-2 lg:px-14 lg:py-3"
          aria-label="Footer navigation"
        >
          <div className="flex flex-col gap-3">
            <h6 className="mb-1">OUR COMPANY</h6>
            <NavText text="About Reaux" />
            <NavText text="Careers" />
            <NavText text="Shops" />
            <NavText text="Credits" />
            <NavText text="Sitemap" />
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="mb-1">CUSTOMER CARE</h6>
            <NavText text="Contact Us" />
            <NavText text="FAQ" />
            <NavText text="Track Your Order" />
            <NavText text="Book an Appointment" />
            <NavText text="Accessibility" />
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="mb-1">LEGAL AREA</h6>
            <NavText text="Terms of Use" />
            <NavText text="Terms & Conditions" />
            <NavText text="Privacy Policy" />
            <NavText text="Imprint" />
            <NavText text="Cookie Consent" />
          </div>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center pt-8 lg:pt-0">
          <div className="mb-4">
            <ReauxLogo color="white" />
          </div>
          <p className="mb-6 text-xs sm:mb-8">
            © {new Date().getFullYear()} Reaux. All rights reserved.
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

      <div className="group relative flex items-center justify-center overflow-hidden border-t-2 bg-black py-1">
        <div
          className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[2s] ease-out group-hover:translate-x-full"
          aria-hidden="true"
        ></div>
        <SocialIcon
          url="https://github.com/CharlsCabangon"
          bgColor="transparent"
          fgColor="white"
          style={{ width: 40, height: 40 }}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub profile"
        />
        <a
          href="https://github.com/CharlsCabangon"
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
