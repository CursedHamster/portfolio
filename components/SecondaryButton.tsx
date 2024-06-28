"use client";

import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import gsap from "gsap";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import styles from "./button.module.scss";

const SecondaryButton = (params: {
  text?: string;
  icon?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}) => {
  const { contextSafe } = useGSAP();
  const [rightAnimation, setRightAnimation] = useState<GSAPTween>();
  const rightOnMouseEnter = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
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
  });

  const rightOnClick = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    rightAnimation?.pause();
    gsap.to(buttonSelector(".right"), {
      xPercent: 200,
      autoAlpha: 0,
      duration: vars?.durationMd,
      onComplete: () => {
        gsap.fromTo(
          buttonSelector(".right"),
          { xPercent: 0, scale: 0, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: vars?.durationMd,
          }
        );
      },
    });
  });

  const secondaryOnMouseEnter = contextSafe((e: any) => {
    if (params?.icon) {
      rightOnMouseEnter(e);
    }
  });

  const secondaryOnMouseLeave = contextSafe((e: any) => {
    if (params?.icon) {
      rightOnMouseLeave(e);
    }
  });

  const secondaryOnClick = (e: any) => {
    if (params?.onClick) {
      params?.onClick(e);
    }
    if (params?.icon) {
      rightOnClick(e);
    }
  };
  return (
    <button
      className={`${styles.button} ${styles.secondary} ${params?.className}`}
      onMouseEnter={isMobile ? undefined : secondaryOnMouseEnter}
      onMouseLeave={isMobile ? undefined : secondaryOnMouseLeave}
      onClick={secondaryOnClick}
    >
      {params?.text}
      {params?.icon && (
        <IconArrowNarrowRight className={`${styles.right} right`} />
      )}
    </button>
  );
};

export default SecondaryButton;
