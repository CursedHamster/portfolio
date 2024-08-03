"use client";

import data from "@/data/data";
import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import {
  IconAffiliate,
  IconArrowNarrowRight,
  IconAsterisk,
  IconBrandSpotify,
  IconLoader,
  IconSchool,
  IconSparkles,
  IconWorld,
} from "@tabler/icons-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import styles from "./about.module.scss";
import Interests from "./about/Interests";
import Roles from "./about/Roles";
import Skills from "./about/Skills";
import TextTyper from "./about/TextTyper";

const About = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const info = data?.about;

  const aboutSection = useRef(null);
  const [interests, setInterests] = useState(info?.interests);

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
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <>
      <section
        id="about"
        className={`${styles.about_container} ${styles.grid} about_grid main_opacity`}
        ref={aboutSection}
      >
        <div
          className={`${styles.title_container} ${styles.grid_element} ${styles.border} hidden title_container`}
        >
          <h2>ABOUT</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.title_icon} ${styles.title_icon_1}`}
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M14.792 17.063c0 .337 .057 .618 .057 .9c0 1.8 -1.238 3.037 -2.982 3.037c-1.8 0 -2.98 -1.238 -2.98 -3.206v-.731c-.957 .675 -1.576 .9 -2.42 .9c-1.518 0 -2.925 -1.463 -2.925 -3.094c0 -1.181 .844 -2.194 2.082 -2.756l.28 -.113c-1.574 -.787 -2.362 -1.688 -2.362 -2.925c0 -1.687 1.294 -3.094 2.925 -3.094c.675 0 1.52 .338 2.138 .788l.281 .112c0 -.337 -.056 -.619 -.056 -.844c0 -1.8 1.237 -3.037 2.98 -3.037c1.8 0 2.981 1.237 2.981 3.206v.394l-.056 .281c.956 -.675 1.575 -.9 2.419 -.9c1.519 0 2.925 1.463 2.925 3.094c0 1.181 -.844 2.194 -2.081 2.756l-.282 .169c1.575 .787 2.363 1.688 2.363 2.925c0 1.688 -1.294 3.094 -2.925 3.094c-.675 0 -1.575 -.281 -2.138 -.788l-.225 -.169z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.title_icon} ${styles.title_icon_2}`}
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M14.792 17.063c0 .337 .057 .618 .057 .9c0 1.8 -1.238 3.037 -2.982 3.037c-1.8 0 -2.98 -1.238 -2.98 -3.206v-.731c-.957 .675 -1.576 .9 -2.42 .9c-1.518 0 -2.925 -1.463 -2.925 -3.094c0 -1.181 .844 -2.194 2.082 -2.756l.28 -.113c-1.574 -.787 -2.362 -1.688 -2.362 -2.925c0 -1.687 1.294 -3.094 2.925 -3.094c.675 0 1.52 .338 2.138 .788l.281 .112c0 -.337 -.056 -.619 -.056 -.844c0 -1.8 1.237 -3.037 2.98 -3.037c1.8 0 2.981 1.237 2.981 3.206v.394l-.056 .281c.956 -.675 1.575 -.9 2.419 -.9c1.519 0 2.925 1.463 2.925 3.094c0 1.181 -.844 2.194 -2.081 2.756l-.282 .169c1.575 .787 2.363 1.688 2.363 2.925c0 1.688 -1.294 3.094 -2.925 3.094c-.675 0 -1.575 -.281 -2.138 -.788l-.225 -.169z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className={styles.gradient_circle}></div>
          <div className={styles.title_container_copy}>
            <h2>ABOUT</h2>
          </div>
        </div>
        <div
          className={`${styles.description_container} ${styles.grid_element} ${styles.border} hidden description_container`}
        >
          <h3 className={`${styles.grid_title}`}>
            <TextTyper
              titles={info?.description?.titles}
              className="description_title"
            />
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
          <Skills skills={info?.skills} />
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
                target="_blank"
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
