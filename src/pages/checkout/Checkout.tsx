import axios from "axios";
import { UserProps } from "../../types/Types";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroPageDroplessBar from "../../components/dropless-hero-page/HeroPageDroplessBar";

const Checkout = () => {
  const [cartData, setCartData] = useState<any>([]);
  const [cartDetails, setCartDetails] = useState<any>([]);
  const [userDetails, setUserDetails] = useState<UserProps | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`${process.env.REACT_APP_Base_url}/sellers/get_user_details`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          setUserDetails(res.data.user);
        } else if (
          res.data.message === "jwt expired" &&
          res.data.status === 401
        ) {
          sessionStorage.clear();
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${process.env.REACT_APP_Base_url}/products/get_user_cart_item`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCartData(res.data);
        setCartDetails(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // handle checkout logic
  const handleCheckout = () => {
    alert(
      "Thank you for shopping with us. Your order has been placed successfully."
    );

    // clear cart
    axios
      .post(
        `${process.env.REACT_APP_Base_url}/products/clear_all_cart`,
        {
          user_id: userDetails?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <HeroPageDroplessBar />
      {/* Hero Section End */}

      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Checkout</h2>
                <div className="breadcrumb__option">
                  <a href="/">Home</a>
                  <span>Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Checkout Section Begin */}
      <section className="checkout spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>
                <span className="icon_tag_alt" /> Have a coupon?
                <a href="/cart">Click here</a> to enter your code
              </h6>
            </div>
          </div>
          <div className="checkout__form">
            <h4>Billing Details</h4>
            <>
              <div className="row">
                {userDetails && (
                  <div className="col-lg-8 col-md-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Fist Name<span>*</span>
                          </p>
                          <input type="text" value={userDetails.first_name} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Last Name<span>*</span>
                          </p>
                          <input type="text" value={userDetails.last_name} />
                        </div>
                      </div>
                    </div>
                    <div className="checkout__input">
                      <p>
                        Country<span>*</span>
                      </p>
                      <input type="text" value={userDetails.country} />
                    </div>

                    <div className="checkout__input">
                      <p>
                        Business Category<span>*</span>
                      </p>
                      <input
                        type="text"
                        value={userDetails.business_category}
                      />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Phone<span>*</span>
                          </p>
                          <input type="text" value={userDetails.contact} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Email<span>*</span>
                          </p>
                          <input type="text" value={userDetails.email} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* cart details */}
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4>Your Order</h4>
                    <div className="checkout__order__products">
                      Products <span>Total</span>
                    </div>
                    {cartDetails &&
                      cartDetails.map(
                        (item: {
                          product_name: string;
                          total_cost: number;
                        }) => (
                          <>
                            <ul>
                              <li>
                                {item.product_name}{" "}
                                <span>
                                  Gh₵ {item.total_cost.toLocaleString()}
                                </span>
                              </li>
                            </ul>
                          </>
                        )
                      )}
                    <div className="checkout__order__subtotal">
                      Subtotal{" "}
                      <span>Gh₵ {cartData.cart_total?.toLocaleString()}</span>
                    </div>
                    <div className="checkout__order__total">
                      Total{" "}
                      <span>Gh₵ {cartData.cart_total?.toLocaleString()}</span>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Agree to make Payment?
                        <input type="checkbox" id="payment" />
                        <span className="checkmark" />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="site-btn"
                      onClick={handleCheckout}>
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
      {/* Checkout Section End */}

      <Footer />
    </>
  );
};

export default Checkout;
