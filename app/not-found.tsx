"use client";

import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "@/components/PrimaryButton";
import navigate from "@/util/navigate";
import styles from "./not-found.module.scss";
import vars from "@/data/vars";

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  gsap.registerPlugin(useGSAP);
  // const { contextSafe } = useGSAP();
  const router = useRouter();

  useGSAP(() => {
    // gsap.from(".error_title", {
    //   autoAlpha: 0,
    //   yPercent: -100,
    //   duration: vars?.enterAnimationDuration,
    // });
    // gsap.from(".error_button", {
    //   autoAlpha: 0,
    //   yPercent: -100,
    //   duration: vars?.enterAnimationDuration,
    // });
    gsap.from(`.${styles.container}>*`, {
      autoAlpha: 0,
      yPercent: -100,
      duration: vars?.enterAnimationDuration,
      stagger: vars?.enterAnimationDuration / 2,
    });
  });

  // const onMouseEnterTitle = contextSafe(() => {
  //   gsap.fromTo(
  //     ".title_absolute",
  //     { yPercent: 0, autoAlpha: 1 },
  //     {
  //       yPercent: (i) => -70 * (i + 1),
  //       autoAlpha: (i) => 0.5 - 0.3 * i,
  //       duration: vars?.durationSm,
  //       stagger: vars?.staggerSm,
  //       overwrite: true,
  //     }
  //   );
  // });

  // const onMouseLeaveTitle = contextSafe(() => {
  //   gsap.to(".title_absolute", {
  //     yPercent: "-=50",
  //     autoAlpha: 0,
  //     duration: vars?.durationSm,
  //     stagger: -vars?.staggerSm,
  //     overwrite: true,
  //   });
  // });

  return (
    <div className={`${styles.container} main_opacity`}>
      <h2 className="title hidden error_title">
        Page <span className="extra">not found</span>
      </h2>
      <PrimaryButton
        text="Back to Home page"
        className={`hidden error_button`}
        onClick={() => navigate("/#home", router)}
      />
    </div>
  );
}
