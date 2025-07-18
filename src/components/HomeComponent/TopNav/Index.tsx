import type React from "react";
import { useState } from "react";
import { icons } from "../../../helpers/IconsProvider";
import Container from "../../commonComponent/Container";

const TopNav = () => {
  const [topNav] = useState<Array<React.ReactNode>>([
    icons.reddit,
    icons.youtube,
    icons.instagram,
    icons.pinterest,
    icons.facebook,
    icons.twitter,
  ]);

  return (
    <div className="bg-secondary-700 py-3 h-12 flex items-center">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-gray-100 text-sm hover:text-primary-500 transition-colors cursor-pointer">
              Welcome to Clicon online eCommerce store
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-100 text-sm font-medium">Follow Us</span>
            <div className="flex items-center gap-4">
              {topNav.map((icon, index) => (
                <button
                  type="button"
                  key={index.toString()}
                  className="text-gray-300 hover:text-primary-500 transition-colors text-lg"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
