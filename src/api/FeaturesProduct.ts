import type { fullApiType } from "../types/productApiData";

export const GetFeaturesProduct = async (): Promise<fullApiType> => {
  try {
    const data = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    return data;
  } catch (err) {
    console.log("error from features product fetching");
    throw err;
  }
};
