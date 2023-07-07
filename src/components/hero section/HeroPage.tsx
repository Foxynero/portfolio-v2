import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState<[]>([]);
  const [search, setSearch] = useState<string>("");

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
              <div className="hero__item set-bg">{""}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
