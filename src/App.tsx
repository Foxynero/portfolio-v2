import React from "react";
import "./styles.css";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Details from "./pages/details/Details";
import Checkout from "./pages/checkout/Checkout";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details" element={<Details />} />

          {/* <Route path="/details/:id" element={<Details />} /> */}
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>Page Not Found</h1>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
