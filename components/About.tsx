"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
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
import Roles from "./about/Roles";
import Interests from "./about/Interests";
import GradientBackground from "./GradientBackground";
import styles from "./about.module.scss";
import horizontalLoop from "../util/horizontalLoop";
import data from "@/data/data";
import vars from "@/data/vars";
import styleVars from "@/app/_vars.module.scss";

const About = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

  const { contextSafe } = useGSAP();
  const info = data?.about;

  const aboutSection = useRef(null);
  const [interests, setInterests] = useState(info?.interests);
  const skillsContainer = useRef<any>(null);
  const [skillsTimelineTop, setSkillsTimelineTop] = useState<GSAPTimeline>();
  const [skillsTimelineBottom, setSkillsTimelineBottom] =
    useState<GSAPTimeline>();

  useGSAP(() => {
    gsap.from(".about_grid>*", {
      y: vars?.offsetMd,
      autoAlpha: 0,
      duration: vars?.enterAnimationDuration,
      stagger: vars?.enterAnimationDuration / 5,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none none none",
      },
    });
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
  //   if (rolesTimeline?.paused()) {
  //     rolesTimeline?.play();
  //   }
  // }, [rolesTimeline]);

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

  useEffect(() => {
    // if (!interestsTimeline?.paused()) {
    //   interestsTimeline
    //     ?.getById("interests_tl")
    //     ?.eventCallback("onComplete", updateInterests);
    // }
    console.log("interests", interests)
  }, [interests]);

  return (
    <>
      <section
        id="about"
        className={`${styles.about_container} ${styles.grid} about_grid main_opacity`}
        ref={aboutSection}
      >
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
          <Roles roles={info?.roles} />
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
          <Interests interests={interests} setInterests={setInterests} />
        </div>
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
    </>
  );
};

export default About;
