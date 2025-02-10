import { onlyMe } from "@/types";
import Link from "next/link";
import React from "react";

const SideButtonComponent: React.FC<onlyMe> = ({ title }) => {
  return (
    <button className="flex justify-center w-48 md:w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
      <Link href={`${title === "Sign-in" && "/login"}`}>{title}</Link>
    </button>
  );
};

export default SideButtonComponent;
