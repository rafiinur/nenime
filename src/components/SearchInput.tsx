import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = () => {
  return (
    <div className="join">
      <div>
        <input
          className="input input-sm input-bordered join-item bg-base-300"
          placeholder="Search"
        />
      </div>

      <button className="btn btn-sm btn-primary join-item">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchInput;
