export function About() {
  return (
    <>
      <section className="min-h-screen px-6 py-20 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About Us
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center text-gray-600">
            We are committed to delivering the best shopping experience with
            quality products, fast shipping, and excellent support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-[400px] mx-auto">
              <img
                src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                At ShopEase, our mission is to make online shopping seamless and
                enjoyable. We provide a wide range of curated products and
                top-notch service to our customers around the globe.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Why Choose Us
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Fast and secure delivery</li>
                <li>24/7 customer support</li>
                <li>Trusted by thousands of happy customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
