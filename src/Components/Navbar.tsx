import Link from "next/link";
import Image from "next/image";
import React from "react";
import Searchbar from "./Searchbar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 pb-4">
      {/* left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          VibeWear
        </p>
      </Link>
      {/* right */}
      <div className="flex gap-6 items-center">
        <Searchbar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600 " />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCart className="w-4 h-4 text-gray-600" />
        <Link href="/">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
