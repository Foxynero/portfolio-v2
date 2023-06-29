import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import product_1 from "../../assets/img/featured/feature-1.jpg";
import lp_1 from "../../assets/img/latest-product/lp-1.jpg";
import lp_2 from "../../assets/img/latest-product/lp-2.jpg";
import lp_3 from "../../assets/img/latest-product/lp-3.jpg";

const Shop = () => {
  return (
    <>
      {/* Humberger Begin */}
      <div className="humberger__menu__overlay" />
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart" /> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag" /> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src="img/language.png" alt="" />
            <div>English</div>
            <span className="arrow_carrot-down" />
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
          <div className="header__top__right__auth">
            <a href="#">
              <i className="fa fa-user" /> Login
            </a>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="shop-grid.html">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li>
                  <a href="shop-details.html">Shop Details</a>
                </li>
                <li>
                  <a href="shoping-cart.html">Shoping Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Check Out</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap" />
        <div className="header__top__right__social">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-pinterest-p" />
          </a>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <i className="fa fa-envelope" /> hello@colorlib.com
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      {/* Humberger End */}

      <Header />

      {/* Hero Section Begin */}
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
                    <a href="#">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Fruit &amp; Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="#">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="#">Butter &amp; Eggs</a>
                  </li>
                  <li>
                    <a href="#">Fastfood</a>
                  </li>
                  <li>
                    <a href="#">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="#">Papayaya &amp; Crisps</a>
                  </li>
                  <li>
                    <a href="#">Oatmeal</a>
                  </li>
                  <li>
                    <a href="#">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
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
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Organi Shop</h2>
                <div className="breadcrumb__option">
                  <a href="index.html">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
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
                  </ul>
                </div>

                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min={10}
                      data-max={540}>
                      <div className="ui-slider-range ui-corner-all ui-widget-header" />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      />
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* latest products */}

                <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-product__slider owl-carousel">
                      <div className="latest-prdouct__slider__item">
                        <a href="/details" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src={lp_1} alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="/details" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src={lp_2} alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="/details" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src={lp_3} alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                      </div>
                      <div className="latest-prdouct__slider__item">
                        <a href="/details" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src={lp_1} alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="/details" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src={lp_2} alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                        <a href="/details" className="latest-product__item">
                          <div className="latest-product__item__pic">
                            <img src={lp_3} alt="" />
                          </div>
                          <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* products */}
            <div className="col-lg-9 col-md-7">
              <div className="row">
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
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}

      <Footer />
    </>
  );
};

export default Shop;
