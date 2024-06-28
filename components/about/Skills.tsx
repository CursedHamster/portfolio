"use client";

import data from "@/data/data";
import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import horizontalLoop from "@/util/horizontalLoop";
import styles from "./skills.module.scss";

interface Skill {
  title: string;
  icon: JSX.Element;
}

const Skills = (props: { skills: Skill[] }) => {
  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP();

  const skillsContainer = useRef<any>(null);
  const [skillsTimelineTop, setSkillsTimelineTop] = useState<GSAPTimeline>();
  const [skillsTimelineBottom, setSkillsTimelineBottom] =
    useState<GSAPTimeline>();
  const pauseTimeline = contextSafe((timeline: GSAPTimeline) => {
    gsap.to(timeline, { timeScale: 0, overwrite: true });
  });
  const unpauseTimeline = contextSafe((timeline: GSAPTimeline) => {
    gsap.to(timeline, { timeScale: 1, overwrite: true });
  });

  useGSAP(
    () => {
      setSkillsTimelineTop(
        horizontalLoop(".skills_1>*", {
          speed: vars?.durationSm,
          repeat: -1,
          paused: true,
        })
      );
      setSkillsTimelineBottom(
        horizontalLoop(".skills_2>*", {
          speed: vars?.durationXs,
          repeat: -1,
          paused: true,
        })
      );
    },
    { scope: skillsContainer }
  );

  const skillsMouseEnter = () => {
    if (skillsTimelineTop) {
      pauseTimeline(skillsTimelineTop);
    }
    if (skillsTimelineBottom) {
      pauseTimeline(skillsTimelineBottom);
    }
  };

  const skillsMouseLeave = () => {
    if (skillsTimelineTop) {
      unpauseTimeline(skillsTimelineTop);
    }
    if (skillsTimelineBottom) {
      unpauseTimeline(skillsTimelineBottom);
    }
  };

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

  return (
    <div
      className={styles.skills_group}
      ref={skillsContainer}
      onMouseEnter={skillsMouseEnter}
      onMouseLeave={skillsMouseLeave}
    >
      <div className={`${styles.skills} skills_1`}>
        {props?.skills
          ?.slice(0, Math.floor(props?.skills?.length / 2))
          ?.map((skill, i) => (
            <div key={`about_skill_1_${i + 1}`}>
              {skill?.icon}
              {skill?.title}
            </div>
          ))}
      </div>
      <div className={`${styles.skills} skills_2`}>
        {props?.skills
          ?.slice(Math.floor(props?.skills?.length / 2))
          ?.map((skill, i) => (
            <div key={`about_skill_2_${i + 1}`}>
              {skill?.icon}
              {skill?.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
