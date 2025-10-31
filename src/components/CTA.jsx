import PropTypes from 'prop-types';

export default function CTA({ children }) {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-4 bg-light-gray px-4 py-8 text-center sm:gap-5 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:py-14"
      role="region"
      aria-label="Call to action"
    >
      {children}
    </section>
  );
}

CTA.propTypes = {
  children: PropTypes.node,
};
