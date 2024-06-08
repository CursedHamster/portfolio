"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import TextPlugin from "gsap/TextPlugin";
import {
  IconWorld,
  IconSchool,
  IconAsterisk,
  IconArrowNarrowRight,
  IconBrandSpotify,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconSparkles,
  IconAffiliate,
  IconLoader,
} from "@tabler/icons-react";
import GradientBackground from "./GradientBackground";
import styles from "./about.module.scss";
import horizontalLoop from "../util/horizontalLoop";
import data from "@/data/data";
import vars from "@/data/vars";
import styleVars from "@/app/_vars.module.scss";

const About = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Flip, TextPlugin);

  const { contextSafe } = useGSAP();
  const info = data?.about;

  // const [setXY, setSetXY] = useState<(e: any) => {}>();
  const aboutSection = useRef(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  // const cursorLang = useRef(null);
  // const [cursorFlag, setCursorFlag] = useState<any>(null);
  // const interestsTitleDefault = info?.interests[1];
  const [interests, setInterests] = useState(info?.interests);
  const skillsContainer = useRef<any>(null);
  const [rolesTimeline, setRolesTimeline] = useState<GSAPTimeline>();
  const [skillsTimelineTop, setSkillsTimelineTop] = useState<GSAPTimeline>();
  const [skillsTimelineBottom, setSkillsTimelineBottom] =
    useState<GSAPTimeline>();
  const [interestsTimeline, setInterestsTimeline] = useState<GSAPTimeline>();

  useGSAP(() => {
    // gsap.set(cursorLang.current, { autoAlpha: 0 });
    // const xTo = gsap.quickTo(cursorLang.current, "x", {
    //   duration: vars?.durationSm,
    //   ease: "power3",
    // });
    // const yTo = gsap.quickTo(cursorLang.current, "y", {
    //   duration: vars?.durationSm,
    //   ease: "power3",
    // });
    // const setXY = (e: any) => {
    //   xTo(e?.clientX);
    //   yTo(e?.clientY);
    // };
    gsap.from(".about_grid>*", {
      yPercent: vars?.offsetSm,
      autoAlpha: 0,
      duration: vars?.enterAnimationDuration,
      stagger: vars?.staggerSm,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none none",
      },
    });
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: "#about",
    //       start: "top bottom",
    //       end: "bottom bottom",
    //       toggleActions: "restart none none reverse",
    //     },
    //   })
    //   .from(
    //     ".banner",
    //     {
    //       x: -20,
    //       autoAlpha: 0,
    //       duration: enterAnimationDuration,
    //     },
    //     0
    //   )
    //   .from(
    //     ".title_container",
    //     {
    //       y: -20,
    //       autoAlpha: 0,
    //       duration: enterAnimationDuration,
    //     },
    //     "<+=0.1"
    //   )
    //   .from(
    //     ".description_container",
    //     {
    //       x: -20,
    //       autoAlpha: 0,
    //       duration: enterAnimationDuration,
    //     },
    //     "<+=0.1"
    //   )
    //   .from(
    //     ".education",
    //     {
    //       y: -20,
    //       autoAlpha: 0,
    //       duration: enterAnimationDuration,
    //     },
    //     "<+=0.1"
    //   )
    //   .from(
    //     ".languages",
    //     {
    //       x: -20,
    //       autoAlpha: 0,
    //       duration: enterAnimationDuration,
    //     },
    //     "<+=0.1"
    //   )
    //   .from(
    //     ".interests_container",
    //     {
    //       x: -20,
    //       autoAlpha: 0,
    //       duration: enterAnimationDuration,
    //     },
    //     "<+=0.1"
    //   )
    //   .from(
    //     ".skills_container",
    //     {
    //       autoAlpha: 0,
    //       duration: enterAnimationDuration,
    //     },
    //     "<+=0.1"
    //   );
    // window.addEventListener("mousemove", setXY);
    // return () => window.removeEventListener("mousemove", setXY);
    const descriptionTimeline = gsap.timeline({ paused: true, repeat: -1 });
    const descriptionTimelineDuration = vars?.durationLg;
    descriptionTimeline?.to(
      ".description_title",
      {
        text: {
          value: info?.description?.titles[0],
        },
        duration: descriptionTimelineDuration,
      },
      `${vars?.durationSm}`
    );
    info?.description?.titles?.forEach((title, i) => {
      if (i !== 0) {
        descriptionTimeline?.to(
          ".description_title",
          {
            text: { value: title },
            duration: descriptionTimelineDuration,
          },
          `>+=${vars?.durationSm}`
        );
      }
      descriptionTimeline?.to(
        ".description_title",
        {
          text: {
            value: "",
            rtl: true,
          },
          duration: descriptionTimelineDuration,
        },
        `>=+${vars?.durationLg * 2}`
      );
    });
    descriptionTimeline?.play();
    setRolesHeight();
    setRolesTimeline(getRolesTimeline());
    setInterestsTimeline(getInterestsTimeline());
    window.addEventListener("resize", setRolesHeight);
    return () => window.removeEventListener("resize", setRolesHeight);
  });

  useGSAP(
    () => {
      setSkillsTimelineTop(
        horizontalLoop(".skills_1>*", {
          speed: vars?.durationSm,
          repeat: -1,
          paused: true,
          // paddingRight: styleVars?.paddingSm,
        })
      );
      setSkillsTimelineBottom(
        horizontalLoop(".skills_2>*", {
          speed: vars?.durationXs,
          repeat: -1,
          paused: true,
          // paddingRight: styleVars?.paddingSm,
        })
      );
    },
    { scope: skillsContainer }
  );

  // useEffect(() => {
  //   if (setXY) {
  //     window.addEventListener("mousemove", setXY);
  //   }
  //   return () => {
  //     if (setXY) {
  //       window.removeEventListener("mousemove", setXY);
  //     }
  //   };
  // }, [setXY]);

  // const changeOrder = contextSafe(() => {
  //   const roles = document.getElementsByClassName(styles.role);
  //   let state = Flip.getState(roles);

  //   Array.from(roles)?.forEach((role) => {
  //     if (role?.classList?.contains(styles.top)) {
  //       role?.classList?.remove(styles.top);
  //       role?.classList?.add(styles.bottom);
  //     } else if (role?.classList?.contains(styles.active)) {
  //       role?.classList?.remove(styles.active);
  //       role?.classList?.add(styles.top);
  //       gsap.to(role, {
  //         scale: 1,
  //         autoAlpha: 0.2,
  //         duration: 0.5,
  //       });
  //     } else if (role?.classList?.contains(styles.bottom)) {
  //       role?.classList?.remove(styles.bottom);
  //       role?.classList?.add(styles.active);
  //       gsap.to(role, {
  //         scale: 1.1,
  //         autoAlpha: 1,
  //         duration: 0.5,
  //       });
  //     }
  //   });
  //   Flip.from(state, {
  //     duration: 0.5,
  //     ease: "power1.inOut",
  //     absolute: true,
  //   });
  // });

  function setRolesHeight() {
    const roles = document.getElementsByClassName(styles.role);
    let biggestRoleHeight = 0;
    for (let i = 0; i < roles?.length; i++) {
      const roleHeight = roles[i]?.clientHeight;
      if (roleHeight > biggestRoleHeight) {
        biggestRoleHeight = roleHeight;
      }
    }
    Array.from(roles).forEach((role: any) => {
      if (role?.style && role?.clientHeight !== biggestRoleHeight) {
        role.style.height = biggestRoleHeight + "px";
      }
    });
    const containerHeight = biggestRoleHeight * 2.2;
    const rolesDiv = rolesRef?.current;
    if (rolesDiv) {
      rolesDiv.style.height = containerHeight + "px";
    }
  }

  function isRoleUp(
    activeIndex: number,
    newActiveIndex: number,
    arrayLength: number
  ): boolean {
    if (activeIndex - 1 < 0 && newActiveIndex + 1 >= arrayLength) {
      return true;
    }
    if (activeIndex - 1 === newActiveIndex) {
      return true;
    }
    return false;
  }

  const changeOrder = contextSafe((e: any) => {
    if (!rolesTimeline?.paused()) {
      rolesTimeline?.pause();
    }
    const currentElement = e?.currentTarget;
    const roles = document.getElementsByClassName(styles.role);
    let activeIndex = 0;
    let newActiveIndex = 0;
    let inactiveIndex = 0;
    for (let i = 0; i < roles?.length; i++) {
      if (roles[i] === currentElement) {
        newActiveIndex = i;
      }
      if (roles[i]?.classList?.contains("active")) {
        activeIndex = i;
      }
    }
    if (newActiveIndex === activeIndex) {
    } else {
      for (let i = 0; i < roles?.length; i++) {
        if (i !== activeIndex && i !== newActiveIndex) {
          inactiveIndex = i;
        }
      }
      roles[activeIndex].classList.remove("active");
      roles[newActiveIndex].classList.add("active");

      const isUp = isRoleUp(activeIndex, newActiveIndex, roles?.length);

      const activeRole = roles[newActiveIndex];
      const topRole = isUp ? roles[activeIndex] : roles[inactiveIndex];
      const bottomRole = isUp ? roles[inactiveIndex] : roles[activeIndex];

      gsap.to(bottomRole, {
        y: "120%",
        z: -50,
        autoAlpha: 0.2,
        scale: 1,
        duration: vars?.durationMd,
      });
      gsap.to(activeRole, {
        y: "60%",
        z: 0,
        autoAlpha: 1,
        scale: 1.1,
        duration: vars?.durationMd,
      });
      gsap.to(topRole, {
        y: "0%",
        z: -50,
        autoAlpha: 0.2,
        scale: 1,
        duration: vars?.durationMd,
      });
    }
  });

  const getRolesTimeline = contextSafe(() => {
    const rolesTl = gsap.timeline({ paused: true, repeat: -1 });
    const roles = document.getElementsByClassName(styles.role);
    const delayDuration = vars?.durationLg * 2;
    rolesTl
      .to(
        roles[0],
        {
          y: "120%",
          z: -50,
          autoAlpha: 0.2,
          scale: 1,
          duration: vars?.durationMd,
        },
        `${delayDuration}`
      )
      .to(
        roles[1],
        {
          y: "60%",
          z: 0,
          autoAlpha: 1,
          scale: 1.1,
          duration: vars?.durationMd,
        },
        "<"
      )
      .to(
        roles[2],
        {
          y: "0%",
          z: -50,
          autoAlpha: 0.2,
          scale: 1,
          duration: vars?.durationMd,
        },
        "<"
      );
    rolesTl
      .to(
        roles[0],
        {
          y: "0%",
          z: -50,
          autoAlpha: 0.2,
          scale: 1,
          duration: vars?.durationMd,
        },
        `>+=${delayDuration}`
      )
      .to(
        roles[1],
        {
          y: "120%",
          z: -50,
          autoAlpha: 0.2,
          scale: 1,
          duration: vars?.durationMd,
        },
        "<"
      )
      .to(
        roles[2],
        {
          y: "60%",
          z: 0,
          autoAlpha: 1,
          scale: 1.1,
          duration: vars?.durationMd,
        },
        "<"
      );
    rolesTl
      .to(
        roles[0],
        {
          y: "60%",
          z: 0,
          autoAlpha: 1,
          scale: 1.1,
          duration: vars?.durationMd,
        },
        `>+=${delayDuration}`
      )
      .to(
        roles[1],
        {
          y: "0%",
          z: -50,
          autoAlpha: 0.2,
          scale: 1,
          duration: vars?.durationMd,
        },
        "<"
      )
      .to(
        roles[2],
        {
          y: "120%",
          z: -50,
          autoAlpha: 0.2,
          scale: 1,
          duration: vars?.durationMd,
        },
        "<"
      );
    return rolesTl;
  });

  useEffect(() => {
    if (rolesTimeline?.paused()) {
      rolesTimeline?.play();
    }
  }, [rolesTimeline]);

  const skillsMouseEnter = contextSafe(() => {
    if (skillsTimelineTop) {
      gsap.to(skillsTimelineTop, { timeScale: 0, overwrite: true });
    }
    if (skillsTimelineBottom) {
      gsap.to(skillsTimelineBottom, { timeScale: 0, overwrite: true });
    }
  });

  const skillsMouseLeave = contextSafe(() => {
    if (skillsTimelineTop) {
      gsap.to(skillsTimelineTop, { timeScale: 1, overwrite: true });
    }
    if (skillsTimelineBottom) {
      gsap.to(skillsTimelineBottom, { timeScale: 1, overwrite: true });
    }
  });

  useEffect(() => {
    if (skillsTimelineTop?.paused()) {
      skillsTimelineTop?.play();
    }
  }, [skillsTimelineTop]);
  useEffect(() => {
    if (skillsTimelineBottom?.paused()) {
      skillsTimelineBottom?.play();
    }
  }, [skillsTimelineBottom]);

  const interestsRight = contextSafe((e?: any) => {
    if (!interestsTimeline?.paused()) {
      interestsTimeline?.pause();
    }
    gsap
      .timeline()
      .fromTo(
        ".interest>svg",
        { xPercent: 0, scale: 1, autoAlpha: 1 },
        {
          xPercent: 100,
          scale: 0.8,
          autoAlpha: 0,
          duration: vars?.durationSm,
          onComplete: () => {
            const newInterests = [...interests];
            const lastEl = newInterests?.pop();
            if (lastEl) {
              newInterests?.unshift(lastEl);
              setInterests(newInterests);
            }
          },
        }
      )
      .fromTo(
        ".interest>svg",
        { xPercent: -100, scale: 0.8, autoAlpha: 0 },
        {
          xPercent: 0,
          scale: 1,
          autoAlpha: 1,
          duration: vars?.durationSm,
        },
        ">"
      );
  });

  const interestsLeft = contextSafe((e?: any) => {
    if (!interestsTimeline?.paused()) {
      interestsTimeline?.pause();
    }
    gsap
      .timeline()
      .fromTo(
        ".interest>svg",
        { xPercent: 0, scale: 1, autoAlpha: 1 },
        {
          xPercent: -100,
          scale: 0.8,
          autoAlpha: 0,
          duration: vars?.durationSm,
          onComplete: () => {
            const newInterests = [...interests];
            const firstEl = newInterests?.shift();
            if (firstEl) {
              newInterests?.push(firstEl);
              setInterests(newInterests);
            }
          },
        }
      )
      .fromTo(
        ".interest>svg",
        { xPercent: 100, scale: 0.8, autoAlpha: 0 },
        {
          xPercent: 0,
          scale: 1,
          autoAlpha: 1,
          duration: vars?.durationSm,
        },
        ">"
      );
  });

  const updateInterests = contextSafe(() => {
    gsap.set(".interest>svg", {
      xPercent: -100,
      scale: 0.8,
      autoAlpha: 0,
    });
    const newInterests = [...interests];
    const lastEl = newInterests?.pop();
    if (lastEl) {
      newInterests?.unshift(lastEl);
      setInterests(newInterests);
    }
  })

  const getInterestsTimeline = contextSafe(() => {
    const delayDuration = vars?.durationLg * 3;
    const interestsTl = gsap.timeline({
      paused: true,
      repeat: -1,
      repeatDelay: delayDuration,
    });
    interestsTl
      ?.fromTo(
        ".interest>svg",
        { xPercent: 0, scale: 1, autoAlpha: 1 },
        {
          id: "meow",
          xPercent: 100,
          scale: 0.8,
          autoAlpha: 0,
          duration: vars?.durationSm,
          onComplete: updateInterests,
        },
        0
      )
      ?.to(
        ".interest>svg",
        {
          xPercent: 0,
          scale: 1,
          autoAlpha: 1,
          duration: vars?.durationSm,
        },
        ">"
      );
    return interestsTl;
  });

  useEffect(() => {
    if (interestsTimeline?.paused()) {
      interestsTimeline?.play();
    }
  }, [interestsTimeline]);

  useEffect(() => {
    if (!interestsTimeline?.paused()) {
      interestsTimeline?.getById("meow")?.eventCallback("onComplete", updateInterests)
    }
  }, [interests]);

  // const languagesMouseEnter = contextSafe((lang: string) => {
  //   setCursorFlag(lang);
  //   gsap.to(cursorLang?.current, {
  //     autoAlpha: 1,
  //     duration: vars?.durationSm,
  //   });
  // });

  // const languagesMouseLeave = contextSafe(() => {
  //   gsap.to(cursorLang?.current, {
  //     autoAlpha: 0,
  //     duration: vars?.durationSm,
  //   });
  // });

  return (
    <>
      <section
        id="about"
        className={`${styles.about_container} ${styles.grid} about_grid main_opacity`}
        ref={aboutSection}
      >
        {/* <GradientBackground
          className={`${styles.banner} ${styles.grid_element} hidden banner`}
        >
          <h3>FRONT-END</h3>
          <h3>WEB DESIGN</h3>
          <h3>BACK-END</h3>
        </GradientBackground> */}
        <GradientBackground
          className={`${styles.title_container} ${styles.grid_element} hidden title_container`}
        >
          <h2>ABOUT</h2>
        </GradientBackground>
        <div
          className={`${styles.description_container} ${styles.grid_element} ${styles.border} hidden description_container`}
        >
          <h3 className={`${styles.grid_title}`}>
            <span className="description_title"></span>
            {info?.description?.emoji}
          </h3>
          <p>{info?.description?.text}</p>
        </div>
        <div
          className={`${styles.languages_container} ${styles.grid_element} hidden languages`}
        >
          <div className={`${styles.language_container} ${styles.icon}`}>
            <IconWorld />
          </div>
          {info?.languages?.map((language, i) => (
            <div
              className={`${styles.language_container} ${styles.language}`}
              key={`about_language_${i + 1}`}
            >
              {language?.name}
              <div className={`${styles.background_flags}`}>
                <span
                  className={`${styles.background_flag} ${styles.background_flag_1}`}
                >
                  {language?.flag}
                </span>
                <span
                  className={`${styles.background_flag} ${styles.background_flag_2}`}
                >
                  {language?.flag}
                </span>
                <span
                  className={`${styles.background_flag} ${styles.background_flag_3}`}
                >
                  {language?.flag}
                </span>
                <span
                  className={`${styles.background_flag} ${styles.background_flag_4}`}
                >
                  {language?.flag}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${styles.roles_container} ${styles.grid_element} ${styles.border} hidden roles`}
        >
          <div className={styles.category}>
            <IconLoader />
            <p>Roles</p>
          </div>
          <h3 className={`${styles.grid_title}`}>Who I am</h3>
          <div className={`${styles.roles}`} ref={rolesRef}>
            {/* <div className={styles.active_container}>
              <div className={`${styles.role} ${styles.active}`}>
                {info?.roles[0]?.icon}
                {info?.roles[0]?.title}
              </div>
            </div> */}
            {info?.roles?.map((role, i) => (
              <div
                className={`${styles.role} ${styles[`role_${i + 1}`]} ${
                  i === 0 ? "active" : ""
                }`}
                key={`about_role_${i + 1}`}
                onClick={changeOrder}
              >
                {info?.roles[i]?.icon}
                {info?.roles[i]?.title}
              </div>
            ))}
            {/* <div className={`${styles.role} ${styles.active}`}>
              {info?.roles[0]?.icon}
              {info?.roles[0]?.title}
            </div>
            <div className={`${styles.role} ${styles.top}`}>
              {info?.roles[1]?.icon}
              {info?.roles[1]?.title}
            </div>
            <div className={`${styles.role} ${styles.bottom}`}>
              {info?.roles[2]?.icon}
              {info?.roles[2]?.title}
            </div> */}
          </div>
        </div>
        <div
          className={`${styles.skills_container} ${styles.grid_element} ${styles.border} hidden skills_container`}
        >
          <div className={styles.category}>
            <IconAsterisk />
            <p>Skills</p>
          </div>
          <h3 className={`${styles.grid_title}`}>What I can do</h3>
          <div
            className={styles.skills_group}
            ref={skillsContainer}
            onMouseEnter={skillsMouseEnter}
            onMouseLeave={skillsMouseLeave}
          >
            <div className={`${styles.skills} skills_1`}>
              {info?.skills
                ?.slice(0, Math.floor(info?.skills?.length / 2))
                ?.map((skill, i) => (
                  <div key={`about_skill_1_${i + 1}`}>
                    {skill?.icon}
                    {skill?.title}
                  </div>
                ))}
            </div>
            <div className={`${styles.skills} skills_2`}>
              {info?.skills
                ?.slice(Math.floor(info?.skills?.length / 2))
                ?.map((skill, i) => (
                  <div key={`about_skill_2_${i + 1}`}>
                    {skill?.icon}
                    {skill?.title}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div
          className={`${styles.socials_container} ${styles.grid_element} ${styles.border} hidden about_socials`}
        >
          <div className={styles.category}>
            <IconAffiliate />
            <p>Socials</p>
          </div>
          <div className={styles.socials}>
            {data?.socials?.map((social, i) => (
              <a
                href={social?.link}
                className={`${styles.social}`}
                key={`about_social_${i + 1}`}
              >
                <div className={`${styles.title}`}>
                  {social?.icon}
                  {social?.title}
                </div>
                <IconArrowNarrowRight />
              </a>
            ))}
          </div>
        </div>
        <div
          className={`${styles.interests_container} ${styles.grid_element} ${styles.border} hidden interests_container`}
        >
          <div className={styles.category}>
            <IconSparkles />
            <p>Interests</p>
          </div>
          <h3 className={`${styles.grid_title}`}>{interests[1]?.name}</h3>
          <div className={styles.interests}>
            {interests?.length >= 3 && (
              <>
                <div className={`${styles.interest} interest`}>
                  {interests[0]?.icon}
                </div>
                <div className={styles.active}>
                  <IconCaretLeftFilled
                    className={`${styles.arrow} ${styles.left}`}
                    onClick={interestsLeft}
                  />
                  <div className={`${styles.interest} interest`}>
                    {interests[1]?.icon}
                  </div>
                  <IconCaretRightFilled
                    className={`${styles.arrow} ${styles.right}`}
                    onClick={interestsRight}
                  />
                </div>
                <div className={`${styles.interest} interest`}>
                  {interests[2]?.icon}
                </div>
              </>
            )}
          </div>
        </div>

        {/* <div
          className={`${styles.interests_container} ${styles.grid_element} hidden interests_container`}
        >
          <h4>{interestsTitle}</h4>
          {info?.interests?.map((interest, i) => (
            <span
              key={`about_interest_${i + 1}`}
              className={`${styles.interests_emoji} ${
                styles[`interests_emoji_${i + 1}`]
              }`}
              onMouseEnter={() => setInterestsTitle(interest?.name)}
              onMouseLeave={() => setInterestsTitle(interestsTitleDefault)}
            >
              {interest?.emoji}
            </span>
          ))}
        </div> */}
        <a
          href={info?.music?.link}
          target="_blank"
          className={`${styles.music_container} ${styles.grid_element} ${styles.solid} hidden music_container`}
        >
          <IconBrandSpotify /> {info?.music?.title}
        </a>
        <div
          className={`${styles.education_container} ${styles.grid_element} ${styles.border} hidden education`}
        >
          <div className={styles.category}>
            <IconSchool />
            <p>Education</p>
          </div>
          <h3 className={`${styles.grid_title}`}>Where I have studied</h3>
          <div className={styles.education_info}>
            <h4 className={styles.university}>{info?.education?.university}</h4>
            <p className={styles.degree}>
              <span className={styles.years}>
                {info?.education?.years?.join("-")}
                {", "}
              </span>
              {info?.education?.degree}
            </p>
          </div>
          <img
            className={styles.background_image}
            src="/images/lpnu_logo.png"
            alt="Lviv Polytechnic National University logo"
          />
        </div>
      </section>
      {/* <span className={styles.cursor_lang} ref={cursorLang}>
        {cursorFlag}
      </span> */}
    </>
  );
};

export default About;
