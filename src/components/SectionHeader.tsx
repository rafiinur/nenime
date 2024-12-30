import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b border-primary pb-5">
      <div className="flex items-center gap-3">
        <div className="bg-primary w-5 h-8 rounded-md"></div>
        <h2 className="text-lg font-semibold">{props.title}</h2>
      </div>
      <Link
        href="#"
        className="btn btn-circle btn-primary btn-sm flex items-center justify-center"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default SectionHeader;
