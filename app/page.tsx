import styles from "./page.module.scss";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
