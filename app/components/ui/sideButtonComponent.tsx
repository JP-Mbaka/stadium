import { onlyMe } from "@/app/constants";
import React from "react";

const SideButtonComponent: React.FC<onlyMe> = ({ title }) => {
  return (
    <button className="flex justify-center w-48 md:w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
      {title}
    </button>
  );
};

export default SideButtonComponent;
