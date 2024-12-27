"use client";

import styleVars from "@/app/_vars.module.scss";
import ArrowButton from "@/components/ArrowButton";
import Contacts from "@/components/Contacts";
import DraggableLetters from "@/components/DraggableLetters";
import ParallaxImages from "@/components/ParallaxImages";
import data from "@/data/data";
import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import { IconArrowNarrowDown, IconArrowNarrowRight } from "@tabler/icons-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { isMobile } from "react-device-detect";

const page = ({ params }: { params: { projectId: string } }) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  ScrollTrigger.refresh();

  const projectData = data?.projects?.find(
    (project) => project?.id === params?.projectId
  );
  const { contextSafe } = useGSAP();
  const router = useRouter();

  useGSAP(() => {
    if (!projectData) {
      notFound();
    }
    const scrollTrigger = (el: any) => ({
      trigger: el,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none none",
      invalidateOnRefresh: true,
    });
    const mm = gsap.matchMedia();
    mm.add(
      {
        small: `(max-width: ${styleVars?.screenSmall})`,
        medium: `(min-width: ${styleVars?.screenMedium})`,
        large: `(min-width: ${styleVars?.screenLarge})`,
      },
      (ctx) => {
        const { small }: any = ctx.conditions;
        const firstTL = gsap
          .timeline()
          .from(`.${styles.title_container}`, {
            autoAlpha: 0,
            yPercent: -200,
            duration: vars?.enterAnimationDuration,
          })
          .from(
            ".project_title_left",
            {
              autoAlpha: 0,
              xPercent: small ? 0 : -50,
              scale: small ? 0.5 : 1,
              duration: vars?.enterAnimationDuration * 2,
            },
            `<`
          )
          .from(
            ".project_title_right",
            {
              autoAlpha: 0,
              xPercent: small ? 0 : 50,
              yPercent: small ? -100 : 0,
              duration: vars?.enterAnimationDuration * 2,
            },
            `<`
          )
          .from(
            `.${styles.tech_list}`,
            {
              autoAlpha: 0,
              duration: vars?.enterAnimationDuration * 2,
            },
            `<+=${vars?.enterAnimationDuration}`
          )
          .from(
            `.${styles.tech}`,
            {
              autoAlpha: 0,
              xPercent: small ? 0 : -50,
              yPercent: small ? 50 : 0,
              duration: vars?.enterAnimationDuration,
              stagger: vars?.enterAnimationDuration / 5,
            },
            `<`
          )
          .from(
            `.${styles.info_label}`,
            {
              autoAlpha: 0,
              yPercent: 100,
              duration: vars?.enterAnimationDuration,
              stagger: vars?.enterAnimationDuration / 5,
            },
            `<`
          )
          .from(
            `.${styles.info_field}`,
            {
              autoAlpha: 0,
              x: small ? 0 : vars?.offsetSm * -1,
              y: vars?.offsetMd,
              duration: vars?.enterAnimationDuration,
              stagger: vars?.enterAnimationDuration / 5,
            },
            `<`
          )
          .from(
            ".project_parallax_images",
            {
              autoAlpha: 0,
              scale: 0.95,
              duration: vars?.enterAnimationDuration,
            },
            "<"
          );

          firstTL.play()
      }
    );
    gsap.utils.toArray(".project_images_container>img").forEach((el: any) =>
      gsap.from(el, {
        autoAlpha: 0,
        scale: 1.05,
        duration: vars?.enterAnimationDuration,
        scrollTrigger: scrollTrigger(el),
      })
    );
    gsap.from(".project_draggable>*", {
      autoAlpha: 0,
      y: vars?.offsetMd,
      duration: vars?.enterAnimationDuration,
      stagger: vars?.enterAnimationDuration / 3,
      scrollTrigger: scrollTrigger(".project_draggable"),
    });
    gsap.from(".project_nav_buttons", {
      autoAlpha: 0,
      scaleX: 0.9,
      duration: vars?.enterAnimationDuration,
      scrollTrigger: scrollTrigger(".project_nav_buttons"),
    });
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 1000);
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
    router?.push(getProject(-1));
  };
  const goToNextProject = (e: any) => {
    router?.push(getProject(1));
  };
  return (
    <section className={styles.project_container}>
      <div className={`${styles.title_container} main_opacity hidden`}>
        <div className={`${styles.title} hidden project_title_left`}>
          <h1 className={`title`}>{projectData?.title}</h1>
          <p className={styles.title_year}>{projectData?.year}</p>
        </div>
        <a
          href={projectData?.websiteLink}
          target="_blank"
          className={`${styles.link} hidden project_title_right`}
          onMouseEnter={onMouseEnterWebsiteLink}
          onMouseLeave={onMouseLeaveWebsiteLink}
        >
          Visit live website{" "}
          <IconArrowNarrowRight className="project_website_link" />
        </a>
      </div>
      <div className={`${styles.contents_container} main_opacity`}>
        <div className={`${styles.info_container} project_info_container`}>
          <div className={`${styles.info_group} ${styles.info_full}`}>
            <p className={styles.info_label}>Technologies & Tools</p>
            <div className={`${styles.tech_list} hidden`}>
              {projectData?.techUsed?.map((tech, i) => (
                <p key={`tech_${i}`} className={`${styles.tech} hidden`}>
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <div className={`${styles.info_group}`}>
            <p className={styles.info_label}>Role</p>
            <p className={styles.info_field}>{projectData?.role?.join(", ")}</p>
          </div>
          <div className={`${styles.info_group}`}>
            <p className={styles.info_label}>Type</p>
            <p className={styles.info_field}>{projectData?.type}</p>
          </div>
          <div className={`${styles.info_group} ${styles.info_full}`}>
            <p className={styles.info_label}>Description</p>
            <p className={`${styles.info_field} ${styles.description}`}>
              {projectData?.description}
            </p>
          </div>
        </div>
        {!isMobile && (
          <ParallaxImages
            title={projectData?.title || ""}
            images={projectData?.images?.parallax || []}
            className="hidden project_parallax_images main_opacity"
          />
        )}
        <div className={`${styles.video_container} project_video main_opacity`}>
          <video
            className={styles.video}
            src={projectData?.video}
            itemType="video/mp4"
            autoPlay
            muted
            loop
          />
          {/* <video className={styles.video} autoPlay loop>
            <source src={projectData?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div
          className={`${styles.images_container} project_images_container main_opacity`}
        >
          {projectData?.images?.screenshots?.map((image, i) => (
            <Image
              src={image}
              alt={`Screenshot of ${projectData?.title}`}
              className={`${styles.image} hidden`}
              key={`project_screenshot_${i + 1}`}
              width={1269}
              height={641.5}
              // priority
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUlZWPBAABbAC0Ii2jaQAAAABJRU5ErkJggg=="
            />
          ))}
        </div>
        <div
          className={`${styles.drag_container} project_draggable main_opacity`}
        >
          <div className={`${styles.drag} hidden`}>
            <p>
              <IconArrowNarrowDown />
              DRAG THE LETTERS <IconArrowNarrowDown />
            </p>
          </div>
          <DraggableLetters
            params={{
              id: projectData?.id || "",
              svg: projectData?.svg || { viewBox: "", text: [] },
              className: "hidden",
            }}
          />
        </div>
        <div
          className={`${styles.nav_buttons} hidden project_nav_buttons main_opacity`}
        >
          <ArrowButton
            text="PREV"
            direction="left"
            type="navigate"
            onClick={goToPrevProject}
          />
          <ArrowButton
            text="NEXT"
            direction="right"
            type="navigate"
            onClick={goToNextProject}
          />
        </div>
      </div>
      <Contacts />
    </section>
  );
};

export default page;
