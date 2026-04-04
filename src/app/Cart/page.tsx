"use client";

import PaymentMethos from "@/Components/PaymentMethos";
import ShippingForm from "@/Components/ShippingForm";
import { CartItemsType, ShippingInfoType } from "@/types";
import { ArrowRight, Ship, Trash2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { title } from "process";
import React, { act, use, useState } from "react";

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
  const [shippingData, setShippingData] = useState<ShippingInfoType | null>(
    null,
  );

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
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
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
      {/* steps and details */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* steps */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 rounded-lg gap-8 flex flex-col p-8">
          {activeStep === 1 ? (
            Contents.map((item) => (
              // cart item
              <div className="flex items-center justify-between">
                <div className="flex gap-8">
                  {/* image and details */}
                  <div className="flex gap-8 relative w-32 h-40 bg-gray-50 rounded-lg overflow-hidden">
                    {/* image */}
                    <Image
                      src={item.images[item.SelectedColor]}
                      alt={item.name}
                      fill
                      className="obeject-contain"
                    />
                  </div>
                  {/* item details */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.Quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: {item.SelectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        Color: {item.SelectedColor}
                      </p>
                    </div>
                    <p className="font-medium">{item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* delete button */}
                <button
                  className="w-8 h-8 rounded-full bg-red-200 text-red-500 
                flex items-center justify-center cursor-pointer hover:bg-red-300 
                transition-all duration-300"
                >
                  <Trash2 width={16} height={16} className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingData={setShippingData} />
          ) : activeStep === 3 && shippingData ? (
            <PaymentMethos />
          ) : (
            <p className="text-gray-500">Please fill the shipping form first</p>
          )}
        </div>
        {/* details */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 rounded-lg gap-8 flex flex-col p-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            {/* subtotal */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">
                $
                {Contents.reduce(
                  (acc, item) => acc + item.price * item.Quantity,
                  0,
                ).toFixed(2)}
              </p>
            </div>
            {/* discount */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount</p>
              <p className="font-medium">-$10.00</p>
            </div>
            {/* Shipping */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping</p>
              <p className="font-medium">Free</p>
            </div>
            <hr className="border-gray-200" />
            {/* Total */}
            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p className="font-medium">
                $
                {Contents.reduce(
                  (acc, item) => acc + item.price * item.Quantity,
                  0,
                ).toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex 
              items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
              onClick={() => route.push("/Cart?step=2", { scroll: false })}
            >
              Countinue
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
