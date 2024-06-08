"use client";

import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./gradientBackground.module.scss";
import styleVars from "@/app/_vars.module.scss";
import vars from "@/data/vars";

const GradientBackground = (props: any) => {
  const ComponentType = props.type ? props.type : "div";
  const { contextSafe } = useGSAP();
  const [gradientAnimation, setGradientAnimation] = useState<GSAPTimeline>();
  const gradientOnMouseEnter = contextSafe((e: any) => {
    const gradientButton = e?.currentTarget;
    if (!gradientAnimation) {
      setGradientAnimation(
        gsap
          .timeline({
            defaults: {
              repeat: -1,
              yoyo: true,
              yoyoEase: "none",
            },
          })
          .to(gradientButton, {
            backgroundImage: styleVars?.primaryGradient1,
            duration: vars?.durationLg * 5,
            ease: "none",
          })
          .to(gradientButton, {
            backgroundImage: styleVars?.primaryGradient2,
            duration: vars?.durationLg * 5,
            ease: "none",
          })
      );
    } else {
      gradientAnimation?.restart();
    }
    if (props.onMouseEnter) {
      props.onMouseEnter(e);
    }
  });

  const gradientOnMouseLeave = contextSafe((e: any) => {
    const gradientButton = e?.currentTarget;
    gradientAnimation?.pause();
    gsap.to(gradientButton, {
      backgroundImage: styleVars?.primaryGradient,
      duration: vars?.durationMd,
    });
    if (props.onMouseLeave) {
      props.onMouseLeave(e);
    }
  });
  return (
    <ComponentType
      className={`${styles.container} ${props.className}`}
      onMouseEnter={gradientOnMouseEnter}
      onMouseLeave={gradientOnMouseLeave}
      onClick={props.onClick}
    >
      {props.children}
    </ComponentType>
  );
};

export default GradientBackground;
