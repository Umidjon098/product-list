import { IProduct } from "@/types/product";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className="rounded-t-lg w-full h-[250px] object-contain"
          src={product.img}
          alt=""
          width={100}
          height={200}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.translation.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
          {product.translation.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

const ProductCardLoading = () => {
  return <div>LOading</div>;
};
ProductCard.Loading = ProductCardLoading;
