import React, { useState } from "react";
import Container from "../../commonComponent/Container";
import { assets } from "../../../helpers/AssetProvider";
import { icons } from "../../../helpers/IconsProvider";
import ProductCard from "../../commonComponent/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { GetFeaturesProduct } from "../../../api/FeaturesProduct";
import {
  CategoryWiseData,
  GetProductCategory,
} from "../../../api/CategoryProduct";

const FeaturesProduct: React.FC = () => {
  const [selectCategory, setSelectedCategory] = useState<string>("all");
  /**
   * @description features product
   * @return { isPending, isError, data, error }
   * @version 1.0.0
   */
  // Queries
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["featureProduct"],
    queryFn: GetFeaturesProduct,
  });

  /**
   * @description get category data
   * @return { isPending, isError, data, error }
   * @version 1.0.0
   */
  const {
    isPending: isPendingCategory,
    isError: isErrorCategory,
    data: categoryData,
    error: errorCategory,
  } = useQuery({
    queryKey: ["Category"],
    queryFn: GetProductCategory,
  });
  console.log(categoryData, "ff");

  // category wise data
  const { data: CategoryProduct } = useQuery({
    queryKey: ["CategoryWiseData", selectCategory],
    queryFn: () => {
      if (!selectCategory) throw new Error("category is undefined");
      return CategoryWiseData(selectCategory);
    },
    enabled: !!selectCategory,
  });
  console.log(CategoryProduct, "ff");

  /**
   * @description handle category
   * @version 1.0.0
   * @return params (string)
   */
  const handleCategory = (item: string) => {
    setSelectedCategory(item);
  };
  console.log(selectCategory, "select");

  return (
    <div>
      <Container>
        <div className="grid grid-cols-5 gap-x-6 h-[800px]">
          <div className="w-full">
            <img
              src={assets.FeaturedBanner}
              alt=""
              className="w-full h-full object-fit-cover"
            />
          </div>
          <div className="col-span-4 h-full">
            {/* heading */}
            <div className="flex justify-between items-center mb-5!">
              <h1 className="heading3 text-gray-900">Featured Products</h1>
              <ul className="flex gap-x-1 items-center justify-center text-nowrap">
                {categoryData?.slice(0, 7)?.map((item, index) => (
                  <li
                    onClick={() => handleCategory(item)}
                    key={index}
                    className={`text-gray-600 capitalize body-small-500 cursor-pointer p-1! ${
                      selectCategory === item ? "text-primary-500" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
                <li className="text-gray-700 capitalize body-medium-500 cursor-pointer p-1! ">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`flex items-center justify-center gap-2 cursor-pointer group body-small-500 ${
                      selectCategory === "all" ? "text-primary-500" : ""
                    }`}
                  >
                    Browse All Product{" "}
                    <span className="text-xl"> {icons.rightArrow}</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* product */}
            <div className="">
              <ProductCard
                status={
                  selectCategory === "all"
                    ? {
                        isPending,
                        isError,
                        data: { products: data?.products || [] },
                        error: errorCategory ? errorCategory : error,
                      }
                    : {
                        isPending: isPendingCategory
                          ? isPendingCategory
                          : isPending,
                        isError: isErrorCategory ? isErrorCategory : isError,
                        data: {
                          products: CategoryProduct?.products
                            ? CategoryProduct?.products
                            : data?.products || [],
                        },
                        error: errorCategory ? errorCategory : error,
                      }
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturesProduct;
