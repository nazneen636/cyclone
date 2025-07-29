import Banner from "../components/HomeComponent/Banner/Index";
import Features from "../components/HomeComponent/Features/Index";
import ShopByCategory from "../components/HomeComponent/ShopByCategory/Index";
import FeaturesProduct from "../components/HomeComponent/FeaturesProduct/Index";
import Arrival from "../components/HomeComponent/Arrival/Index";
import Offers from "../components/HomeComponent/Offer/Index";
import Newsletter from "../components/Footer/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="pt-10!">
        <Banner />
      </div>
      <Features />
      <ShopByCategory />
      <div className="py-12!">
        <FeaturesProduct />
      </div>
      <div className="">
        <Arrival />
      </div>
      <div className="py-12!">
        <Offers />
      </div>
      <div className="">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
