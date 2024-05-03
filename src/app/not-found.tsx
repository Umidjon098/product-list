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
      <Link href="/" color="black">
        {"go.to.home"}
      </Link>
    </div>
  );
};

export default NotFound;
