import React from "react";
import { assets } from "../../helpers/AssetProvider";
import type { queryType } from "../../types/queryType";
import { motion } from "motion/react";

type offerProps = {
  title: string;
  wholeData: queryType;
};
const OfferItem: React.FC<offerProps> = ({ title, wholeData }) => {
  const data = wholeData?.data?.products;
  // const error = wholeData?.error;
  // const retry = wholeData.refetch();
  // if (error) {
  //   return (
  //     <FeatureProductError
  //       errorMessage="Something went wrong in fetching offer Item"
  //       onTry={retry}
  //     />
  //   );
  // }
  return (
    <div>
      <h1 className="body-large-500 text-gray-900 mb-4!">{title}</h1>
      <div className="flex flex-col gap-y-3">
        {data?.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              // type: "spring",
              // stiffness: 100,
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ backgroundColor: "gray", cursor: "pointer" }}
            key={item.id}
            className="grid grid-cols-3 gap-x-1 border border-gray-100 px-2! py-1! items-center  rounded-md"
          >
            <div className="">
              <img
                src={item.images[0]}
                alt={assets.flash_1}
                className="object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-y-3 pr-2!">
              <h2 className="body-medium-500 text-gray-900">
                {item.description.slice(0, 55)}...
              </h2>
              <span className="text-secondary-500 body-small-600">
                ${item.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(OfferItem) || OfferItem;
