import Image from "next/image";

const Homepage = () => {
  return (
    <div
      className="relative aspect-[3.3/1] mbHomePage
HomePage
HomePage-12"
    >
      <div>
        <Image src="/featured.png" alt="featured product" fill />
      </div>
    </div>
  );
};

export default Homepage;
