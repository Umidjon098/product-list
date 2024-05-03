import fetcher from "@/lib/fetcher";
import { Paginate, ParamsType } from "@/types/global";
import { IProduct } from "@/types/product";
import { buildUrlQueryParams } from "@/utils/build-url-query-params";

export const productService = {
  getAll: (params?: ParamsType) =>
    fetcher<Paginate<IProduct>>(
      buildUrlQueryParams("v1/rest/products/paginate", params)
    ),
};
