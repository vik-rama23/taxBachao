"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          TaxMitra
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

          {/* Calculator Link */}
          <Link
            href="/calculator"
            className={`text-sm font-medium transition ${
              pathname === "/calculator"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Calculator
          </Link>

          {/* Start Planning Button */}
          <Link
            href="/calculator"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition text-sm font-medium"
          >
            Start Planning
          </Link>

        </nav>
      </div>
    </header>
  );
}
