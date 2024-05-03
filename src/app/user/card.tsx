import { IUser } from "@/types/user";
import Image from "next/image";
import React from "react";

interface UserCardProps {
  user: IUser;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div
      key={user.id}
      className="w-full pt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col items-center pb-4">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={user.img}
          alt="Bonnie image"
          width={50}
          height={50}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
          {user.full_name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.role}
        </span>
        <div className="flex mt-4 md:mt-6">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add friend
          </button>
          <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

const UserCardLoading = () => {
  return <div>LOading</div>;
};
UserCard.Loading = UserCardLoading;
