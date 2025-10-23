import PropTypes from 'prop-types';

export default function FallbackPage({ children }) {
  return (
    <main className="flex min-h-screen">
      <div className="mx-auto my-auto max-w-3xl text-center">{children}</div>
    </main>
  );
}

FallbackPage.propTypes = {
  children: PropTypes.node,
};
