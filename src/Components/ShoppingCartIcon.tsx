import { ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href="/Cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span
        className="absolute -top-3 -right-3 bg-amber-400 text-gray-500 rounded-full 
      w-4 h-4 flex items-center justify-center text-xs"
      >
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
