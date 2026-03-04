// src/app/layout.tsx
import "./globals.css";
import Navbar from "../../src/components/layout/Navbar";
import { Providers } from "./store/provider";

export const metadata = {
  title: "Tax Bachao",
  description: "Compare tax regimes and optimize savings",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>
          <Navbar />
          <main className="max-w-6xl mx-auto py-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
