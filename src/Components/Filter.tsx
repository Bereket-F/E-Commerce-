"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

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
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="price-asc">Price: High to Low</option>
        <option value="price-desc">Price: Low to High</option>
      </select>
    </div>
  );
};

export default Filter;
