"use client";

import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Catagory = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-Shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const SelectCategory = searchParams.get("cat");
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (value: string | null) => {
    const parems = new URLSearchParams(searchParams);
    parems.set("cat", value || "all");
    router.push(`${pathName}?${parems.toString()}`, { scroll: false });
  };
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
    lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-6 bg-gray-100 rounded-2xl text-sm p-4"
    >
      {Catagory.map((cat) => (
        <div
          key={cat.name}
          className={`flex items-center justify-center gap-2 cursor-pointer
          px-2 py-1 rounded-md 
          ${cat.slug === SelectCategory ? "bg-white" : "text-gray-500"}`}
          onClick={() => handleChange(cat.slug)}
        >
          {cat.icon}
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
