import React from "react";
import product_1 from "../../assets/img/featured/feature-1.jpg";
const Products = () => {
  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="featured__item">
                <a href="/details">
                  <img src={product_1} alt="" />
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="featured__item">
                <a href="/details">
                  <img src={product_1} alt="" />
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="featured__item">
                <a href="/details">
                  <img src={product_1} alt="" />
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="featured__item">
                <a href="/details">
                  <img src={product_1} alt="" />
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
