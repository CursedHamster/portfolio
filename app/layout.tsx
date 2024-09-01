import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

import Header from "../components/Header";
import Footer from "@/components/Footer";

import GoogleAnalytics from "./GoogleAnalytics";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "V.Harniuk. Portfolio",
  description:
    "I am a Front-End Developer with 2+ years of experience in creating websites and coding in general. Skilled in HTML, CSS, JavaScript, React, and Vue, I seek to use technical proficiency and creativity to develop engaging user experiences and advance in a professional career. Currently focused on enhancing animation and optimization.",
  keywords: [
    "Viktoriia Harniuk",
    "Front-End Developer",
    "Back-End Developer",
    "Web Developer",
    "Next.js",
    "React",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Vue",
    "Vue.js",
    "GSAP",
    "Three.js",
    "Java",
    "Spring",
    "Spring Boot",
    "AWS",
  ],
  creator: "Viktoriia Harniuk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <div className="background_gradient background_gradient_1"></div>
        <div className="background_gradient background_gradient_2"></div>
      </body>
    </html>
  );
}
