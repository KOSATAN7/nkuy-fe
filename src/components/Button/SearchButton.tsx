import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchButton: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border-2 p-2 rounded-lg pl-5 pr-10 w-full"
        placeholder="Search"
      />
      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchButton;
