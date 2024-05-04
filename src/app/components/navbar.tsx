"use client";

/* eslint-disable @next/next/no-img-element */
import { useMainContext } from "@/context/main";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { handleOpen } = useMainContext();
  return (
    <nav className="container bg-white border-gray-200 mb-6">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/favicon.ico" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            ProShop
          </span>
        </Link>

        <button
          onClick={handleOpen}
          className="inline-flex items-center px-4 py-2 text-sm font-medium
        text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Add user
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
