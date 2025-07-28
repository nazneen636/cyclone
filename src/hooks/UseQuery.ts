import { useQuery } from "@tanstack/react-query";
import {
  GetBestSellersData,
  GetFlashSellOfferData,
  GetNewArrivalData,
  GetTopRatedData,
} from "../api/OfferApi";
import type { queryType } from "../types/queryType";

export const useFlashSaleOffer = (): queryType => {
  const {
    data: FlashSaleData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["flashSaleOffer"],
    queryFn: async () => await GetFlashSellOfferData({ limit: 3, skip: 0 }),
  });
  return { data: FlashSaleData, isPending, isError, error, refetch };
};

export const useBestSellerData = (): queryType => {
  const {
    data: BestSellerData,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["bestSellerData"],
    queryFn: async () => await GetBestSellersData({ limit: 3, skip: 4 }),
  });
  return { data: BestSellerData, isPending, isError, error, refetch };
};

export const useTopRatedData = (): queryType => {
  const {
    data: TopRated,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["topRated"],
    queryFn: async () => await GetTopRatedData({ limit: 3, skip: 7 }),
  });
  return { data: TopRated, refetch, isPending, isError, error };
};

export const useNewArrivalData = (): queryType => {
  const {
    data: NewArrival,
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["newArrival"],
    queryFn: async () => await GetNewArrivalData({ limit: 3, skip: 10 }),
  });
  return { data: NewArrival, refetch, isPending, isError, error };
};
