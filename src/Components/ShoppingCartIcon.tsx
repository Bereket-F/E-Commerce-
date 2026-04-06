"use client";

import { ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";
import useCartStore from "@/Stores/cartStores";
import { ca } from "zod/locales";

const ShoppingCartIcon = () => {
  const { cart, hasHydration } = useCartStore();

  if (!hasHydration) {
    return null;
  }

  return (
    <Link href="/Cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span
        className="absolute -top-3 -right-3 bg-amber-400 text-gray-500 rounded-full 
      w-4 h-4 flex items-center justify-center text-xs"
      >
        {cart.reduce((acc, item) => acc + item.Quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
