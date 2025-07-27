import React, { useState } from "react";
import Container from "../../commonComponent/Container";
import { icons } from "../../../helpers/IconsProvider";
const Category = () => {
  const [categoryOpen, setCategoryOpen] = useState<Boolean>(false);
  const orderItem = [
    {
      id: 1,
      name: "Track Order",
      icon: icons.location,
    },
    {
      id: 2,
      name: "Compare",
      icon: icons.compare,
    },
    {
      id: 3,
      name: "Customer Support",
      icon: icons.support,
    },
    {
      id: 4,
      name: "Need Help",
      icon: icons.help,
    },
    // {
    //   id: 5,
    //   name: "Track Order",
    //   icon: icons.cart,
    // },
  ];
  return (
    <div>
      <Container>
        <div className="!py-3.5 grid grid-cols-2 items-center">
          <div className="flex gap-x-8 items-center">
            {/* category */}
            <div className=" relative">
              <select
                name="category"
                id="category"
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="bg-gray-50 body-small-400 px-8! !py-3 appearance-none rounded outline-none cursor-pointer relative "
              >
                <option className="bg-gray-50 body-small-400" value="Mobile">
                  All Category
                </option>
                <option value="Laptop" className="bg-gray-50 body-small-400">
                  Laptop
                </option>
                <option value="Tablet" className="bg-gray-50 body-small-400">
                  Tablet
                </option>
                <option value="Camera">Camera</option>
                <option value="Accessories">Accessories</option>
              </select>
              <span className="absolute text-xl top-1/2 -translate-1/3 -right-[8%] text-gray-700 pr-2!">
                {categoryOpen ? icons.upArrow : icons.downArrow}
              </span>
            </div>
            {/* category */}
            {/* order Item */}
            <div className="flex items-center gap-x-4">
              {orderItem?.map((item) => (
                <div
                  className=".body-small-400 text-gray-600 flex items-center gap-x-1 cursor-pointer hover:text-warning-500 transition-all"
                  key={item.id}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="body-small-400">{item.name}</span>
                </div>
              ))}
            </div>
            {/* order Item */}
          </div>
          {/* contact section */}
          <div className="flex items-center text-xl gap-x-3 justify-self-end">
            <span className="text-gray-800">{icons.phone}</span>
            <span className="body-large-400 text-gray-600">
              +1-202-555-0104
            </span>
          </div>
          {/* contact section */}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Category) || Category;
