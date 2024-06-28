"use client";

import vars from "@/data/vars";
import navigate from "@/util/navigate";
import { useGSAP } from "@gsap/react";
import {
  IconArrowNarrowRight,
  IconCheck,
  IconMenu,
  IconX
} from "@tabler/icons-react";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import data from "../data/data";
import GradientButton from "./GradientButton";
import styles from "./header.module.scss";

const Header = () => {
  gsap.registerPlugin(useGSAP);
  const router = useRouter();
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuTimeline, setMenuTimeline] = useState<GSAPTimeline>();
  const { contextSafe } = useGSAP();
  const changeIsMobile = () => {
    setIsMobile(window?.innerWidth <= 1000);
  };
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = contextSafe(() => {
    menuTimeline?.reverse();
  });
  const animateOpenMenu = contextSafe(() => {
    gsap.set("html", { overflow: "hidden" });
    setMenuTimeline(
      gsap
        .timeline({
          onReverseComplete: () => {
            gsap.set("html", { overflowY: "auto" });
            setIsMenuOpen(false);
          },
        })
        .from(".nav_mobile", {
          autoAlpha: 0,
          duration: vars?.durationMd,
        })
        .from(".nav_mobile_close", {
          yPercent: -100,
          autoAlpha: 0,
          duration: vars?.durationSm,
        })
        .from(
          ".nav_mobile_li",
          {
            yPercent: -50,
            autoAlpha: 0,
            duration: vars?.durationSm,
            stagger: vars?.staggerSm,
          },
          vars?.durationMd / 2
        )
    );
  });

  useGSAP(() => {
    setIsMobile(window?.innerWidth <= 1000);
    window.addEventListener("resize", changeIsMobile);
    gsap.from(headerRef?.current, {
      autoAlpha: 0,
      duration: vars?.enterAnimationDuration,
    });
    return () => window.removeEventListener("resize", changeIsMobile);
  });

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      closeMenu();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && isMenuOpen) {
      animateOpenMenu();
    }
  }, [isMenuOpen]);

  const navigateToLink = (href: string) => {
    closeMenu();
    navigate(href, router);
  };

  const navigateToContacts = () => {
    navigateToLink(
      document.getElementById("contacts") ? "#contacts" : "/#contacts"
    );
  };

  return (
    <header className={`${styles.header} hidden`} ref={headerRef}>
      <Image
        src="/logo.svg"
        alt="Hamster Logo"
        className={styles.logo}
        width={100}
        height={100}
        priority
        onClick={() => navigate("/#home", router)}
      />
      {isMobile ? (
        <IconMenu className={styles.burger} onClick={openMenu} />
      ) : (
        <nav className={styles.nav}>
          {data?.sections?.map((section, i) => (
            <div
              onClick={() => navigate("/#" + section, router)}
              key={`header_desktop_link_${i}`}
            >
              {section}
            </div>
          ))}
          <GradientButton
            text="Hire me"
            icon={true}
            onClick={navigateToContacts}
          />
        </nav>
      )}
      {isMenuOpen && (
        <nav className={`${styles.nav_mobile} nav_mobile`}>
          <IconX
            className={`${styles.close} nav_mobile_close`}
            onClick={closeMenu}
          />
          <ul className={styles.nav_mobile_list}>
            {data?.sections?.map((section, i) => (
              <li
                className={`${styles.nav_mobile_li} nav_mobile_li`}
                key={`nav_mobile_link_` + i}
                onClick={() => navigateToLink("/#" + section)}
              >
                <span className={`${styles.li_number} nav_mobile_li_number`}>
                  ({i + 1})
                </span>
                <p className={`${styles.li_title} nav_mobile_li_title`}>
                  {section}
                </p>
                <div className={`${styles.li_icon} nav_mobile_li_icon`}>
                  <IconArrowNarrowRight />
                </div>
              </li>
            ))}
            <li
              className={`${styles.nav_mobile_li} ${styles.nav_mobile_button} nav_mobile_li`}
              onClick={navigateToContacts}
            >
              <span className={`${styles.li_number} nav_mobile_li_number`}>
                ({data?.sections?.length + 1})
              </span>
              <p className={`${styles.li_title} nav_mobile_li_title`}>
                Hire me
              </p>
              <div className={`${styles.li_icon} nav_mobile_li_icon`}>
                <IconCheck />
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
