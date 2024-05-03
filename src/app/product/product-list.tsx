"use client";

import { InfiniteLoader } from "@/components/infinite-loader";
import { userService } from "@/services/user";
import { extractDataFromPagination } from "@/utils/extract-data";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function ProductList() {
  const searchParams = useSearchParams();

  const params = {
    sort: searchParams.get("sort") || "asc",
    role: "user",
    perPage: 10,
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["users", params],
      queryFn: ({ pageParam }) =>
        userService.userList({ ...params, page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.links.next ? lastPage.meta.current_page + 1 : null,
    });

  const userList = extractDataFromPagination(data?.pages);

  return (
    <InfiniteLoader
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      loading={isFetchingNextPage}
    >
      <div className="grid">
        <ul>
          {userList?.map((user) => (
            <li key={user.id}>{user.firstname}</li>
          ))}
        </ul>
      </div>
    </InfiniteLoader>
  );
}
