"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./parallaxImages.module.scss";

const ParallaxImages = (params: {
  title: string;
  images: string[];
  className?: string;
}) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxContainerRef?.current,
        start: "start center",
        end: "bottom center",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    const getParallaxElements = gsap.utils.selector(
      parallaxContainerRef?.current
    );
    const parallaxGroups = getParallaxElements(".parallax_group");
    const getY = (group: any) => {
      const parallaxContainerBottom =
        parallaxContainerRef?.current?.getBoundingClientRect()?.bottom;
      const parallaxGroupBottom = group?.getBoundingClientRect()?.bottom;
      return parallaxContainerBottom
        ? parallaxContainerBottom - parallaxGroupBottom
        : 0;
    };
    parallaxGroups?.forEach((group, i) => {
      parallaxTimeline?.to(group, { y: () => getY(group) + (100 + i * 50) }, 0);
    });
  });

  return (
    <div
      className={`${styles.parallax_container} ${params?.className}`}
      ref={parallaxContainerRef}
    >
      <div className={styles.parallax}>
        {params?.images?.map((image, i) => {
          const getImgObject = (img: string) => (
            <img
              src={img}
              alt={`Phone screenshot of ${params?.title}`}
              className={styles.parallax_image}
            />
          );

          return (i + 1) % 2 === 0 ? (
            <div
              className={`${styles.parallax_group} parallax_group`}
              key={`project_parallax_${(i + 1) / 2}`}
            >
              {getImgObject(params?.images[i - 1])}
              {getImgObject(image)}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ParallaxImages;
