import type { fullApiType } from "./productApiData";

export type queryType = {
  data: fullApiType | undefined;
  refetch: Function;
  isPending: boolean;
  isError: boolean;
  error: any;
};
