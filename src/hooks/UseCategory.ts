import { GetProductCategory } from "../api/CategoryProduct";
// import type { categoryTypes } from "../types/categoryData";
import { useQuery } from "@tanstack/react-query";

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
