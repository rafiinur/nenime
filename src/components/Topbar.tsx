import React from "react";
import ThemeController from "./ThemeController";
import SearchInput from "./SearchInput";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Topbar = () => {
  return (
    <header className="fixed top-0 navbar bg-base-100 py-4 border-b border-base-content/20 z-50">
      <div className="flex-1">
        <h1 className="btn btn-ghost text-2xl text-primary font-bold ">
          Nenime
        </h1>
      </div>
      <div className="flex-none flex items-center gap-3">
        <SearchInput />
        <button className="btn btn-circle btn-ghost btn-md">
          <ThemeController />
        </button>
        <button className="btn btn-circle btn-ghost btn-md">
          <UserCircleIcon className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
