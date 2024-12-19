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
    "I am a Frontend Developer and UI/UX Designer with 3+ years of experience in creating visually appealing and user-friendly websites/apps. Skilled in HTML, CSS, JavaScript, React, Vue, and Figma, I am passionate about crafting exceptional digital experiences. I'm currently focused on enhancing animation, optimization, and overall user interaction.",
  keywords: [
    "Viktoriia Harniuk",
    "Front-End Developer",
    "Back-End Developer",
    "UI/UX Developer",
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
        {/* <div className="background_gradient background_gradient_1"></div>
        <div className="background_gradient background_gradient_2"></div> */}
      </body>
    </html>
  );
}
