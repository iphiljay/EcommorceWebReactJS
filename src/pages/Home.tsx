export function Home() {
  return (
    <section className="bg-gradient-to-r from-white via-gray-50 to-gray-100 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600">React Online Shop</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Discover the best deals on the latest trends. From fashion to gadgets
          — your one-stop online store.
        </p>
        <a
          href="/shop"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Start Shopping
        </a>
      </div>
    </section>
  );
}
