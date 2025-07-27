// import type { categoryTypes } from "../types/categoryData";

import type { categoryTypes } from "../types/categoryData";
import type { fullApiType } from "../types/productApiData";

export const GetProductCategory = async (): Promise<categoryTypes[]> => {
  try {
    const data = await fetch(
      "https://dummyjson.com/products/category-list"
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log("error from category data fetching");
    throw err;
  }
};

export const CategoryWiseData = async (
  categorySlug: string
): Promise<fullApiType> => {
  try {
    const data = await fetch(
      `https://dummyjson.com/products/category/${categorySlug}`
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log("category item fetching error", err);
    throw err;
  }
};
