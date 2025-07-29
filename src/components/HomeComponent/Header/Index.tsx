import Container from "../../commonComponent/Container";
import { assets } from "../../../helpers/AssetProvider";
import { icons } from "../../../helpers/IconsProvider";
import Button from "../../commonComponent/Button";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-gray-900 py-4!">
      <Container>
        <div className="grid grid-cols-3 ">
          <div className="flex gap-3">
            <img src={assets.black} alt={assets.black} />
            <h1 className="heading1 text-gray-00">Friday</h1>
          </div>
          <div className="grid justify-center auto-cols-max grid-flow-col items-center">
            <div className="grid auto-cols-max grid-flow-col items-center gap-x-2">
              <span className="body-small-500 text-gray-100">Up to</span>
              <h2 className="display4 text-warning-500">59%</h2>
              <span className="body-xl-600 text-gray-100">OFF</span>
            </div>
          </div>
          <div className=" flex items-center justify-end">
            <Link
              to="/shop"
              className="bg-warning-500 px-10! rounded shadow-2xl py-5 cursor-pointer hover:bg-warning-400 transition-all"
            >
              <div className="flex items-center justify-center gap-1">
                <span className="text-gray-900  heading4">Shop Now </span>
                <span className="text-gray-900 inline-block text-base  ">
                  {icons.rightArrow}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
