import axios from "axios";
import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";

const Login = () => {
  const toast = useRef<Toast>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_Base_url}/sellers/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        toast.current?.show({
          severity: "info",
          summary: "Info",
          detail: `${res.data.message}`,
          life: 10000,
        });
        if (res.data.status === 200) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("first_name", res.data.user.first_name);

          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        toast.current?.show({
          severity: "warn",
          summary: "Error Message",
          detail: `${err.data.message}`,
        });
      });
  };

  return (
    <>
      <Toast ref={toast} />
      {/* Breadcrumb Section Begin */}
      <section className="breadcrumb-section set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Login</h2>
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
            <form onSubmit={handleLogin}>
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="checkout__input">
                    <p>
                      Email<span>*</span>
                    </p>
                    <input
                      type="email"
                      placeholder="enter email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="checkout__input">
                    <p>
                      Password<span>*</span>
                    </p>
                    <input
                      type="password"
                      placeholder="#####"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* submit button */}
                  <div className="col-lg-12 text-center">
                    <button type="submit" className="site-btn">
                      Login
                    </button>
                  </div>
                  <br />
                  <br />

                  <div className="col-lg-12 text-center">
                    <p>Don't have an account ?</p>
                    <span className="checkout__input__checkbox col-6">
                      <a href="/register">Register</a>
                    </span>
                    |
                    <span className="checkout__input__checkbox col-6">
                      <a href="/forgot-password">Forgot password</a>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Checkout Section End */}
    </>
  );
};

export default Login;
