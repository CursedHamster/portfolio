"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import navigate from "@/util/navigate";
import styles from "./projects.module.scss";
import data from "../data/data";
import vars from "@/data/vars";

const Projects = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const router = useRouter();
  const cursorText = useRef(null);
  const cursorImage = useRef(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  // const cursorTablet = useRef(null);
  // const cursorDesktop = useRef(null);
  // const cursorPhone = useRef(null);
  const [imageUrls, setImageUrls] = useState<any[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [zIndex, setZIndex] = useState(0);
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });
  const cursorDifference = 100;
  const canChangeCursorXY = (newX: number, newY: number) =>
    Math.abs(cursorXY?.x - newX) >= cursorDifference ||
    Math.abs(cursorXY?.y - newY) >= cursorDifference;
  const { contextSafe } = useGSAP();
  const projectHoverAnimation = contextSafe(
    (el: any, x: number, y: number, zIndex: number) => {
      const image = document?.querySelector(".projects_image");
      const imageWidth = image?.clientWidth ? image?.clientWidth : 0;
      const imageHeight = image?.clientHeight ? image?.clientHeight : 0;
      const offsetX = x - imageWidth / 2;
      const offsetY = y - imageHeight / 2;
      gsap.set(el, {
        x: x,
        y: y,
        autoAlpha: 0,
        zIndex: zIndex,
        overwrite: true,
      });
      gsap
        .timeline()
        .to(el, {
          autoAlpha: 1,
          duration: vars?.durationSm,
        })
        .to(
          el,
          {
            x: offsetX,
            y: offsetY,
            duration: vars?.durationMd,
          },
          0
        )
        .to(
          el,
          {
            autoAlpha: 0,
            duration: vars?.durationMd,
          },
          `>${vars?.durationMd / 2}`
        );
    }
  );

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
      })
      .from(".projects_title", {
        autoAlpha: 0,
        x: -vars?.offsetSm,
        yPercent: -vars?.offsetSm,
        duration: vars?.enterAnimationDuration,
      })
      .from(
        ".projects_table>*",
        {
          autoAlpha: 0,
          yPercent: -vars?.offsetSm,
          duration: vars?.enterAnimationDuration,
          stagger: vars?.enterAnimationDuration / 5,
        },
        0
      );
    const xTo = gsap.quickTo(cursorText.current, "x", {
      duration: vars?.durationSm,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorText.current, "y", {
      duration: vars?.durationSm,
      ease: "power3",
    });

    const setXY = (e: any) => {
      xTo(e?.clientX);
      yTo(e?.clientY);
    };

    // const setCursorImagesXY = (e: any) => {
    //   const offsetX = innerWidth / 2 - e?.clientX;
    //   const offsetY = innerHeight / 2 - e?.clientY;
    //   gsap.to(cursorDesktop.current, {
    //     x: offsetX * -0.5,
    //     y: offsetY * -0.5,
    //   });
    // };

    // const onMouseMove = (e: any) => {
    //   setXY(e);
    //   setCursorImagesXY(e);
    // };

    window.addEventListener("mousemove", setXY);
    return () => window.removeEventListener("mousemove", setXY);
  });

  const projectsTableMouseEnter = contextSafe(() => {
    gsap.to(cursorText.current, {
      autoAlpha: 1,
      duration: vars?.durationMd,
    });
    gsap.to(cursorImage.current, {
      autoAlpha: 1,
      duration: vars?.durationMd,
    });
  });

  const projectsTableMouseLeave = contextSafe(() => {
    gsap.to(cursorText.current, {
      autoAlpha: 0,
      duration: vars?.durationMd,
    });
    gsap.to(cursorImage.current, {
      autoAlpha: 0,
      duration: vars?.durationMd,
    });
    gsap.to(".projects_cursor_image", {
      autoAlpha: 0,
      duration: vars?.durationMd,
    });
  });

  const projectMouseEnter = contextSafe((e: any, imgUrls: string[]) => {
    setImageUrls(imgUrls);
    const element = e?.currentTarget;
    const childElement = gsap.utils.selector(element);
    gsap.to(element, { y: -vars?.offsetSm / 4, duration: vars?.durationMd });
    gsap.to(element.querySelector("svg"), {
      rotate: 0,
      duration: vars?.durationMd,
    });
    gsap.to(childElement(".project_bottom"), {
      height: vars?.offsetSm / 4,
      duration: vars?.durationMd,
    });
    if (!element.classList.contains("main_opacity_full")) {
      element.classList.add("main_opacity_full");
    }
    gsap.to(".main_opacity", { autoAlpha: 0.3, duration: vars?.durationMd });
    gsap.to(cursorText.current, {
      autoAlpha: 1,
      duration: 0.5,
    });
    // gsap.to(cursorImage.current, {
    //   autoAlpha: 1,
    //   duration: 0.5,
    // });
  });

  const projectMouseMove = contextSafe((e: any) => {
    if (imageUrls?.length > 0) {
      const x = e?.clientX;
      const y = e?.clientY;
      if (canChangeCursorXY(x, y)) {
        projectHoverAnimation(
          imageContainer?.current?.childNodes[currentImage],
          x,
          y,
          zIndex
        );
        setCursorXY({ x: x, y: y });
        const newCurrentImage = currentImage + 1;
        setCurrentImage(
          imageUrls?.length <= newCurrentImage ? 0 : newCurrentImage
        );
        const newZIndex = zIndex + 1;
        setZIndex(15 <= newZIndex ? 0 : newZIndex);
      }
    }
  });

  const projectMouseLeave = contextSafe((e: any) => {
    const element = e?.currentTarget;
    const childElement = gsap.utils.selector(element);
    gsap.to(element, { y: 0, duration: vars?.durationMd });
    gsap.to(element.querySelector("svg"), {
      rotate: -45,
      duration: vars?.durationMd,
    });
    gsap.to(childElement(".project_bottom"), {
      height: 1,
      duration: vars?.durationMd,
    });
    if (element.classList.contains("main_opacity_full")) {
      element.classList.remove("main_opacity_full");
    }
    gsap.to(".main_opacity", { autoAlpha: 1, duration: vars?.durationMd });
    gsap.to(cursorText.current, {
      autoAlpha: 0,
      duration: 0.5,
    });
    // gsap.to(cursorImage.current, {
    //   autoAlpha: 0,
    //   duration: 0.5,
    // });
    // gsap.to(".projects_cursor_image", {
    //   autoAlpha: 0,
    //   duration: 0.3,
    // });
  });

  const projectClick = contextSafe((e: any, section: string) => {
    const element = e?.currentTarget;
    if (element.classList.contains("main_opacity_full")) {
      element.classList.remove("main_opacity_full");
    }
    navigate("/projects/" + section, router);
  });

  return (
    <section id="projects" className={styles.projects_container}>
      <h2
        className={`${styles.projects_title} title main_opacity hidden projects_title`}
      >
        MY <span className="extra">PROJECTS</span>
      </h2>
      <div
        className={`${styles.projects_table} projects_table`}
        onMouseEnter={projectsTableMouseEnter}
        onMouseLeave={projectsTableMouseLeave}
      >
        {data?.projects?.map((project, i) => (
          <div
            className={`${styles.project_row} main_opacity hidden`}
            key={`project_row_${i}`}
            onMouseEnter={(e) =>
              projectMouseEnter(e, project?.images?.screenshots)
            }
            onMouseMove={projectMouseMove}
            onMouseLeave={projectMouseLeave}
            onClick={(e) => projectClick(e, project?.id)}
          >
            <div className={styles.project_title}>{project?.title}</div>
            <div className={styles.project_role}>{project?.role[0]}</div>
            <div className={styles.project_year}>{project?.year}</div>
            <div className={styles.project_link}>
              <IconArrowNarrowRight />{" "}
            </div>
            <span className={`${styles.project_bottom} project_bottom`}></span>
          </div>
        ))}
      </div>
      <div className={styles.cursor_text} ref={cursorText}>
        MORE
      </div>
      <div className={styles.cursor_image} ref={cursorImage}>
        <div className={styles.image_container} ref={imageContainer}>
          {imageUrls?.map((imageUrl, i) => (
            <div
              className={`${styles.image_div} hidden projects_cursor_image`}
              key={`projects_image_${i}`}
            >
              <Image
                src={imageUrl}
                alt={`Project thumbnail ${i + 1}`}
                className={`${styles.desktop} projects_image`}
                width={500}
                height={500}
                priority
              />
              <div className={styles.image_overlay}></div>
            </div>
          ))}
          {/* <img
            src={(imageUrls?.length && imageUrls[0]) || ""}
            alt="Project thumbnail - Tablet"
            className={styles.tablet}
            ref={cursorTablet}
          /> */}
          {/* <img
            src={(imageUrls?.length && imageUrls[1]) || ""}
            alt="Project thumbnail - Desktop"
            className={styles.desktop}
            // ref={cursorDesktop}
          /> */}
          {/* <img
            src={(imageUrls?.length && imageUrls[2]) || ""}
            alt="Project thumbnail - Phone"
            className={styles.phone}
            ref={cursorPhone}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
