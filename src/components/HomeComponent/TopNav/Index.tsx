import React, { useState } from "react";
import Container from "../../commonComponent/Container";
import { icons } from "../../../helpers/IconsProvider";

const TopNav = () => {
  const [topNav] = useState([
    icons.reddit,
    icons.youtube,
    icons.instagram,
    icons.pinterest,
    icons.facebook,
    icons.twitter,
  ]);
  return (
    <div className="bg-secondary-700 py-5!">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <h1 className="body-small-400 text-gray-00">
            Welcome to Clicon online eCommerce store.{" "}
          </h1>

          <div className="body-small-400 text-gray-00 flex items-center justify-end gap-4">
            Follow Us
            <div className="flex gap-3">
              {topNav?.map((icons, index) => (
                <span
                  className="text-[16px] hover:text-warning-500 cursor-pointer hover:scale-110 transition-all"
                  key={index}
                >
                  {icons}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(TopNav) || TopNav;
