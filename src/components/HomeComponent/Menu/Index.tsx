import React from "react";
import { assets } from "../../../helpers/AssetProvider";
import { icons } from "../../../helpers/IconsProvider";
import Container from "../../commonComponent/Container";
import Search from "../../commonComponent/Search";

const Menu = () => {
  return (
    <div className="bg-secondary-700 py-3! border-t border-t-gray-500">
      <Container>
        <div className="grid grid-cols-3 items-center">
          {/* logo */}
          <img src={assets.logo} alt={"logo"} />
          {/* logo */}

          {/* search  */}
          <Search className="relative">
            <input
              name="search"
              type={"search"}
              placeholder="Search for anything..."
              className="bg-gray-00 body-small-400 w-full py-3! rounded text-gray-500 px-4! placeholder:body-small-400 pr-12! outline-none"
            />

            <span className="text-gray-900 text-2xl absolute top-3 right-4">
              {icons.search}
            </span>
          </Search>
          {/* search  */}

          {/* cart wishList and account */}
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-x-5">
              <span className="relative text-gray-00 text-2xl">
                {icons.cart}
                <span className="absolute -top-2 -right-2 bg-gray-00 text-gray-900 text-xs font-bold rounded-full px-1.5! py-0.5! border border-secondary-700">
                  3
                </span>
              </span>
              <span className="text-gray-00 text-2xl">{icons.heart}</span>
              <span className="text-gray-00 text-2xl">{icons.user}</span>
            </div>
          </div>
          {/* cart wishList and account */}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Menu) || Menu;
