/* eslint-disable react/jsx-key */
"use client";

import { InfiniteLoader } from "@/components/infinite-loader";
import { userService } from "@/services/user";
import { extractDataFromPagination } from "@/utils/extract-data";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import UserCard from "./card";

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

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from(Array(10).keys()).map((product) => (
          <UserCard.Loading key={product} />
        ))}
      </div>
    );
  }
  if (userList && userList.length === 0) {
    return <div>User not found</div>;
  }

  return (
    <InfiniteLoader
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      loading={isFetchingNextPage}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {userList?.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </InfiniteLoader>
  );
}
