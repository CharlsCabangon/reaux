import { SocialIcon } from 'react-social-icons';

import ReauxLogo from '@/assets/logo/ReauxLogo';
import NavText from './NavText';

export default function Footer() {
  return (
    <footer className="h-[45vh] w-full bg-black text-white">
      <div className="relative flex h-full items-center px-10">
        <div className="flex gap-16 border-r-2 px-14 py-3">
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
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="">
            <ReauxLogo color="white" />
          </div>
          <p className="mb-8 mt-4 text-xs">
            © {new Date().getFullYear()} Reaux. All rights reserved.
          </p>
          <div className="flex space-x-2">
            <SocialIcon
              network="facebook"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
            />
            <SocialIcon
              network="instagram"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
            />
            <SocialIcon
              network="email"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
            />
            <SocialIcon
              network="twitter"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
            />
            <SocialIcon
              network="tiktok"
              bgColor="white"
              fgColor="transparent"
              style={{ width: 28, height: 28 }}
              className="transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="group relative flex items-center justify-center overflow-hidden border-t-2 bg-black py-1">
        {/* shine layer */}
        <div className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[2s] ease-out group-hover:translate-x-full"></div>
        <SocialIcon
          url="https://github.com/CharlsCabangon"
          bgColor="transparent"
          fgColor="white"
          style={{ width: 40, height: 40 }}
          rel="noopener noreferrer"
          target="_blank"
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
