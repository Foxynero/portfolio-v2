import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [company_name, setCompanyName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [business_category, setBusinessCategory] = useState<string>("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_Base_url}/sellers/register`, {
        first_name,
        last_name,
        email,
        password,
        company_name,
        country,
        contact,
        business_category,
      })
      .then((res) => {
        if (res.data.status === 201) {
          alert(res.data.message);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Breadcrumb Section Begin */}
      <section className="breadcrumb-section set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Register</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Checkout Section Begin */}
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form onSubmit={handleRegister}>
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Fist Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          required
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Last Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          required
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country<span>*</span>
                    </p>
                    <input
                      type="text"
                      required
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>

                  <div className="checkout__input">
                    <p>
                      Business Category<span>*</span>
                    </p>
                    <div className="form-group">
                      <select
                        className="form-control"
                        onChange={(e) => setBusinessCategory(e.target.value)}>
                        <option>-------</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Company Name<span>*</span>
                    </p>
                    <input
                      type="text"
                      required
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Contact<span>*</span>
                        </p>
                        <input
                          type="number"
                          required
                          onChange={(e) => setContact(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input
                          type="email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="checkout__input">
                    <p>
                      Password<span>*</span>
                    </p>
                    <input
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* submit button */}
              <div className="row pt-2 text-center">
                <div className="col-lg-12">
                  <div className="checkout__order__btn">
                    <button
                      type="submit"
                      className="btn site-btn btn-lg btn-block">
                      Register
                    </button>
                  </div>
                </div>
              </div>

              <br />
              <br />

              <div className="col-lg-12 text-center">
                <p>Have an account Already ?</p>
                <span className="checkout__input__checkbox col-6">
                  <a href="/login">Login</a>
                </span>
                |
                <span className="checkout__input__checkbox col-6">
                  <a href="/forgot-password">Forgot password</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Checkout Section End */}
    </>
  );
};

export default Register;
