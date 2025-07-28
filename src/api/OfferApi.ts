import type { fullApiType } from "../types/productApiData";

type propsType = {
  limit: number;
  skip: number;
};
export const GetFlashSellOfferData = async ({
  limit,
  skip,
}: propsType): Promise<fullApiType> => {
  try {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log("error in fetching Flash sale offer data", err);
    throw err;
  }
};

export const GetBestSellersData = async ({
  limit,
  skip,
}: propsType): Promise<fullApiType> => {
  try {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log("error in fetching Best Sale offer data", err);
    throw err;
  }
};
export const GetTopRatedData = async ({
  limit,
  skip,
}: propsType): Promise<fullApiType> => {
  try {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log("error in fetching Top Rated data", err);
    throw err;
  }
};
export const GetNewArrivalData = async ({
  limit,
  skip,
}: propsType): Promise<fullApiType> => {
  try {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log("error in fetching Top Rated data", err);
    throw err;
  }
};
