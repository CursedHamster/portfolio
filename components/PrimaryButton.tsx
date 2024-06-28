"use client";

import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import { IconMailFilled } from "@tabler/icons-react";
import gsap from "gsap";
import { isMobile } from "react-device-detect";
import styles from "./button.module.scss";

const PrimaryButton = (params: {
  text?: string;
  icon?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}) => {
  const { contextSafe } = useGSAP();

  const sendOnClick = contextSafe((e: any) => {
    const buttonSelector = gsap.utils.selector(e?.currentTarget);
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
    const getElement = gsap.utils.selector(e?.currentTarget);
    gsap.to(getElement(`.${styles.text_original}`), {
      yPercent: -100,
      autoAlpha: 0,
      rotateX: "70deg",
      duration: vars?.durationSm,
    });
    gsap.to(getElement(`.${styles.text_copy}`), {
      yPercent: -100,
      autoAlpha: 1,
      rotateX: "0deg",
      duration: vars?.durationSm,
    });
  });

  const primaryOnMouseLeave = contextSafe((e: any) => {
    const getElement = gsap.utils.selector(e?.currentTarget);
    gsap.to(getElement(`.${styles.text_original}`), {
      yPercent: 0,
      autoAlpha: 1,
      rotateX: "0deg",
      duration: vars?.durationSm,
    });
    gsap.to(getElement(`.${styles.text_copy}`), {
      yPercent: 100,
      autoAlpha: 0,
      rotateX: "70deg",
      duration: vars?.durationSm,
    });
  });

  const primaryOnClick = contextSafe((e: any) => {
    const el = e?.currentTarget;
    gsap.to(el, {
      scale: 0.95,
      duration: vars?.durationXs,
      onComplete: () => {
        gsap.to(el, {
          scale: 1,
          duration: vars?.durationXs,
        });
        if (params?.onClick) {
          params?.onClick(e);
        }
      },
    });
    if (params?.icon) {
      sendOnClick(e);
    }
  });
  return (
    <button
      className={`${styles.button} ${styles.primary} ${params?.className}`}
      onMouseEnter={isMobile ? undefined : primaryOnMouseEnter}
      onMouseLeave={isMobile ? undefined : primaryOnMouseLeave}
      onClick={primaryOnClick}
    >
      <span className={`${styles.text_original}`}>
        {params?.text}
        {params?.icon && <IconMailFilled className={`${styles.send} send`} />}
      </span>
      <span className={`${styles.text_copy}`}>
        {params?.text}
        {params?.icon && <IconMailFilled className={`${styles.send} send`} />}
      </span>
    </button>
  );
};

export default PrimaryButton;
