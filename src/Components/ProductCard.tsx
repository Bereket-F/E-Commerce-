"use client";

import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import useCartStore from "@/Stores/cartStores";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [ProductType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleAddtoCart = () => {
    addToCart({
      ...product,
      SelectedSize: ProductType.size,
      SelectedColor: ProductType.color,
      Quantity: 1,
    });
    toast.success("Product added to cart!");
  };

  const handleProductTypeChange = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductType((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/Products/${product.id}`}>
        <div>
          <img
            src={product.images[ProductType.color]}
            alt={product.name}
            className="w-full h-full object-cover px-9 hover:scale-105 
          transition-transform duration-300"
          />
        </div>
      </Link>

      {/* product details */}
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* prodcte type */}
        <div className="flex items-center gap-4 text-xs">
          {/* size */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-500 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductTypeChange({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option
                  key={size}
                  value={size}
                  className="bg-black text-white rounded-full"
                >
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex gap-2 items-center">
              {product.colors.map((color) => (
                <div
                  className={`flex items-center justify-center cursor-pointer border
                    ${ProductType.color === color ? "border-gray-400" : "border-gray-200"}
                   rounded-full p-0.5`}
                  key={color}
                  onClick={() =>
                    handleProductTypeChange({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* price and add to cart */}
        <div className="flex items-center justify-between mt-2">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            className="ring ring-gray-500 px-2 py-1 rounded-md hover:bg-black 
          hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
            onClick={handleAddtoCart}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
