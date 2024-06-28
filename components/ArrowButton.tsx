"use client";

import styleVars from "@/app/_vars.module.scss";
import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import gsap from "gsap";
import { isMobile } from "react-device-detect";
import styles from "./arrowButton.module.scss";

const ArrowButton = (params: {
  text?: string;
  className?: string;
  direction: "left" | "right";
  type: "navigate" | "click";
  onClick?: (e: any) => void;
}) => {
  const { contextSafe } = useGSAP();

  const onMouseEnterNavButton = contextSafe((e: any, isLeft: boolean) => {
    const getChild = gsap.utils.selector(e?.currentTarget);
    const circleAnimation = isLeft ? { left: 0 } : { right: 0 };
    gsap.to(getChild(".nav_circle"), {
      scale: 0.8,
      duration: vars?.durationSm,
      ...circleAnimation,
    });
    gsap.to(getChild(".nav_button_child"), {
      x: isLeft ? vars?.offsetSm : -vars?.offsetSm,
      duration: vars?.durationSm,
      stagger: isLeft ? vars?.staggerSm : -vars?.staggerSm,
    });
  });

  const onMouseLeaveNavButton = contextSafe((e: any, isLeft: boolean) => {
    const getChild = gsap.utils.selector(e?.currentTarget);
    const circleAnimation = isLeft
      ? { left: styleVars?.gapLg }
      : { right: styleVars?.gapLg };
    gsap.to(getChild(".nav_circle"), {
      scale: 1,
      duration: vars?.durationSm,
      ...circleAnimation,
    });
    gsap.to(getChild(".nav_button_child"), {
      x: 0,
      duration: vars?.durationSm,
      stagger: isLeft ? vars?.staggerSm : -vars?.staggerSm,
    });
  });

  const navigateTo = contextSafe((e?: any) => {
    const getChild = gsap.utils.selector(e?.currentTarget);
    const circle: any = getChild(".nav_circle");
    if (!circle[0]?.classList.contains("main_opacity_full")) {
      circle[0]?.classList.add("main_opacity_full");
    }
    gsap.to(".main_opacity", { autoAlpha: 0, duration: vars?.durationSm });
    gsap.to(circle, {
      scale: 10,
      backgroundColor: styleVars?.primaryTextColor,
      duration: vars?.durationMd,
      autoAlpha: 0,
      onComplete: () => {
        if (params?.onClick) {
          params?.onClick(e);
        }
      },
    });
  });

  const clickButton = contextSafe((e?: any) => {
    const getChild = gsap.utils.selector(e?.currentTarget);
    const clickTimeline = gsap.timeline({
      //TODO: make this timeline overwritable
      onComplete: () => {
        if (params?.onClick) {
          params?.onClick(e);
        }
        clickTimeline?.kill();
      },
    });
    const circle: any = getChild(".nav_circle");
    clickTimeline
      ?.to(circle, {
        scale: 1.5,
        duration: vars?.durationSm,
      })
      .to(circle, {
        scale: 1,
        duration: vars?.durationSm,
      });
  });

  return (
    <button
      className={`${styles.nav_button} ${
        params?.direction === "left" ? styles.left : styles.right
      } ${params?.type === "navigate" ? styles.full_width : ""} ${
        params?.className
      }`}
      onMouseEnter={
        isMobile
          ? undefined
          : (e) => onMouseEnterNavButton(e, params?.direction === "left")
      }
      onMouseLeave={
        isMobile
          ? undefined
          : (e) => onMouseLeaveNavButton(e, params?.direction === "left")
      }
      onClick={params?.type === "navigate" ? navigateTo : clickButton}
    >
      <p className={`${styles.text} nav_button_child main_opacity`}>
        {params?.text}
      </p>
      <IconArrowNarrowRight className="nav_button_child main_opacity" />
      <div className={`${styles.nav_circle} nav_circle main_opacity`}></div>
      <div className={`${styles.nav_line} nav_line main_opacity`}></div>
    </button>
  );
};

export default ArrowButton;
