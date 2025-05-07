import React from "react";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export const Home: React.FC = () => {
  const topProducts = [...storeItems]
    .sort((a, b) => b.price - a.price)
    .slice(0, 3);

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
          <h2 className="h3 fw-semibold mb-4 text-center">Top Deals</h2>
          <div className="row g-4">
            {topProducts.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="ratio ratio-4x3 overflow-hidden">
                    <img
                      src={product.imgUrl}
                      alt={product.name}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fw-bold mb-4">
                      {formatCurrency(product.price)}
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
