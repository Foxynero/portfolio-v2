import axios from "axios";
import A from "../../assets/img/logo.jpeg";
import React, { useEffect, useState } from "react";

const Header = () => {
  // get first_name from session storage
  const first_name: string | null = sessionStorage.getItem("first_name");
  const [cartDetails, setCartDetails] = useState<any>([]);

  // get cart details of the logged in user
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/products/get_user_cart_item`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCartDetails(res.data);
        if (res.data.message === "jwt expired" && res.data.status === 401) {
          sessionStorage.clear();
          window.location.href = "/login";
        }
        // setCartDetails(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // logout function to clear session storage
  const logOut = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope" /> justlink@gmail.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
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
                  </div>
                  <div className="header__top__right__auth">
                    {first_name ? (
                      <a href="/" onClick={logOut}>
                        <span>Welcome {first_name}</span> |{" "}
                        <i className="fa fa-user" /> Logout
                      </a>
                    ) : (
                      <a href="/login">
                        <i className="fa fa-user" /> Login
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="/">
                  <img src={A} alt="" width="100%" height={50} />
                </a>
              </div>
            </div>
            <div className="col-lg-6" />

            {cartDetails &&
            cartDetails.message === "Product retrieved successfully" ? (
              <>
                <div className="col-lg-3">
                  <div className="header__cart">
                    <ul>
                      <li>
                        <a href="/cart">
                          <i className="fa fa-shopping-bag" />{" "}
                          <span>{cartDetails.count}</span>
                        </a>
                      </li>
                    </ul>
                    <div className="header__cart__price">
                      total: <span>Gh₵ {cartDetails.cart_total}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-3">
                  <div className="header__cart">
                    <ul>
                      <li>
                        <a href="/cart">
                          <i className="fa fa-shopping-bag" /> <span>0</span>
                        </a>
                      </li>
                    </ul>
                    <div className="header__cart__price">
                      item: <span>Gh₵ 0.00</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
