"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TaxBachao"
            width={190}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/calculator"
            className="relative text-gray-600 hover:text-blue-600 transition"
          >
            Calculator
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            href="/calculator"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Start Planning
          </Link>

        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">

          <Link
            href="/calculator"
            className="block px-6 py-4 hover:bg-gray-50"
            onClick={() => setMobileOpen(false)}
          >
            Calculator
          </Link>

          <Link
            href="/calculator"
            className="block px-6 py-4 text-blue-600 font-medium hover:bg-gray-50"
            onClick={() => setMobileOpen(false)}
          >
            Start Planning
          </Link>

        </div>
      )}
    </header>
  );
}
