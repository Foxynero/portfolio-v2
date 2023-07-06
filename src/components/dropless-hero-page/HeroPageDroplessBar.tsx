import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroPageDroplessBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: any): void => {
    e.preventDefault();
    console.log("searching...", search);

    // calling the search api
    axios
      .post(`${process.env.REACT_APP_Base_url}/products/search_product`, {
        product_name: search,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          // window.location.href = "/search";
          navigate("/search", {
            state: { data: res.data.product },
          });
        } else {
          alert("No product found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href="#/">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="#/">Vegetables</a>
                  </li>
                  <li>
                    <a href="#/">Fruit &amp; Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#/">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="#/">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="#/">Butter &amp; Eggs</a>
                  </li>
                  <li>
                    <a href="#/">Fastfood</a>
                  </li>
                  <li>
                    <a href="#/">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="#/">Papayaya &amp; Crisps</a>
                  </li>
                  <li>
                    <a href="#/">Oatmeal</a>
                  </li>
                  <li>
                    <a href="#/">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form onSubmit={handleSearch}>
                    <div className="hero__search__categories">
                      All Categories
                    </div>
                    <input
                      type="text"
                      placeholder="What do yo u need?"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+233 555 342 984</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPageDroplessBar;
