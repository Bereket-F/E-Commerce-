import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="mt-16 flex flex-col items-center 
  md:flex-row md:items-start bg-gray-800 p-8 md:p-15 gap-8 md:gap-0 rounded-lg justify-between"
    >
      {/* first row */}
      <div className="text-white flex flex-col md:items-start gap-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <p className="text-md font-medium tracking-wider text-white">
            VibeWear
          </p>
        </Link>
        <p className="text-sm text-gray-400">@2026, VibeWear</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      {/* second row */}
      <div className="text-gray-400 flex flex-col items-center md:items-start gap-4 text-sm">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      {/* third row */}
      <div className="text-gray-400 flex flex-col items-center md:items-start gap-4 text-sm">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sallers</Link>
        <Link href="/">Sale</Link>
      </div>
      {/* fourth row */}
      <div className="text-gray-400 flex flex-col items-center md:items-start gap-4 text-sm">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
