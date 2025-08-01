"use client";
import Image from "next/image";

import { Input } from "../ui/input";

const LocalSearch = ({
  imgSrc,
  placeholder,
}: {
  imgSrc: string;
  placeholder: string;
}) => {
  return (
    <div className="background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ">
      <Image
        src={imgSrc}
        alt="Search"
        width={24}
        height={24}
        className="cursor-pointer "
      />
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
