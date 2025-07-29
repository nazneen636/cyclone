import { CategoryWiseData, GetProductCategory } from "../api/CategoryProduct";
// import type { categoryTypes } from "../types/categoryData";
import { useQuery } from "@tanstack/react-query";
import type { fullApiType } from "../types/productApiData";

interface propsType {
  data: string[] | undefined;
  isPending: boolean;
  isError: boolean;
  error: any;
  refetch: () => void;
}
export const useCategory = (): propsType => {
  const { isPending, isError, refetch, error, data } = useQuery({
    queryKey: ["category"],
    queryFn: GetProductCategory,
  });
  return { isPending, isError, refetch, error, data };
};

export const useSingleCategory = (categorySlug: string) => {
  const { isPending, isError, refetch, error, data } = useQuery<fullApiType>({
    queryKey: ["category", categorySlug],
    queryFn: () => CategoryWiseData(categorySlug),
    enabled: !!categorySlug,
  });
  return { isPending, isError, refetch, error, data };
};
