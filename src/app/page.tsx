import ProductList from "@/Components/ProductList";
import Image from "next/image";

const Homepage = () => {
  return (
    <div>
      <div
        className="relative aspect-[3.3/1] mbHomePage
HomePage
HomePage-12 mb-12"
      >
        <Image src="/featured.png" alt="featured product" fill />
      </div>
      <ProductList />
    </div>
  );
};

export default Homepage;
