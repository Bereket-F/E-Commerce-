"use client";

import { CartItemsType } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import { title } from "process";
import React, { use } from "react";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

const Contents: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    Quantity: 1,
    SelectedSize: "m",
    SelectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    Quantity: 1,
    SelectedSize: "l",
    SelectedColor: "green",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    Quantity: 1,
    SelectedSize: "s",
    SelectedColor: "black",
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const route = useRouter();

  const activeStep = parseInt(searchParams.get("step") || "1");
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-12">
      {/* title */}
      <h1 className="text-2xl font-medium ">Shopping Cart</h1>
      {/* steps */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-4 pb-3
          ${activeStep === step.id ? "border-gray-800 border-b-2" : "border-b-2 border-gray-200"}`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm
              ${activeStep === step.id ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}
              `}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${activeStep === step.id ? "text-gray-800" : "text-gray-500"}`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
