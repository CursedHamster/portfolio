"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import GradientBackground from "./GradientBackground";
import styles from "./draggableLetters.module.scss";

const DraggableLetters = ({
  params,
}: {
  params: {
    id: string;
    svg: { viewBox: string; text: string[] };
  };
}) => {
  gsap.registerPlugin(useGSAP, Draggable);

  const containerRef = useRef<HTMLDivElement>(null);
  const createLetterId = (index: number) =>
    `${params?.id?.toLowerCase()}_letter_${index}`;

  useGSAP(() => {
    params?.svg?.text?.forEach((path, i) => {
      Draggable.create(`#${createLetterId(i)}`, {
        type: "x,y",
        bounds: containerRef?.current,
      });
    });

    const updateDraggables = () =>
      params?.svg?.text?.forEach((path, i) => {
        Draggable.get(`#${createLetterId(i)}`)?.update(true);
      });

    window.addEventListener("resize", updateDraggables);
    return () => window.removeEventListener("resize", updateDraggables);
  });

  return (
    <GradientBackground className={styles.drag_container}>
      <div className={styles.drag_frame} ref={containerRef}>
        <svg
          viewBox={params?.svg?.viewBox}
          xmlns="http://www.w3.org/2000/svg"
          className={styles.drag_text}
        >
          {params?.svg?.text?.map((svgLetter, i) => (
            <path
              id={createLetterId(i)}
              key={createLetterId(i)}
              d={svgLetter}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
    </GradientBackground>
  );
};

export default DraggableLetters;
