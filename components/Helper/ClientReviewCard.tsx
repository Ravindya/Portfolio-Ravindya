import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  paragraph:string;
  user: string;
  role: string;
}

const ClientReviewCard = ({ image,paragraph, role, user }: Props) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-xl">
        <Image
          src={`${image}`}
          alt={user}
          width={70}
          height={70}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div>
          <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fixed" />
        </div>
        <p className="text-[15px] text-yellow-400 opacity-65 mt-[3rem] text-center">
          {paragraph}
        </p>
        <div>
          <SparklesIcon className="w-[6rem] right-0 h-[6rem] text-white opacity-15 fixed" />
        </div>
        <h1 className="text-[20px] text-center text-white mt-[2rem] font-medium">
          {user}
        </h1>
        <p className="text-white text-[15px] text-center mb-[3rem]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
