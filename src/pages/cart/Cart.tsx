import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroPageDroplessBar from "../../components/dropless-hero-page/HeroPageDroplessBar";

const Cart = () => {
  const [cartData, setCartData] = useState<any>([]);
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
        setCartData(res.data);
        setCartDetails(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function to remove items from  cart
  const removeCart = (cart_id: string) => {
    axios
      .post(
        `${process.env.REACT_APP_Base_url}/products/remove_from_cart/`,
        {
          cart_id: cart_id,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        window.location.href = "/cart";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
        <section className="breadcrumb-section set-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Shopping Cart</h2>
                  <div className="breadcrumb__option">
                    <a href="index.html">Home</a>
                    <span>Shopping Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}

        {/* Shoping Cart Section Begin */}
        <section className="shoping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th className="shoping__product">Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    {cartDetails && cartDetails.length > 0 ? (
                      <tbody>
                        {cartDetails.map((item: any, index: number) => (
                          <tr key={item.cart_id}>
                            <td className="shoping__cart__item">
                              <img
                                src={item.product_image}
                                alt={item.product_name}
                                style={{ width: "100px", height: "100px" }}
                              />
                              <h5>{item.product_name}</h5>
                            </td>

                            <td className="shoping__cart__price">
                              Gh₵ {item.product_price}
                            </td>

                            <td className="shoping__cart__quantity">
                              <div className="quantity">
                                <div className="pro-qty">
                                  <input
                                    type="text"
                                    value={item.cart_quantity}
                                    readOnly
                                  />
                                </div>
                              </div>
                            </td>

                            <td className="shoping__cart__total">
                              Gh₵ {item.total_cost}
                            </td>

                            <td className="shoping__cart__item__close">
                              <span
                                className="icon_close"
                                onClick={() => removeCart(item.cart_id)}>
                                <ImCancelCircle color="red" />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <th></th>
                          <td></td>
                          <td></td>
                          <td className="py-3">No Records Found</td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__btns">
                  <a href="/" className="primary-btn cart-btn">
                    CONTINUE SHOPPING
                  </a>
                  <a href="/" className="primary-btn cart-btn cart-btn-right">
                    <span className="icon_loading" /> Upadate Cart
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__continue">
                  <div className="shoping__discount">
                    <h5>Discount Codes</h5>
                    <form action="#">
                      <input type="text" placeholder="Enter your coupon code" />
                      <button type="submit" className="site-btn">
                        APPLY COUPON
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {cartData && (
                <div className="col-lg-6">
                  <div className="shoping__checkout">
                    <h5>Cart Total</h5>
                    <ul>
                      <li>
                        Subtotal <span>Gh₵ {cartData.cart_total}</span>
                      </li>
                      <li>
                        Total <span>Gh₵ {cartData.cart_total}</span>
                      </li>
                    </ul>
                    <a href="/checkout" className="primary-btn">
                      PROCEED TO CHECKOUT
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Shoping Cart Section End */}

        <Footer />
      </>
    </>
  );
};

export default Cart;
