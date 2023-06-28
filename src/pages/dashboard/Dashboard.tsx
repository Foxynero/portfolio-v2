// import A from "../../assets/img/logo.png";
// import latest_product_1 from "../../assets/img/latest-product/lp-1.jpg";
// import latest_product_2 from "../../assets/img/latest-product/lp-2.jpg";
// import latest_product_3 from "../../assets/img/latest-product/lp-3.jpg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Humberger from "../../components/humberger/Humberger";
import Categories from "../../components/categories/Categories";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import HeroPage from "../../components/hero section/HeroPage";

const Dashboard = () => {
  return (
    <>
      {/* Humberger Begin */}
      <div className="humberger__menu__overlay" />
      <Humberger />
      {/* Humberger End */}

      <Header />

      <HeroPage />

      <Categories />

      <Products />

      <Banner />

      <Footer />
    </>
  );
};

export default Dashboard;
