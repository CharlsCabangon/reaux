import PropTypes from 'prop-types';

export default function CTA({ children }) {
  return (
    <section className="flex h-[20%] w-full flex-col items-center justify-center gap-5 bg-light-gray py-12 text-center">
      {children}
    </section>
  );
}

CTA;
