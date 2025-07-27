import Banner from "../components/HomeComponent/Banner/Index";
import Category from "../components/HomeComponent/Category/Index";
import Header from "../components/HomeComponent/Header/Index";
import Menu from "../components/HomeComponent/Menu/Index";
import TopNav from "../components/HomeComponent/TopNav/Index";
import Features from "../components/HomeComponent/Features/Index";
import ShopByCategory from "../components/HomeComponent/ShopByCategory/Index";
import FeaturesProduct from "../components/HomeComponent/FeaturesProduct/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <Menu />
      <div className="shadow">
        <Category />
      </div>
      <div className="mt-10!">
        <Banner />
      </div>
      <Features />
      <ShopByCategory />
      <div className="py-12! mb-10!">
        <FeaturesProduct />
      </div>
    </div>
  );
};

export default Home;
