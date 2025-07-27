import type { fullApiType } from "../types/productApiData";

export const GetOfferData = async (): Promise<fullApiType> => {
  try {
    const data = await fetch(
      "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log("error in fetching offer data", err);
    throw err;
  }
};
