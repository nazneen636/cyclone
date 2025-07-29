import { Outlet } from "react-router";
import Category from "../../components/HomeComponent/Category/Index";
import Header from "../../components/HomeComponent/Header/Index";
import Menu from "../../components/HomeComponent/Menu/Index";
import TopNav from "../../components/HomeComponent/TopNav/Index";
import Footer from "../Footer/Footer";
import Newsletter from "../Footer/Newsletter";

const Root = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <Menu />
      <Category />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Root;
