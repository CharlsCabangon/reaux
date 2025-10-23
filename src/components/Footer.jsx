import NavText from './NavText';

export default function Footer() {
  return (
    <footer className="h-[50vh] w-full bg-black text-white">
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
        <div className="flex flex-1 items-center justify-center">
          <div className="font-pinyon text-7xl">Reaux</div>
        </div>
      </div>
    </footer>
  );
}
