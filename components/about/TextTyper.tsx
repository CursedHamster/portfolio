"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import vars from "@/data/vars";

const TextTyper = (props: { titles: string[]; className: string }) => {
  gsap.registerPlugin(useGSAP, TextPlugin);

  useGSAP(() => {
    const descriptionTimeline = gsap.timeline({ paused: true, repeat: -1 });
    const descriptionTimelineDuration = vars?.durationLg;
    descriptionTimeline?.to(
      `.${props?.className}`,
      {
        text: {
          value: props?.titles[0],
        },
        duration: descriptionTimelineDuration,
      },
      `${vars?.durationSm}`
    );
    props?.titles?.forEach((title, i) => {
      if (i !== 0) {
        descriptionTimeline?.to(
          `.${props?.className}`,
          {
            text: { value: title },
            duration: descriptionTimelineDuration,
          },
          `>+=${vars?.durationSm}`
        );
      }
      descriptionTimeline?.to(
        `.${props?.className}`,
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

  return <span className={props?.className}></span>;
};

export default TextTyper;
