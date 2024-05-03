/* eslint-disable react-hooks/exhaustive-deps */
import { useDebounce } from "@/hook/use-debounce";
import { useQueryParams } from "@/hook/use-query-params";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const { setQueryParams } = useQueryParams();
  const [search, setSearch] = useState(searchParams.get("search") as string);
  const [filter, setFilter] = useState(searchParams.get("search") as string);

  const debouncedSearchValue = useDebounce(search) || "";

  useEffect(() => {
    setQueryParams({ search: debouncedSearchValue }, false);
  }, [debouncedSearchValue]);

  useEffect(() => {
    setQueryParams({ sort: filter }, false);
  }, [filter]);

  return (
    <div className="mx-auto mb-6">
      <div className="flex gap-4">
        <select
          value={searchParams.get("sort") as string}
          onChange={(e) => setFilter(e.target.value)}
          className="w-[250px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="asc">Low</option>
          <option value="desc">High</option>
        </select>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block p-4 ps-10 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter product name..."
            required
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
