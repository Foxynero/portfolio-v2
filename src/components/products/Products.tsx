import React, { useEffect, useState } from "react";
import product_1 from "../../assets/img/featured/feature-1.jpg";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
    // calling the products active api
    axios
      .get(`${process.env.REACT_APP_Base_url}/products/active`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          setProducts(res.data.product);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            {products &&
              products.map((product: any) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="featured__item">
                      <a href="/details">
                        <img src={product_1} alt="" />
                        <div className="featured__item__text">
                          <h6>
                            <a href="#/">{product.name}</a>
                          </h6>
                          <h5>${product.price}</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
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
