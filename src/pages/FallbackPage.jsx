import PropTypes from 'prop-types';

export default function FallbackPage({ children }) {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8"
      role="main"
    >
      <div className="mx-auto w-full max-w-3xl space-y-4 text-center">{children}</div>
    </main>
  );
}

FallbackPage.propTypes = {
  children: PropTypes.node,
};
