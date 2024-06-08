"use client";

import { useRouter, notFound } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowNarrowDown,
} from "@tabler/icons-react";
import styles from "./page.module.scss";
import ParallaxImages from "@/components/ParallaxImages";
import DraggableLetters from "@/components/DraggableLetters";
import ArrowButton from "@/components/ArrowButton";
import Contacts from "@/components/Contacts";
import data from "@/data/data";
import vars from "@/data/vars";

const page = ({ params }: { params: { projectId: string } }) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const projectData = data?.projects?.find(
    (project) => project?.id === params?.projectId
  );
  const { contextSafe } = useGSAP();
  const router = useRouter();
  useGSAP(() => {
    if (!projectData) {
      notFound();
    }
    // const enterSelectors = gsap.utils.toArray(".project_enter");
    // enterSelectors?.forEach((el: any) => {
    //   gsap.from(el, {
    //     autoAlpha: 0,
    //     y: -20,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: el,
    //       start: "top bottom",
    //       end: "bottom bottom",
    //       toggleActions: "restart none none reverse",
    //     },
    //   });
    // });

    const scrollTrigger = (el: any) => ({
      trigger: el,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none none none",
    });

    gsap
      .timeline()
      .from(".project_title_left", {
        autoAlpha: 0,
        x: -vars?.offsetSm,
        duration: vars?.enterAnimationDuration,
      })
      .from(
        ".project_title_right",
        {
          autoAlpha: 0,
          x: vars?.offsetSm,
          duration: vars?.enterAnimationDuration,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      )
      .from(
        ".project_tech_list",
        {
          autoAlpha: 0,
          xPercent: -50,
          duration: vars?.enterAnimationDuration / 2,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      )
      .from(".project_tech_item", {
        autoAlpha: 0,
        scale: 0.8,
        duration: vars?.enterAnimationDuration / 2,
        stagger: vars?.enterAnimationDuration / 5,
      })
      .from(
        ".project_info_container>div",
        {
          autoAlpha: 0,
          y: -vars?.offsetSm,
          duration: vars?.enterAnimationDuration,
          stagger: vars?.enterAnimationDuration / 5,
        },
        `>-=${vars?.enterAnimationDuration}`
      )
      .from(
        ".project_parallax_images",
        {
          autoAlpha: 0,
          scale: 0.9,
          duration: vars?.enterAnimationDuration * 2,
        },
        0
      );
    gsap.utils.toArray(".project_images_container>img").forEach((el: any) =>
      gsap.from(el, {
        autoAlpha: 0,
        scale: 0.9,
        duration: vars?.enterAnimationDuration,
        scrollTrigger: scrollTrigger(el),
      })
    );
    gsap.from(".project_draggable", {
      autoAlpha: 0,
      scale: 0.9,
      duration: vars?.enterAnimationDuration,
      scrollTrigger: scrollTrigger(".project_draggable"),
    });
    gsap.from(".project_nav_buttons", {
      autoAlpha: 0,
      yPercent: -100,
      duration: vars?.enterAnimationDuration,
      scrollTrigger: scrollTrigger(".project_nav_buttons"),
    });
  });
  // const onMouseEnterNavButton = contextSafe((e: any, isLeft: boolean) => {
  //   const getChild = gsap.utils.selector(e?.currentTarget);
  //   const circleAnimation = isLeft ? { left: 0 } : { right: 0 };
  //   gsap.to(getChild(".nav_circle"), {
  //     scale: 0.8,
  //     duration: vars?.durationSm,
  //     ...circleAnimation,
  //   });
  //   gsap.to(getChild(".nav_button_child"), {
  //     x: isLeft ? vars?.offsetSm : -vars?.offsetSm,
  //     duration: vars?.durationSm,
  //     stagger: isLeft ? vars?.staggerSm : -vars?.staggerSm,
  //   });
  // });
  // const onMouseLeaveNavButton = contextSafe((e: any, isLeft: boolean) => {
  //   const getChild = gsap.utils.selector(e?.currentTarget);
  //   const circleAnimation = isLeft ? { left: "2rem" } : { right: "2rem" }; //TODO: change!!!
  //   gsap.to(getChild(".nav_circle"), {
  //     scale: 1,
  //     duration: vars?.durationSm,
  //     ...circleAnimation,
  //   });
  //   gsap.to(getChild(".nav_button_child"), {
  //     x: 0,
  //     duration: vars?.durationSm,
  //     stagger: isLeft ? vars?.staggerSm : -vars?.staggerSm,
  //   });
  // });
  const onClickNavButton = contextSafe((e: any, href: string) => {
    const getChild = gsap.utils.selector(e?.currentTarget);
    const circle: any = getChild(".nav_circle");
    if (!circle[0]?.classList.contains("main_opacity_full")) {
      circle[0]?.classList.add("main_opacity_full");
    }
    gsap.to(".main_opacity", { autoAlpha: 0, duration: vars?.durationSm });
    gsap.to(circle, {
      scale: 10,
      backgroundColor: "white", //TODO: change!!!
      duration: vars?.durationMd,
      autoAlpha: 0,
      onComplete: () => {
        router?.push(href);
      },
    });
  });
  const onMouseEnterWebsiteLink = contextSafe(() => {
    gsap.to(".project_website_link", { rotate: 0, duration: vars?.durationSm });
  });
  const onMouseLeaveWebsiteLink = contextSafe(() => {
    gsap.to(".project_website_link", {
      rotate: -45,
      duration: vars?.durationSm,
    });
  });
  // const onClickWebsiteLink = contextSafe(() => {
  //   gsap.to(".project_website_link::before", {
  //     autoAlpha: 1,
  //     scale: 1.2,
  //     duration: 0.3,
  //   });
  // });
  const getProject = (place: number): string => {
    const projects = data?.projects;
    const projectIndex = data?.projects?.findIndex(
      (project) => project?.id === params?.projectId
    );
    if (projectIndex >= 0) {
      if (projects[projectIndex + place]) {
        return projects[projectIndex + place]?.id;
      } else if (projects?.length === projectIndex + place) {
        return projects[0]?.id;
      } else if (projectIndex === 0) {
        return projects[projects?.length - 1]?.id;
      }
    }

    return params?.projectId;
  };
  const goToPrevProject = (e: any) => {
    // onClickNavButton(e, getProject(-1));
    router?.push(getProject(-1));
  };
  const goToNextProject = (e: any) => {
    // onClickNavButton(e, getProject(1));
    router?.push(getProject(1));
  };
  return (
    <section className={styles.project_container}>
      <div className={`${styles.title_container} main_opacity`}>
        <h1 className={`title hidden project_title_left`}>
          {projectData?.title}
        </h1>
        <a
          href={projectData?.websiteLink}
          target="_blank"
          className={`${styles.link} hidden project_title_right`}
          onMouseEnter={onMouseEnterWebsiteLink}
          onMouseLeave={onMouseLeaveWebsiteLink}
          // onClick={onClickWebsiteLink}
        >
          Visit live website{" "}
          <IconArrowNarrowRight className="project_website_link" />
        </a>
      </div>
      <div
        className={`${styles.tech_list} main_opacity hidden project_tech_list`}
      >
        {projectData?.techUsed?.map((tech, i) => (
          <p
            key={`tech_${i}`}
            className={`${styles.tech} hidden project_tech_item`}
          >
            {tech}
          </p>
        ))}
      </div>
      <div className={`${styles.contents_container} main_opacity`}>
        <div className={`${styles.info_container} project_info_container`}>
          <div className={`${styles.info_group} hidden`}>
            <p className={styles.info_label}>Type</p>
            <p className={styles.info_field}>{projectData?.type}</p>
          </div>
          <div className={`${styles.info_group} hidden`}>
            <p className={styles.info_label}>Year</p>
            <p className={styles.info_field}>{projectData?.year}</p>
          </div>
          <div className={`${styles.info_group} hidden`}>
            <p className={styles.info_label}>Role</p>
            <p className={styles.info_field}>{projectData?.role?.join(", ")}</p>
          </div>
          <div className={`${styles.info_group} hidden`}>
            <p className={styles.info_label}>Description</p>
            <p className={styles.info_field}>{projectData?.description}</p>
          </div>
        </div>
        <ParallaxImages
          title={projectData?.title || ""}
          images={projectData?.images?.parallax || []}
          className="hidden project_parallax_images main_opacity"
        />
        {/* <iframe
          src="https://www.youtube.com/embed/DIM9gJf_V4M?si=r08g1_NYZTWBWj8D&amp;controls=0&autoplay=1&fs=0&loop=1&modestbranding=1"
          title={`Video showing website ${projectData?.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className={styles.video}
        ></iframe> */}
        <div
          className={`${styles.images_container} project_images_container main_opacity`}
        >
          {projectData?.images?.screenshots?.map((image, i) => (
            <img
              src={image}
              alt={`Screenshot of ${projectData?.title}`}
              className={`${styles.image} hidden`}
              key={`project_screenshot_${i + 1}`}
            />
          ))}
        </div>
        <div className="hidden project_draggable main_opacity">
          <div className={styles.drag}>
            <p>
              <IconArrowNarrowDown />
              DRAG THE LETTERS <IconArrowNarrowDown />
            </p>
          </div>
          <DraggableLetters
            params={{
              id: projectData?.id || "",
              svg: projectData?.svg || { viewBox: "", text: [] },
            }}
          />
        </div>
        <div
          className={`${styles.nav_buttons} hidden project_nav_buttons main_opacity`}
        >
          {/* <button
            className={`${styles.nav_button} ${styles.left}`}
            onMouseEnter={(e) => onMouseEnterNavButton(e, true)}
            onMouseLeave={(e) => onMouseLeaveNavButton(e, true)}
            onClick={goToPrevProject}
          >
            <IconArrowNarrowLeft className="nav_button_child main_opacity" />
            <p className={`${styles.text} nav_button_child main_opacity`}>
              PREV
            </p>
            <div
              className={`${styles.nav_circle} nav_circle main_opacity`}
            ></div>
            <div className={`${styles.nav_line} nav_line main_opacity`}></div>
          </button> */}
          <ArrowButton text="PREV" direction="left" type="navigate" onClick={goToPrevProject} />
          <ArrowButton text="NEXT" direction="right" type="navigate" onClick={goToNextProject} />
          {/* <button
            className={`${styles.nav_button} ${styles.right}`}
            onMouseEnter={(e) => onMouseEnterNavButton(e, false)}
            onMouseLeave={(e) => onMouseLeaveNavButton(e, false)}
            onClick={goToNextProject}
          >
            <p className={`${styles.text} nav_button_child main_opacity`}>
              NEXT
            </p>
            <IconArrowNarrowRight className="nav_button_child main_opacity" />
            <div
              className={`${styles.nav_circle} nav_circle main_opacity`}
            ></div>
            <div className={`${styles.nav_line} nav_line main_opacity`}></div>
          </button> */}
        </div>
      </div>
      <Contacts />
    </section>
  );
};

export default page;
