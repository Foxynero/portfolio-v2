import axios from "axios";
import React, { useEffect, useState } from "react";

const RelateProducts = ({ category }: any) => {
  console.log(category);

  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_Base_url}/products/get_product_by_category`,
        {
          product_section: category,
        }
      )
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <>
      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {products &&
              products.map((product: any) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                    <div className="featured__item">
                      <a href="/details">
                        <img src={product.product_image} alt="" />
                        <div className="featured__item__text">
                          <h6>
                            <a href="#/">{product.product_name}</a>
                          </h6>
                          <h5>GH₵ {product.product_price}</h5>
                        </div>
                      </a>
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

export default RelateProducts;
