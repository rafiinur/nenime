import Link from "next/link";
import React from "react";
import { ArrowTrendingUpIcon, CalendarIcon } from "@heroicons/react/24/outline";

const sidebarLinks = [
  {
    title: "Seasonal Anime",
    icon: <CalendarIcon className="w-5 h-5" />,
  },
  {
    title: "Trending",
    icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
  },
];

const Sidebar = () => {
  return (
    <div className="sticky left-0 top-0 z-30 w-56 h-screen border-r border-base-content/20 overflow-auto pb-5 pt-24 max-md:hidden">
      <div className="flex flex-col gap-2 px-2 w-full">
        {sidebarLinks.map((link) => (
          <Link
            key={link.title}
            href="#"
            className="btn w-full relative flex flex-nowrap items-center justify-start"
          >
            {link.icon}
            <p className="font-semibold whitespace-nowrap text-xs">
              {link.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
