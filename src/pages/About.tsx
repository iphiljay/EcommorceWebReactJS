export function About() {
  return (
    <>
      <section className="min-vh-100 py-5 px-3 bg-white text-dark">
        <div className="container">
          <h1 className="display-4 fw-bold text-center mb-4">About Us</h1>
          <p className="lead text-center text-muted mb-5">
            We are committed to delivering the best shopping experience with
            quality products, fast shipping, and excellent support.
          </p>

          <div className="row align-items-center g-4">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "400px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="h4 fw-semibold mb-3">Our Mission</h2>
              <p>
                At React Online Shop, our mission is to make online shopping
                seamless and enjoyable. We provide a wide range of curated
                products and top-notch service to our customers around the
                globe.
              </p>

              <h2 className="h4 fw-semibold mt-4 mb-3">Why Choose Us</h2>
              <ul className="list-unstyled ps-3">
                <li className="mb-2">• Fast and secure delivery</li>
                <li className="mb-2">• 24/7 customer support</li>
                <li>• Trusted by thousands of happy customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
