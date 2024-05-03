import { QueryCache, QueryClient } from "@tanstack/react-query";
import NetworkError from "@/utils/network-error";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    // @ts-ignore
    onError: (err: NetworkError, query) => {
      if (query.meta?.showErrorMessageFromServer) {
        console.error(err.message);
      }
    },
  }),
});
