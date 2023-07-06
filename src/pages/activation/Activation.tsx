import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router";
import React, { useEffect, useState } from "react";

const Activation = () => {
  const { search } = useLocation();
  console.log(search);
  const { email, token } = queryString.parse(search);
  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    if (email && token) {
      axios
        .post(`${process.env.REACT_APP_Base_url}/sellers/activate_user`, {
          email,
          token,
        })
        .then((res) => {
          console.log(res.data);
          setDisplay(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [email, token]);

  return (
    <>
      {/* Breadcrumb Section Begin */}
      <section className="breadcrumb-section set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Account Activation</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      <div className="container py-5" style={{ height: "60vh" }}>
        {display && display === "Successfully verified user account" ? (
          <div className="text-center py-3">
            <h3 className="py-3 text-success"> {display}</h3>

            <p className="py-3">
              Your account with email address <b>{email}</b> has been
              successfully activated.
            </p>
            <br />

            <div className="py-3">
              <a href="/login" className="btn btn-primary">
                Login
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-3">
            <h3 className="py-3 text-danger"> {display} </h3>

            <br />

            {display && (
              <div className="py-3">
                <a href="/register" className="btn btn-primary">
                  Register
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Activation;
