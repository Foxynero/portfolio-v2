import React from "react";
import logo from "../../assets/img/logo.jpeg";

const Humberger = () => {
  // get first_name from session storage
  const first_name: string | null = sessionStorage.getItem("first_name");

  // logout function to clear session storage
  const logOut = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#/">
                <i className="fa fa-heart" /> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#/">
                <i className="fa fa-shopping-bag" /> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__auth">
            {first_name ? (
              <a href="/" onClick={logOut}>
                <span>Welcome {first_name}</span> | <i className="fa fa-user" />{" "}
                Logout
              </a>
            ) : (
              <a href="/login">
                <i className="fa fa-user" /> Login
              </a>
            )}
          </div>
        </div>
        {/* mobile screen */}
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="#/">Pages</a>
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
        {/* mobile screen */}

        <div id="mobile-menu-wrap" />
        <div className="header__top__right__social">
          <a href="#/">
            <i className="fa fa-facebook" />
          </a>
          <a href="#/">
            <i className="fa fa-twitter" />
          </a>
          <a href="#/">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#/">
            <i className="fa fa-pinterest-p" />
          </a>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <i className="fa fa-envelope" /> juslink@mail.com
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Humberger;
