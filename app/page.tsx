"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import navigate from "@/util/navigate";
import styles from "./page.module.scss";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    navigate(window.location.href, router);
  }, []);
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
