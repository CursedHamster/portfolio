"use client";

import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import styles from "./button.module.scss";
import vars from "@/data/vars";

const UnderlineButton = (params: {
  text?: string;
  icon?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}) => {
  const { contextSafe } = useGSAP();
  const [rightAnimation, setRightAnimation] = useState<GSAPTween>();
  const rightOnMouseEnter = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    gsap.fromTo(
      buttonSelector(".line"),
      { left: 0 },
      { width: 0, duration: vars?.durationMd, ease: "none" }
    );
    if (!rightAnimation) {
      setRightAnimation(
        gsap.to(buttonSelector(".right"), {
          xPercent: 50,
          duration: vars?.durationMd,
          repeat: -1,
          yoyo: true,
          ease: "none",
        })
      );
    } else {
      rightAnimation?.restart();
    }
  });

  const rightOnMouseLeave = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    rightAnimation?.pause();
    gsap.to(buttonSelector(".right"), {
      xPercent: 0,
      duration: vars?.durationMd,
    });
    gsap.to(buttonSelector(".line"), {
      width: "100%",
      duration: vars?.durationMd,
    });
  });

  const rightOnClick = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    rightAnimation?.pause();
    gsap.to(buttonSelector(".right"), {
      xPercent: 0,
      duration: vars?.durationMd,
    });
    gsap.fromTo(
      buttonSelector(".line"),
      { left: "unset" },
      {
        width: "100%",
        duration: vars?.durationMd,
      }
    );
  });

  const underlineOnClick = (e: any) => {
    if (params?.onClick) {
      params?.onClick(e);
    }
    if (params?.icon) {
      rightOnClick(e);
    }
  };
  return (
    <button
      className={`${styles.button} ${styles.underline} ${params?.className}`}
      onMouseEnter={params?.icon ? rightOnMouseEnter : undefined}
      onMouseLeave={params?.icon ? rightOnMouseLeave : undefined}
      onClick={underlineOnClick}
    >
      {params?.text}
      {params?.icon && (
        <IconArrowNarrowRight className={`${styles.right} right`} />
      )}
      <div className={`${styles.line} line`}></div>
    </button>
  );
};

export default UnderlineButton;
