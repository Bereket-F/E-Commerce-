"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price-asc", label: "Price: High to Low" },
  { value: "price-desc", label: "Price: Low to High" },
];

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleFilter = (value: string) => {
    const parems = new URLSearchParams(searchParams);
    parems.set("sort", value);
    router.push(`${pathName}?${parems.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-4 mb-6 text-sm text-gray-500">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        {Options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-black text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
