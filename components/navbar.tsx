"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { instrument } from "@/lib/font";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={` w-full py-4  border px-6 md:px-24 flex items-center justify-between z-999 bg-white`}
    >
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/vidstash.png"}
          width={200}
          height={200}
          alt="logo"
          className="w-36"
        />
      </Link>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Link href="/login" className="group">
          <Button className="bg-orange-500 rounded-full text-white hover:bg-orange-400 cursor-pointer flex gap-2 items-center py-6">
            <p className={`${instrument.className} text-lg`}>Get Started</p>
            <ArrowRight className="size-8 text-black bg-white p-2 rounded-full group-hover:translate-x-2 transition" />
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-11/12 md:w-fit bg-white border rounded-lg mt-4 p-4 lg:hidden shadow-xl space-y-4 z-40">
          <Link href="/login" className="group">
            <Button className="bg-orange-500 rounded-md text-white hover:bg-orange-500  flex gap-2 items-center py-6 w-full">
              <p className={`${instrument.className} text-lg`}>Get Started</p>
              <ArrowRight className="size-8 text-black bg-white p-2 rounded-full group-hover:translate-x-2 transition" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
