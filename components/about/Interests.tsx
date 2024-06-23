"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import styles from "./interests.module.scss";
import data from "@/data/data";
import vars from "@/data/vars";
import styleVars from "@/app/_vars.module.scss";

interface Interest {
  name: string;
  icon: JSX.Element;
}

const Interests = (props: {
  interests: Interest[];
  setInterests: Function;
  className?: string;
}) => {
  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP();
  const [interests, setInterests] = [props?.interests, props?.setInterests];
  const [interestsTimeline, setInterestsTimeline] = useState<GSAPTimeline>();

  useGSAP(() => {
    setInterestsTimeline(getInterestsTimeline());
  });

  const interestsRight = () => {
    const newInterests = [...interests];
    const lastEl = newInterests?.pop();
    if (lastEl) {
      newInterests?.unshift(lastEl);
      setInterests(newInterests);
    }
  };

  const interestsLeft = () => {
    const newInterests = [...interests];
    const firstEl = newInterests?.shift();
    if (firstEl) {
      newInterests?.push(firstEl);
      setInterests(newInterests);
    }
  };

  const interestsRightAnimate = contextSafe((e?: any) => {
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

  const interestsLeftAnimate = contextSafe((e?: any) => {
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
          onComplete: interestsLeft,
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

  const interestsMoveRight = (isRight: boolean) => {
    if (!interestsTimeline?.paused()) {
      interestsTimeline?.pause();
    }
    if (isRight) {
      interestsRightAnimate();
    } else {
      interestsLeftAnimate();
    }
  };

  const updateInterests = contextSafe(() => {
    gsap.set(".interest>svg", {
      xPercent: -100,
      scale: 0.8,
      autoAlpha: 0,
    });
    interestsRight();
  });

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
          id: "interests_auto",
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
    gsap.getById("interests_auto").eventCallback("onComplete", updateInterests);
  }, [interests]);

  return (
    <div className={styles.interests}>
      {interests?.length >= 3 && (
        <>
          <div className={`${styles.interest} interest`}>
            {interests[0]?.icon}
          </div>
          <div className={styles.active}>
            <IconCaretLeftFilled
              className={`${styles.arrow} ${styles.left}`}
              onClick={() => interestsMoveRight(false)}
            />
            <div className={`${styles.interest} interest`}>
              {interests[1]?.icon}
            </div>
            <IconCaretRightFilled
              className={`${styles.arrow} ${styles.right}`}
              onClick={() => interestsMoveRight(true)}
            />
          </div>
          <div className={`${styles.interest} interest`}>
            {interests[2]?.icon}
          </div>
        </>
      )}
    </div>
  );
};

export default Interests;
