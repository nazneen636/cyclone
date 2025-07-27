import React from "react";
import { icons } from "../../helpers/IconsProvider";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import type { productDataType } from "../../types/productApiData";
import Star from "./Star";
import FeatureProductError from "../Error/FeatureProductError";
import { motion } from "motion/react";
// import Star from "../../commonComponent/Star";
type productCardProps = {
  status: {
    isPending: boolean;
    isError: boolean;
    data: any;
    error: any;
    refetch: () => void;
  };
};

const ProductCard: React.FC<productCardProps> = ({ status }) => {
  console.log(status.data);
  if (status.isPending) {
    return <ProductSkeleton />;
  }
  if (status.isError) {
    return (
      <FeatureProductError
        errorMessage={status.error?.message}
        onTry={status.refetch}
      />
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {status.data?.products?.slice(0, 8).map((item: productDataType) => (
        <div className="relative rounded border border-gray-200 shadow flex flex-col  justify-center p-4!  ">
          {/* badge */}
          <div className="">
            {item.discountPercentage > 0 && (
              <motion.button
                initial={{
                  scale: 1,
                  backgroundColor: "var(--color-primary-500)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  backgroundColor: [
                    "var(--color-warning-400)",
                    "var(--color-warning-500)",
                    "var(--color-warning-400)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute top-2 right-2 body-small-600 text-gray-900 py-2! px-2! rounded z-50"
              >
                {item.discountPercentage}% OFF
              </motion.button>
            )}
            {item.stock >= 50 ? (
              <p className="absolute top-2 left-2 bg-danger-500 body-small-600 text-gray-00 py-2! px-2! rounded z-20">
                BEST DEAL
              </p>
            ) : item.stock <= 10 ? (
              <p className="absolute top-2 left-2 bg-secondary-500 body-small-600 text-gray-00 py-2! px-2! rounded z-20">
                SALE
              </p>
            ) : (
              <p className="absolute top-2 left-2 bg-success-500 body-small-600 text-gray-00 py-2! px-2! rounded z-50">
                NEW
              </p>
            )}
          </div>
          {/* product image */}
          <div className="relative group z-40 mt-8! bg-gray-50 rounded-md overflow-hidden border border-gray-100 shadow cursor-pointer">
            <img src={item.images[0]} alt={item.title} className="h-[180px]" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex rounded items-center justify-center gap-x-2 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white text-gray-800 text-lg w-10 h-10 flex items-center justify-center cursor-pointer rounded-full shadow-md hover:bg-primary-500 hover:text-white transition-all">
                <span>{icons.cart}</span>
              </div>
              <div className="bg-white text-gray-800 text-lg w-10 h-10 flex items-center justify-center cursor-pointer rounded-full shadow-md hover:bg-primary-500 hover:text-white transition-all">
                <span>{icons.heart}</span>
              </div>
              <div className="bg-white text-gray-800 text-lg w-10 h-10 flex items-center justify-center cursor-pointer rounded-full shadow-md hover:bg-primary-500 hover:text-white transition-all">
                <span>{icons.eye}</span>
              </div>
            </div>
          </div>

          <div className="mt-2!">
            {/* review and star */}
            <div className="flex items-center gap-x-2">
              <div>
                {" "}
                <Star rating={item.rating} />
              </div>
              <span className="text-gray-500  body-xl-300 text-base">
                ({item.reviews.length})
              </span>
            </div>

            {/* product details */}
            <h1 className="body-xl-400 text-gray-900 mb-1! truncate ">
              {item.title}
            </h1>
            <p className="body-large-400 text-gray-900 truncate mb-1! ">
              {item.description}
            </p>
            {/* price */}
            <div className=" flex items-center gap-x-2">
              <span className="line-through text-gray-400 body-large-600">
                {(
                  item.price -
                  (item.price * item.discountPercentage) / 100
                ).toFixed(2)}
              </span>
              <span className="text-secondary-500 body-large-600">
                ${item.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductCard) || ProductCard;
