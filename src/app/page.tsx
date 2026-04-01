import ProductList from "@/Components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ cat: string }>;
}) => {
  const cat = (await searchParams).cat;
  return (
    <div>
      <div className="relative aspect-[3.3/1] mb-12">
        <Image src="/featured.png" alt="featured product" fill />
      </div>
      <ProductList cat={cat} />
    </div>
  );
};

export default Homepage;
