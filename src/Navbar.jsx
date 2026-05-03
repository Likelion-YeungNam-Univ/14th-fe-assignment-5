import React, { useState } from "react";
import { FaYoutube, FaSearch, FaMicrophone } from "react-icons/fa";

const Navbar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow">

      <div className="flex items-center">
        <FaYoutube className="text-red-500 text-2xl" />
         <span className="font-bold">YouTube</span>
      </div>

      {/* 검색창 */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border px-3 py-2 rounded-l-full"
        />

        <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
          <FaSearch />
        </button>

        <button className="ml-2 p-2 bg-gray-200 rounded-full">
          <FaMicrophone />
        </button>
      </div>

      {/* 오른쪽 */}
      <div>
        <img
          src="https://via.placeholder.com/30"
          alt=""
          className="rounded-full"
        />
      </div>

    </div>
  );
};

export default Navbar;