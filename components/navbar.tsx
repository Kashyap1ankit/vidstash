"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { instrument } from "@/lib/font";
import { navItems } from "@/lib/constant";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrollable, setScrollable] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScrolling() {
      setScrollable(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  return (
    <div
      className={`fixed top-8 left-1/2 -translate-x-1/2 w-11/12 md:w-3/4 max-w-7xl z-50 py-4 px-6 flex items-center justify-between duration-300 ${
        isScrollable ? "backdrop-blur-lg bg-white/30 p-2 rounded-md border" : ""
      }`}
    >
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="logo"
          className="w-24"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex justify-center items-center gap-12">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`${instrument.className} text-gray-500 hover:text-black transition`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSc4XPjHJ3EZDaiDgs5ze1xyVWHnlxpF4fSnHdkzAYxuMl4ABw/viewform"
          target="_blank"
        >
          <Button className="bg-white rounded-full text-black border hover:bg-white py-6">
            <p className={`${instrument.className} text-lg`}>Contact Us</p>
          </Button>
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=%2B919998881729&text&type=phone_number&app_absent=0"
          target="_blank"
          className="group"
        >
          <Button className="bg-primary-btn rounded-full text-white hover:bg-primary-btn flex gap-2 items-center py-6">
            <p className={`${instrument.className} text-lg`}>Talk to Puch</p>
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
        <div className="absolute top-full left-0 w-full bg-white border rounded-lg mt-4 p-4 lg:hidden shadow-xl space-y-4 z-40">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className={`${instrument.className} block text-gray-700 hover:text-black`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4XPjHJ3EZDaiDgs5ze1xyVWHnlxpF4fSnHdkzAYxuMl4ABw/viewform"
            target="_blank"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-white border text-black rounded-full">
              <p className={`${instrument.className}`}>Contact Us</p>
            </Button>
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=%2B919998881729&text&type=phone_number&app_absent=0"
            target="_blank"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-primary-btn text-white flex justify-center gap-2 items-center rounded-full mt-6">
              <p className={`${instrument.className}`}>Talk to Puch</p>
              <ArrowRight className="size-6 text-black bg-white p-1 rounded-full" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
