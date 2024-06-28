"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import styles from "./draggableLetters.module.scss";

const DraggableLetters = ({
  params,
}: {
  params: {
    id: string;
    svg: { viewBox: string; text: string[] };
    className?: string | "";
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
    <div className={`${styles.drag_container} ${params?.className}`}>
      <div
        className={`${styles.circle} ${styles.circle_border} ${styles.circle_3}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_border} ${styles.circle_4}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_border} ${styles.circle_5}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_border} ${styles.circle_6}`}
      ></div>

      <div
        className={`${styles.circle} ${styles.circle_filled} ${styles.circle_1}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_filled} ${styles.circle_2}`}
      ></div>
      <div className={styles.drag_frame} ref={containerRef}>
        <svg
          viewBox={params?.svg?.viewBox}
          xmlns="http://www.w3.org/2000/svg"
          className={styles.drag_text}
        >
          {params?.svg?.text?.map((svgLetter, i) => (
            <g id={createLetterId(i)} key={createLetterId(i)}>
              <path
                className={styles.path_copy}
                d={svgLetter}
                vectorEffect="non-scaling-stroke"
              />
              <path d={svgLetter} vectorEffect="non-scaling-stroke" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default DraggableLetters;
