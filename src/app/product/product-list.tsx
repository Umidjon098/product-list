/* eslint-disable react/jsx-key */
"use client";

import { InfiniteLoader } from "@/components/infinite-loader";
import { productService } from "@/services/product";
import { extractDataFromPagination } from "@/utils/extract-data";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import ProductCard from "./card";

export default function ProductList() {
  const searchParams = useSearchParams();

  const params = {
    sort: searchParams.get("sort") || "asc",
    perPage: 10,
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products", params],
      queryFn: ({ pageParam }) =>
        productService.getAll({ ...params, page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.links.next ? lastPage.meta.current_page + 1 : null,
    });

  const productList = extractDataFromPagination(data?.pages);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from(Array(10).keys()).map((product) => (
          <ProductCard.Loading key={product} />
        ))}
      </div>
    );
  }
  if (productList && productList.length === 0) {
    return <div>Product not found</div>;
  }

  return (
    <InfiniteLoader
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      loading={isFetchingNextPage}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3">
        {productList?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </InfiniteLoader>
  );
}
