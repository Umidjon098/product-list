"use client";

import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="xl:container px-4 h-screen flex items-center justify-center flex-col gap-12">
      <Image src="/img/404.png" alt="not_found" width={300} height={300} />
      <div className="text-center">
        <strong className="text-3xl font-semibold">{"some.thing.wrong"}</strong>
        <p className="text-lg">{"page.doest.exist"}</p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {"go.to.home"}
      </Link>
    </div>
  );
};

export default NotFound;
