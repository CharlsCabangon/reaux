export default function FallbackPage({ children }) {
  return (
    <main className="flex min-h-screen">
      <div className="mx-auto my-auto max-w-3xl text-center">{children}</div>
    </main>
  );
}
