import "./styles.css";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import ProtectedRoute from "./ProtectedRoute";
import Details from "./pages/details/Details";
import Register from "./pages/register/Register";
import Checkout from "./pages/checkout/Checkout";
import Dashboard from "./pages/dashboard/Dashboard";
import Activation from "./pages/activation/Activation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Prime React libraries theme
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activation" element={<Activation />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

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
