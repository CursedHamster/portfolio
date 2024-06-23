"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {
  IconMenu2,
  IconX,
  IconArrowNarrowRight,
  IconCheck,
} from "@tabler/icons-react";
import GradientButton from "./GradientButton";
import navigate from "@/util/navigate";
import styles from "./header.module.scss";
import styleVars from "@/app/_vars.module.scss";
import data from "../data/data";
import vars from "@/data/vars";

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
          // yPercent: -100,
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
            // xPercent: -20,
            yPercent: -100,
            autoAlpha: 0,
            duration: vars?.durationSm,
            stagger: vars?.staggerSm,
          },
          vars?.durationMd / 2
        )
      // .from(
      //   ".nav_mobile_button",
      //   {
      //     xPercent: -100,
      //     autoAlpha: 0,
      //     duration: 0.5,
      //   },
      //   "<=0.5"
      // );
    );
  });

  useGSAP(() => {
    setIsMobile(window?.innerWidth <= 1000);
    window.addEventListener("resize", changeIsMobile);
    gsap.from(headerRef?.current, {
      autoAlpha: 0,
      duration: vars?.enterAnimationDuration,
    });
    // gsap.from(`.${styles?.logo}`, {
    //   yPercent: -50,
    //   duration: vars?.enterAnimationDuration,
    // });

    return () => window.removeEventListener("resize", changeIsMobile);
  });

  // useEffect(() => {
  //   setIsMobile(window?.innerWidth <= 1000);
  //   window.addEventListener("resize", changeIsMobile);

  //   return () => window.removeEventListener("resize", changeIsMobile);
  // }, []);

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
      {/* <div onClick={() => navigate("/#home", router)}>
        <Image
          src="/logo_1.svg"
          alt="Hamster Logo"
          className={styles.logo}
          width={100}
          height={100}
          priority
        />
      </div> */}
      {isMobile ? (
        <IconMenu2 className={styles.burger} onClick={openMenu} />
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
            onClick={() =>
              navigate(
                document.getElementById("contacts")
                  ? "#contacts"
                  : "/#contacts",
                router
              )
            }
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
                onClick={() => {
                  closeMenu();
                  navigate("/#" + section, router);
                }}
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
          {/* <button className={`${styles.nav_mobile_button} nav_mobile_button`}>
            <p className={styles.li_title}>Hire me</p>
            <div className={`${styles.li_icon}`}>
              <IconArrowNarrowRight />
            </div>
          </button> */}
        </nav>
      )}
    </header>
  );
};

export default Header;
