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
  const router = useRouter();

  useGSAP(() => {
    gsap.from(`.${styles.container}>*`, {
      autoAlpha: 0,
      yPercent: -100,
      duration: vars?.enterAnimationDuration,
      stagger: vars?.enterAnimationDuration / 2,
    });
  });

  return (
    <div className={`${styles.container} main_opacity`}>
      <h2 className="title hidden">
        Page <span className="extra">not found</span>
      </h2>
      <PrimaryButton
        text="Back to Home page"
        className={`hidden`}
        onClick={() => navigate("/#home", router)}
      />
    </div>
  );
}
