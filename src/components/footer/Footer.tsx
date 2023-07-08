import React from "react";
import payment from "../../assets/img/payment-item.png";
import logo from "../../assets/img/logo.jpeg";

const Footer = () => {
  return (
    <>
      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="index.html">
                    <img src={logo} alt="" width="100%" height={80} />
                  </a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 Accra</li>
                  <li>Phone: +233 555 342 984</li>
                  <li>Email: juslink@mail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <a href="#/">About Us</a>
                  </li>
                  <li>
                    <a href="#/">About Our Shop</a>
                  </li>
                  <li>
                    <a href="#/">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="#/">Delivery infomation</a>
                  </li>
                  <li>
                    <a href="#/">Privacy Policy</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#/">Who We Are</a>
                  </li>
                  <li>
                    <a href="#/">Our Services</a>
                  </li>
                  <li>
                    <a href="#/">Projects</a>
                  </li>
                  <li>
                    <a href="#/">Contact</a>
                  </li>
                  <li>
                    <a href="#/">Innovation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__widget__social">
                  <a href="#/">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#/">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#/">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved
                  </p>
                </div>
                <div className="footer__copyright__payment">
                  <img src={payment} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
