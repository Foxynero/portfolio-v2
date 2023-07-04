import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroPage = () => {
  const [sections, setSections] = useState<[]>([]);

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "js/main.js";
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };

    // calling the categories api
    axios
      .get(`${process.env.REACT_APP_Base_url}/utils/get_product_sections`)
      .then((res) => {
        console.log(res.data);
        setSections(res.data.product_sections);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div>
                <ul>
                  {sections &&
                    sections.map((section: any) => {
                      return (
                        <li key={section.id}>
                          <a href="#/">{section.product_section_name}</a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
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
              <div className="hero__item set-bg">
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#/" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
