import React from "react";
import storeItems from "../data/items.json";

export const Home: React.FC = () => {
  return (
    <div>
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Welcome to <span className="text-primary">React Online Shop</span>
          </h1>
          <p className="text-muted lead mb-4">
            Discover the best deals on the latest trends. From fashion to
            gadgets — your one-stop online store.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="h3 fw-semibold mb-4 text-center">Featured Products</h2>
          <div className="row g-4">
            {storeItems.slice(0, 3).map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.imgUrl}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fw-bold mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <button className="btn btn-primary mt-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
