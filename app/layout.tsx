import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

import Header from "../components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Temporarily modified by CursedHamster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <div className="background_gradient"></div>
      </body>
    </html>
  );
}
