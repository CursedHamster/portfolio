"use client";

import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconMailFilled } from "@tabler/icons-react";
import styles from "./button.module.scss";
import styleVars from "@/app/_vars.module.scss";
import vars from "@/data/vars";

const PrimaryButton = (params: {
  text?: string;
  icon?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}) => {
  const { contextSafe } = useGSAP();
  const [sendAnimation, setSendAnimation] = useState<GSAPTween>();

  const sendOnMouseEnter = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    if (!sendAnimation) {
      setSendAnimation(
        gsap.to(buttonSelector(".send"), {
          yPercent: -vars?.offsetSm,
          duration: vars?.durationMd,
          repeat: -1,
          yoyo: true,
          ease: "none",
        })
      );
    } else {
      sendAnimation?.restart();
    }
  });

  const sendOnMouseLeave = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    sendAnimation?.pause();
    gsap.to(buttonSelector(".send"), {
      yPercent: 0,
      duration: vars?.durationMd,
    });
  });

  const sendOnClick = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    sendAnimation?.pause();
    gsap.to(buttonSelector(".send"), {
      yPercent: 0,
      scale: 0,
      autoAlpha: 0,
      duration: vars?.durationMd,
      onComplete: () => {
        gsap.to(buttonSelector(".send"), {
          scale: 1,
          autoAlpha: 1,
          duration: vars?.durationMd,
        });
      },
    });
  });

  const primaryOnMouseEnter = contextSafe((e: any) => {
    gsap.to(e?.currentTarget, {
      boxShadow: styleVars?.shadowPinkSm,
      duration: vars?.durationSm,
    });
    if (params?.icon) {
      sendOnMouseEnter(e);
    }
  });

  const primaryOnMouseLeave = contextSafe((e: any) => {
    gsap.to(e?.currentTarget, {
      boxShadow: styleVars?.shadowPinkMd,
      duration: vars?.durationSm,
    });
    if (params?.icon) {
      sendOnMouseLeave(e);
    }
  });

  const primaryOnClick = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
    gsap.to(buttonSelector(".primary_background"), {
      width: "100%",
      height: "100%",
      autoAlpha: 1,
      duration: vars?.durationSm,
      onComplete: () => {
        gsap.to(buttonSelector(".primary_background"), {
          width: 0,
          height: 0,
          autoAlpha: 0,
          duration: vars?.durationSm,
        });
      },
    });
    if (params?.onClick) {
      params?.onClick(e);
    }
    if (params?.icon) {
      sendOnClick(e);
    }
  });
  return (
    <button
      className={`${styles.button} ${styles.primary} ${params?.className}`}
      onMouseEnter={primaryOnMouseEnter}
      onMouseLeave={primaryOnMouseLeave}
      onClick={primaryOnClick}
    >
      {params?.text}
      {params?.icon && <IconMailFilled className={`${styles.send} send`} />}
      <span
        className={`${styles.primary_background} primary_background`}
      ></span>
    </button>
  );
};

export default PrimaryButton;
