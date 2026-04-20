import ProductInteraction from "@/Components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";
import { title } from "process";
import React from "react";

//temporary data
const product: ProductType = {
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
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  // get the product from db
  // fot temporary
  return {
    title: product.name,
    describtion: product.description,
  };
};

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { color, size } = await searchParams;

  const selectedSize = (size || product.sizes[0]) as string;
  const selectedColor = (color || product.colors[0]) as string;
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* image */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.shortDescription}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>

        <ProductInteraction
          product={product}
          selectedcolor={selectedColor}
          selectedsize={selectedSize}
        />

        {/* card info */}
        <div className="flex items-center mt-4 gap-2">
          <Image
            src="/klarna.png"
            alt="Klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="PayPal"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="Stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking pay now you agree to our terms and conditions. Please make
          sure to review your order before proceeding to payment.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
