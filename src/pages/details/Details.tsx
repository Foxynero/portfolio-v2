import axios from "axios";
import { Toast } from "primereact/toast";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ProductDetailsProps } from "../../types/Types";
import React, { useEffect, useState, useRef } from "react";
import RelateProducts from "../../components/related products/RelateProducts";
import HeroPageDroplessBar from "../../components/dropless-hero-page/HeroPageDroplessBar";
import { Image } from "primereact/image";

const Details = () => {
  const toast = useRef<Toast>(null);
  const location = useLocation();
  const { data } = location.state;
  const [quantity, setQuantity] = useState<number | any>(1);
  const [product_details, setProductDetails] =
    useState<ProductDetailsProps | null>(null);

  // get the product details by passing the id of the product from state
  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .post(`${process.env.REACT_APP_Base_url}/products/get_product_detail`, {
        post_id: data,
      })
      .then((res) => {
        console.log(res.data);
        setProductDetails(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  // handle the function of adding an item cart
  const handleCart = (id: string) => {
    if (sessionStorage.getItem("token")) {
      axios
        .post(
          `${process.env.REACT_APP_Base_url}/products/add_to_cart`,
          {
            product_id: id,
            cart_quantity: quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (
            res.data.message === "jwt malformed" ||
            res.data.message === "invalid token"
          ) {
            window.location.href = "/login";
          }

          toast.current?.show({
            severity: "success",
            summary: "Info",
            detail: `${res.data.message}`,
            life: 10000,
          });

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.current?.show({
        severity: "warn",
        summary: "Info",
        detail: `Please login to add item to cart`,
        life: 10000,
      });

      setTimeout(() => {
        window.location.href = "/login";
      }, 6000);
    }
  };

  return (
    <>
      <Toast ref={toast} />
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
      {product_details && (
        <section className="breadcrumb-section set-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>{product_details.product_category}</h2>
                  <div className="breadcrumb__option">
                    <a href="/">Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Breadcrumb Section End */}

      {/* Product Details Section Begin */}
      {product_details && (
        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                  <div className="product__details__pic__item">
                    <Image
                      src={product_details.product_image}
                      alt="Image"
                      width="100%"
                      height="100%"
                      preview
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>{product_details.product_name}</h3>
                  <div className="product__details__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <span>(18 reviews)</span>
                  </div>
                  <div className="product__details__price">
                    Gh₵ {product_details.product_price}
                  </div>
                  <p>{product_details.product_section}</p>
                  <div className="product__details__quantity">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input
                          type="number"
                          required
                          defaultValue={1}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="primary-btn"
                    onClick={() => handleCart(product_details.id)}>
                    ADD TO CARD
                  </button>

                  <ul>
                    <li>
                      <b>Availability</b> <span>In Stock</span>
                    </li>
                    <li>
                      <b>Shipping</b>
                      <span>
                        01 day shipping. <samp>Free pickup today</samp>
                      </span>
                    </li>
                    <li>
                      <b>Weight</b> <span>0.5 kg</span>
                    </li>
                    <li>
                      <b>Share on</b>
                      <div className="share">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="product__details__tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                        aria-selected="true">
                        Description
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel">
                      <div className="product__details__tab__desc">
                        <h6>Products Infomation</h6>
                        <p>{product_details.product_description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Product Details Section End */}

      {/* Related Product Section Begin */}
      {product_details && (
        <RelateProducts category={product_details.product_section} />
      )}
      {/* Related Product Section End */}

      <Footer />
    </>
  );
};

export default Details;
