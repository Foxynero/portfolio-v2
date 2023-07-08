import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                  <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                    <div className="featured__item">
                      <Link to={`/details`} state={{ data: product.id }}>
                        <img
                          src={product.product_image}
                          alt={product.product_name}
                          width="100%"
                          height={250}
                        />
                        <div className="featured__item__text">
                          <h6>
                            <Link to={`/details`} state={{ data: product.id }}>
                              {product.product_name}
                            </Link>
                          </h6>
                          <h5>GH₵ {product.product_price}</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
