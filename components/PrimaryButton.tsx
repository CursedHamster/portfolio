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
    // gsap.to(e?.currentTarget, {
    //   boxShadow: styleVars?.shadowPinkSm,
    //   duration: vars?.durationSm,
    // });
    // if (params?.icon) {
    //   sendOnMouseEnter(e);
    // }
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
    // gsap.to(e?.currentTarget, {
    //   boxShadow: styleVars?.shadowPinkMd,
    //   duration: vars?.durationSm,
    // });
    // if (params?.icon) {
    //   sendOnMouseLeave(e);
    // }
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
    const el = e?.currentTarget
    gsap.to(el, {
      scale: 0.95,
      duration: vars?.durationXs,
      onComplete: () => {
        gsap.to(el, {
          scale: 1,
          duration: vars?.durationXs,
        }
        )
        if (params?.onClick) {
          params?.onClick(e);
        }
      },
    });
    // const buttonSelector = gsap.utils.selector(e?.currentTarget);
    // gsap.to(buttonSelector(`.${styles.primary_background}`), {
    //   // width: "100%",
    //   // height: "100%",
    //   xPercent: 100,
    //   // autoAlpha: 1,
    //   duration: vars?.durationSm,
    //   stagger: vars?.durationSm / 2,
    //   onComplete: () => {
    //     gsap.to(buttonSelector(`.${styles.primary_background}`), {
    //       // width: 0,
    //       // height: 0,
    //       xPercent: 0,
    //       // autoAlpha: 0,
    //       duration: vars?.durationSm,
    //       stagger: vars?.durationSm / -2,
    //     });
    //     if (params?.onClick) {
    //       params?.onClick(e);
    //     }
    //   },
    // });
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
      <span className={`${styles.text_original}`}>
        {params?.text}
        {params?.icon && <IconMailFilled className={`${styles.send} send`} />}
      </span>
      <span className={`${styles.text_copy}`}>
        {params?.text}
        {params?.icon && <IconMailFilled className={`${styles.send} send`} />}
      </span>
      <span
        className={`${styles.primary_background} ${styles.primary_background_1}`}
      ></span>
      <span
        className={`${styles.primary_background} ${styles.primary_background_2}`}
      ></span>
      <span
        className={`${styles.primary_background} ${styles.primary_background_3}`}
      ></span>
    </button>
  );
};

export default PrimaryButton;
