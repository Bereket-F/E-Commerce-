import ProductList from "@/Components/ProductList";
import React from "react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ cat: string }>;
}) => {
  const cat = (await searchParams).cat;
  return <ProductList cat={cat} params="Products" />;
};

export default ProductsPage;
