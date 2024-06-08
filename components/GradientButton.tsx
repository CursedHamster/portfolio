"use client";

import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconCheck } from "@tabler/icons-react";
import GradientBackground from "./GradientBackground";
import styles from "./button.module.scss";
import vars from "@/data/vars";

const GradientButton = (params: {
  text?: string;
  icon?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}) => {
  const { contextSafe } = useGSAP();
  const [checkAnimation, setCheckAnimation] = useState<GSAPTimeline>();

  const checkOnClick = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    if (!checkAnimation) {
      setCheckAnimation(
        gsap
          .timeline({ yoyo: true, repeat: 1, repeatDelay: 0.1 })
          .to(buttonSelector(".check path"), {
            attr: { d: "M5 12l5 5l0 0" },
            duration: vars?.durationSm / 3,
          })
          .to(buttonSelector(".check path"), {
            attr: { d: "M5 12l0 0l0 0" },
            autoAlpha: 0,
            duration: vars?.durationSm / 2,
          })
      );
    } else {
      checkAnimation?.restart();
    }
  });

  const gradientOnClick = (e: any) => {
    if (params?.onClick) {
      params?.onClick(e);
    }
    if (params?.icon) {
      checkOnClick(e);
    }
  };
  return (
    <GradientBackground
      type="button"
      className={`${styles.button} ${styles.gradient} ${params?.className || ""}`}
      onClick={gradientOnClick}
    >
      {params?.text}
      {params?.icon && <IconCheck className={`${styles.check} check`} />}
    </GradientBackground>
  );
};

export default GradientButton;
