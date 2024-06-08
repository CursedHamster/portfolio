"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  IconHeartFilled,
  IconNorthStar,
  // IconBrandGithubFilled,
  // IconMailFilled,
  // IconBrandLinkedin,
  IconMouseFilled,
} from "@tabler/icons-react";
import PrimaryButton from "./PrimaryButton";
import UnderlineButton from "./UnderlineButton";
import IconLink from "./IconLink";
import Tag from "./Tag";
import styles from "./hero.module.scss";
import styleVars from "@/app/_vars.module.scss";
import data from "@/data/data";
import vars from "@/data/vars";

const Hero = () => {
  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    gsap
      .timeline()
      .from(".hero_tag", {
        xPercent: -50,
        y: -vars?.offsetSm,
        autoAlpha: 0,
        duration: vars?.enterAnimationDuration,
      })
      .from(
        ".hero_title",
        {
          xPercent: -50,
          y: -vars?.offsetSm,
          autoAlpha: 0,
          duration: vars?.enterAnimationDuration,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      )
      .from(
        ".hero_subtitle",
        {
          xPercent: -50,
          y: -vars?.offsetSm,
          autoAlpha: 0,
          duration: vars?.enterAnimationDuration,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      )
      .from(
        ".hero_buttons",
        {
          autoAlpha: 0,
          duration: vars?.enterAnimationDuration,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      )
      .from(
        ".hero_buttons>*",
        {
          xPercent: -50,
          y: -vars?.offsetSm,
          duration: vars?.enterAnimationDuration,
          stagger: vars?.enterAnimationDuration / 5,
        },
        "<"
      )
      .from(
        ".figure",
        {
          yPercent: -50,
          autoAlpha: 0,
          duration: vars?.enterAnimationDuration,
        },
        `<`
      )
      .from(
        ".hero_socials",
        {
          autoAlpha: 0,
          duration: vars?.enterAnimationDuration,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      )
      .from(
        ".hero_socials>*",
        {
          yPercent: -50,
          autoAlpha: 0,
          duration: vars?.enterAnimationDuration,
          stagger: vars?.enterAnimationDuration / 5,
        },
        "<"
      )
      .from(
        ".hero_scroll_down",
        {
          y: vars?.offsetSm,
          autoAlpha: 0,
          duration: vars?.enterAnimationDuration,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      );
    // gsap.to(".mouse", {
    //   y: -vars?.offsetSm,
    //   autoAlpha: 0,
    //   duration: vars?.enterAnimationDuration,
    //   repeat: -1,
    // });
  });

  const animationOnMouseEnter = contextSafe(() => {
    gsap.to(".petal_1", { scale: 1, duration: vars?.durationMd });
    gsap.to(".circle_1", {
      scale: 0.5,
      autoAlpha: 0,
      duration: vars?.durationMd,
    });
    gsap.to(".petal_2", { scale: 0.7, duration: vars?.durationMd });
    gsap.to(".circle_2", {
      scale: 1,
      autoAlpha: 1,
      duration: vars?.durationMd,
    });
    gsap.to(".like", { scale: 0.9, duration: vars?.durationMd });
    // gsap.to(".like_ring", { scale: 1.4, duration: vars?.durationMd });
  });

  const animationOnMouseLeave = contextSafe(() => {
    gsap.to(".petal_1", { scale: 0.7, duration: vars?.durationMd });
    gsap.to(".circle_1", {
      scale: 1,
      autoAlpha: 1,
      duration: vars?.durationMd,
    });
    gsap.to(".petal_2", { scale: 1, duration: vars?.durationMd });
    gsap.to(".circle_2", {
      scale: 0.5,
      autoAlpha: 0,
      duration: vars?.durationMd,
    });
    gsap.to(".like", { scale: 1, duration: vars?.durationMd });
    // gsap.to(".like_ring", { scale: 1.5, duration: vars?.durationMd });
  });

  return (
    <main id="home" className={`${styles.container} main_opacity`}>
      <div className={styles.text}>
        <Tag
          text="Available"
          color="green"
          className="hidden hero_tag"
          hasIcon
        />
        <h1 className={`${styles.title} title hidden hero_title`}>
          Victoriia Harniuk
        </h1>
        <div className={`${styles.subtitle_container} hidden hero_subtitle`}>
          <IconNorthStar />
          <h3 className={styles.subtitle}>Web Developer</h3>
        </div>
        <div className={`${styles.buttons} hidden hero_buttons`}>
          <PrimaryButton text="Contact me" />
          <UnderlineButton text="See my work" icon={true} />
          {/* <Button
            content="See my work"
            buttonStyle="underline"
            buttonAnimation="right"
          /> */}
        </div>
      </div>
      <div
        className={`${styles.figure} hidden figure`}
        onMouseEnter={animationOnMouseEnter}
        onMouseLeave={animationOnMouseLeave}
      >
        <div className={`${styles.petal} ${styles.petal_t_l} petal_1`}></div>
        <div className={`${styles.petal} ${styles.petal_t_r} petal_2`}></div>
        <div className={`${styles.petal} ${styles.petal_b_l} petal_2`}></div>
        <div className={`${styles.petal} ${styles.petal_b_r} petal_1`}></div>
        <div className={`${styles.circle} ${styles.circle_t_l} circle_1`}></div>
        <div className={`${styles.circle} ${styles.circle_b_r} circle_1`}></div>
        <div className={`${styles.circle} ${styles.circle_b_l} circle_2`}></div>
        <div className={`${styles.circle} ${styles.circle_t_r} circle_2`}></div>
        <div className={styles.like}>
          <div className={`${styles.like_relative}`}>
            {/* <svg width="0" height="0" className={styles.svg_gradient}>
              <linearGradient
                id="pink_gradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop stopColor={styleVars.pinkAccentColor} offset="0%" />
                <stop stopColor={styleVars.darkPinkAccentColor} offset="100%" />
              </linearGradient>
            </svg> */}
            <IconHeartFilled
              // fill="url(#pink_gradient)"
              className="like"
            />
            <div className={styles.like_shadow}></div>
            {/* <div className={`${styles.like_ring} like_ring`}></div> */}
          </div>
        </div>
      </div>
      <div className={styles.right_panel}>
        <div className={`${styles.socials} hidden hero_socials`}>
          {data?.socials?.map((social, i) => (
            <IconLink
              key={`hero_socials_${i + 1}`}
              icon={social?.icon}
              link={social?.link}
            />
          ))}
          {/* <a href="#" className={styles.social}>
            <IconBrandGithubFilled />
          </a>
          <a href="#" className={styles.social}>
            <IconMailFilled />
          </a>
          <a href="#" className={styles.social}>
            <IconBrandLinkedin />
          </a> */}
        </div>
        <div className={`${styles.scroll_down} hidden hero_scroll_down`}>
          <div className={styles.scroll_icon}>
            <IconMouseFilled />
            {/* <IconMouseFilled className={`${styles.mouse} mouse`} /> */}
          </div>
          <p>Scroll to explore</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
