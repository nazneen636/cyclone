import React from "react";
import { assets } from "../../helpers/AssetProvider";

type offerProps = {
  title: string;
};
const OfferItem: React.FC<offerProps> = ({ title }) => {
  return (
    <div>
      <h1 className="body-large-500 text-gray-900 mb-4!">{title}</h1>
      <div className="flex flex-col gap-y-3">
        {[...new Array(3)].map((_) => (
          <div className="grid grid-cols-3 gap-x-2 border border-gray-100 p-3! items-center  rounded">
            <div className="col-span-1">
              <img src={assets.flash_1} alt={assets.flash_1} />
            </div>
            <div className="">
              <h2 className="body-medium-500 text-gray-900">product title</h2>
              <span className="text-secondary-500 ">$ price</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferItem;
