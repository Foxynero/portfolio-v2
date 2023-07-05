import React from "react";
import "./styles.css";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import Details from "./pages/details/Details";
import Register from "./pages/register/Register";
import Checkout from "./pages/checkout/Checkout";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
//core
import "primereact/resources/primereact.min.css";
import Search from "./pages/search/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />

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
