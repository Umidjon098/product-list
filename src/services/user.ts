import fetcher from "@/lib/fetcher";
import { Paginate, ParamsType } from "@/types/global";
import { IUser } from "@/types/user";
import { buildUrlQueryParams } from "@/utils/build-url-query-params";

export const userService = {
  userList: (params?: ParamsType) =>
    fetcher<Paginate<IUser>>(
      buildUrlQueryParams("v1/dashboard/admin/users/paginate", params)
    ),
};
