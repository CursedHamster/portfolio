"use client";

import navigate from "@/util/navigate";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  // IconHeartFilled,
  IconNorthStar,
  // IconBrandGithubFilled,
  // IconMailFilled,
  // IconBrandLinkedin,
} from "@tabler/icons-react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import StudioScreen from "./StudioScreen";
import IconLink from "./IconLink";
import Tag from "./Tag";
import styles from "./hero.module.scss";
import styleVars from "@/app/_vars.module.scss";
import data from "@/data/data";
import vars from "@/data/vars";
import { useRouter } from "next/navigation";

const Hero = () => {
  gsap.registerPlugin(useGSAP);

  const router = useRouter();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        small: `(max-width: ${styleVars?.screenSmall})`,
        medium: `(min-width: ${styleVars?.screenMedium})`,
        large: `(min-width: ${styleVars?.screenLarge})`,
      },
      (ctx) => {
        const { small, medium, large }: any = ctx.conditions;
        const heroTimeline = gsap.timeline();

        heroTimeline
          ?.from(".hero_tag", {
            autoAlpha: 0,
            duration: vars?.enterAnimationDuration,
          })
          .from(
            ".hero_title",
            {
              yPercent: 100,
              autoAlpha: 0,
              duration: vars?.enterAnimationDuration,
            },
            "<"
          )
          .from(
            ".hero_subtitle",
            {
              xPercent: -50,
              yPercent: 100,
              autoAlpha: 0,
              duration: vars?.enterAnimationDuration,
            },
            `<+=${vars?.enterAnimationDuration / 3}`
          )
          .from(
            ".hero_buttons",
            {
              autoAlpha: 0,
              duration: vars?.enterAnimationDuration,
            },
            `<+=${vars?.enterAnimationDuration / 3}`
          )
          .from(
            ".hero_buttons>*",
            {
              xPercent: -50,
              duration: vars?.enterAnimationDuration,
              stagger: vars?.enterAnimationDuration / 3,
            },
            "<"
          );
        if (small || (medium && !large)) {
          heroTimeline?.from(
            ".hero_socials>*",
            {
              yPercent: -100,
              autoAlpha: 0,
              duration: vars?.enterAnimationDuration,
              stagger: vars?.enterAnimationDuration / 2,
            },
            medium
              ? `<+=${vars?.enterAnimationDuration / 3}`
              : `<+=${vars?.enterAnimationDuration}`
          );
        }
        if (medium || large) {
          heroTimeline
            ?.from(
              ".hero_image",
              {
                scale: 0,
                rotate: -180,
                autoAlpha: 0,
                duration: vars?.enterAnimationDuration * 1.5,
              },
              `>-=${vars?.enterAnimationDuration}`
            )
            .from(
              ".hero_circle_shadow",
              {
                x: vars?.offsetSm,
                autoAlpha: 0,
                duration: vars?.enterAnimationDuration,
              },
              `>-=${vars?.enterAnimationDuration / 5}`
            );
        }
        if (large)
          heroTimeline?.from(
            ".hero_socials>*",
            {
              yPercent: -100,
              autoAlpha: 0,
              duration: vars?.enterAnimationDuration,
              stagger: vars?.enterAnimationDuration / 2,
            },
            `<+=${vars?.enterAnimationDuration / 3}`
          );
        if (medium || large) {
          heroTimeline
            ?.from(
              ".hero_icons",
              {
                autoAlpha: 0,
                duration: vars?.enterAnimationDuration,
              },
              `<+=${vars?.enterAnimationDuration / 3}`
            )
            .from(
              ".hero_icons>*",
              {
                scale: 0,
                rotation: 0,
                duration: vars?.enterAnimationDuration,
                stagger: vars?.enterAnimationDuration / 5,
              },
              `<`
            )
            .from(
              ".hero_studio",
              {
                xPercent: 100,
                autoAlpha: 0,
                duration: vars?.enterAnimationDuration,
              },
              `<+=${vars?.enterAnimationDuration}`
            );
        }
      }
    );
  });

  return (
    <section id="home" className={`${styles.container} main_opacity`}>
      <div className={styles.text}>
        <Tag
          text="Available"
          color="green"
          className="hidden hero_tag"
          hasIcon
        />
        <h1 className={`${styles.title} title hidden hero_title`}>
          Victoriia Harniuk
        </h1>
        <div className={`${styles.subtitle_container} hidden hero_subtitle`}>
          <IconNorthStar />
          <h3 className={styles.subtitle}>Web Developer</h3>
        </div>
        <div className={`${styles.buttons} hidden hero_buttons`}>
          <PrimaryButton
            text="Contact me"
            onClick={() => navigate("#contacts", router)}
          />
          <SecondaryButton
            text="See my work"
            icon={true}
            onClick={() => navigate("#projects", router)}
          />
        </div>
      </div>
      <div className={`${styles.figure}`}>
        <div className={`${styles.socials} hero_socials`}>
          {data?.socials?.map((social, i) => (
            <IconLink
              key={`hero_social_${i + 1}`}
              icon={social?.icon}
              link={social?.link}
              className="hidden"
            />
          ))}
        </div>
        <div className={`${styles.circle_container}`}>
          <div className={`${styles.circle}`}>
            <img
              src="/hero_object.svg"
              alt="Gradient Moon"
              className={`${styles.hero_image} hero_image hidden`}
            />
            <div
              className={`${styles.circle_shadow} hero_circle_shadow hidden`}
            ></div>
            <div className={`${styles.icons} hero_icons hidden`}>
              <svg
                className={`${styles.icon} ${styles.icon_1}`}
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.9635 37.2122C37.9635 37.2122 40.3484 20.0111 47.2872 9.56935C48.0045 8.03686 48.9957 6.58332 50.2585 5.28633C55.8581 -0.46498 64.6777 -0.960026 69.9576 4.18061C75.2375 9.32125 74.9783 18.1509 69.3787 23.9022C68.6157 24.6858 67.793 25.3719 66.9276 25.9594C56.9736 34.0567 37.9635 37.2122 37.9635 37.2122ZM36.4471 38.5743C36.4471 38.5743 19.3166 41.4178 9.06392 48.6329C7.55103 49.3909 6.12438 50.4206 4.86151 51.7177C-0.738118 57.469 -0.997318 66.2987 4.28257 71.4393C9.56246 76.58 18.382 76.0849 23.9817 70.3336C24.7448 69.5498 25.4087 68.7088 25.973 67.8278C33.8009 57.6608 36.4471 38.5743 36.4471 38.5743ZM8.94292 27.8182C19.3847 34.7566 36.585 37.1413 36.585 37.1413C36.585 37.1413 33.4296 18.1316 25.3325 8.17757C24.745 7.31214 24.0589 6.48941 23.2753 5.72644C17.524 0.12682 8.6943 -0.132382 3.55366 5.14751C-1.58698 10.4274 -1.09193 19.247 4.65937 24.8466C5.95652 26.1095 7.41024 27.1008 8.94292 27.8182ZM37.781 38.5902C37.781 38.5902 54.9813 40.9749 65.4231 47.9133C66.9558 48.6307 68.4095 49.622 69.7067 50.8849C75.458 56.4845 75.953 65.3041 70.8124 70.584C65.6717 75.8639 56.8421 75.6047 51.0908 70.0051C50.3071 69.2421 49.6211 68.4194 49.0336 67.5539C40.9365 57.5999 37.781 38.5902 37.781 38.5902Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_2}`}
                viewBox="0 0 87 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.007 0.992676L43.4657 17.602C43.8567 31.7627 55.2441 43.1501 69.4047 43.5411L86.0141 43.9997L69.4047 44.4583C55.2441 44.8493 43.8567 56.2368 43.4657 70.3974L43.007 87.0068L42.5484 70.3974C42.1574 56.2368 30.77 44.8493 16.6093 44.4583L0 43.9997L16.6093 43.5411C30.77 43.1501 42.1574 31.7627 42.5484 17.602L43.007 0.992676Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_3}`}
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.9036 27.3737C34.2611 24.0746 33.2874 17.8969 33.2782 13.2211C33.2574 2.77953 35.166 0.011527 37.5272 0.00684189C39.8883 0.00215682 41.9979 2.76219 42.0186 13.2037C42.0279 17.8796 40.9038 24.0614 40.2744 27.363C39.6108 30.8438 38.1285 36.016 37.7126 37.4427C38.9866 37.0704 44.3204 35.5338 47.8827 34.8473C51.1831 34.2113 57.3626 33.2499 62.0385 33.2499C72.4801 33.2499 75.2443 35.164 75.2443 37.5252C75.2443 39.8863 72.4801 41.9904 62.0385 41.9904C57.3626 41.9904 51.1831 40.8541 47.8827 40.2181C44.3154 39.5307 38.9719 37.9791 37.7073 37.6067C38.1158 39.0072 39.608 44.2088 40.2744 47.7045C40.9038 51.0061 42.0279 57.1879 42.0186 61.8638C41.9979 72.3053 39.8883 75.0653 37.5272 75.0606C35.166 75.056 33.2574 72.2879 33.2782 61.8464C33.2874 57.1705 34.2611 50.9929 34.9036 47.6938C35.5817 44.212 37.076 39.0383 37.4925 37.6197C36.1519 38.0141 30.8886 39.5385 27.3616 40.2181C24.0612 40.8541 17.8817 41.9904 13.2058 41.9904C2.76421 41.9904 0 39.8863 0 37.5252C0 35.164 2.76421 33.2499 13.2058 33.2499C17.8817 33.2499 24.0612 34.2113 27.3616 34.8473C30.8839 35.526 36.1381 37.036 37.4873 37.4298C37.0635 35.986 35.5789 30.8409 34.9036 27.3737Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_4}`}
                viewBox="0 0 87 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.007 0.992676L43.4657 17.602C43.8567 31.7627 55.2441 43.1501 69.4047 43.5411L86.0141 43.9997L69.4047 44.4583C55.2441 44.8493 43.8567 56.2368 43.4657 70.3974L43.007 87.0068L42.5484 70.3974C42.1574 56.2368 30.77 44.8493 16.6093 44.4583L0 43.9997L16.6093 43.5411C30.77 43.1501 42.1574 31.7627 42.5484 17.602L43.007 0.992676Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_5}`}
                viewBox="0 0 87 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.007 0.992676L43.4657 17.602C43.8567 31.7627 55.2441 43.1501 69.4047 43.5411L86.0141 43.9997L69.4047 44.4583C55.2441 44.8493 43.8567 56.2368 43.4657 70.3974L43.007 87.0068L42.5484 70.3974C42.1574 56.2368 30.77 44.8493 16.6093 44.4583L0 43.9997L16.6093 43.5411C30.77 43.1501 42.1574 31.7627 42.5484 17.602L43.007 0.992676Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_6}`}
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.9635 37.2122C37.9635 37.2122 40.3484 20.0111 47.2872 9.56935C48.0045 8.03686 48.9957 6.58332 50.2585 5.28633C55.8581 -0.46498 64.6777 -0.960026 69.9576 4.18061C75.2375 9.32125 74.9783 18.1509 69.3787 23.9022C68.6157 24.6858 67.793 25.3719 66.9276 25.9594C56.9736 34.0567 37.9635 37.2122 37.9635 37.2122ZM36.4471 38.5743C36.4471 38.5743 19.3166 41.4178 9.06392 48.6329C7.55103 49.3909 6.12438 50.4206 4.86151 51.7177C-0.738118 57.469 -0.997318 66.2987 4.28257 71.4393C9.56246 76.58 18.382 76.0849 23.9817 70.3336C24.7448 69.5498 25.4087 68.7088 25.973 67.8278C33.8009 57.6608 36.4471 38.5743 36.4471 38.5743ZM8.94292 27.8182C19.3847 34.7566 36.585 37.1413 36.585 37.1413C36.585 37.1413 33.4296 18.1316 25.3325 8.17757C24.745 7.31214 24.0589 6.48941 23.2753 5.72644C17.524 0.12682 8.6943 -0.132382 3.55366 5.14751C-1.58698 10.4274 -1.09193 19.247 4.65937 24.8466C5.95652 26.1095 7.41024 27.1008 8.94292 27.8182ZM37.781 38.5902C37.781 38.5902 54.9813 40.9749 65.4231 47.9133C66.9558 48.6307 68.4095 49.622 69.7067 50.8849C75.458 56.4845 75.953 65.3041 70.8124 70.584C65.6717 75.8639 56.8421 75.6047 51.0908 70.0051C50.3071 69.2421 49.6211 68.4194 49.0336 67.5539C40.9365 57.5999 37.781 38.5902 37.781 38.5902Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_7}`}
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.9036 27.3737C34.2611 24.0746 33.2874 17.8969 33.2782 13.2211C33.2574 2.77953 35.166 0.011527 37.5272 0.00684189C39.8883 0.00215682 41.9979 2.76219 42.0186 13.2037C42.0279 17.8796 40.9038 24.0614 40.2744 27.363C39.6108 30.8438 38.1285 36.016 37.7126 37.4427C38.9866 37.0704 44.3204 35.5338 47.8827 34.8473C51.1831 34.2113 57.3626 33.2499 62.0385 33.2499C72.4801 33.2499 75.2443 35.164 75.2443 37.5252C75.2443 39.8863 72.4801 41.9904 62.0385 41.9904C57.3626 41.9904 51.1831 40.8541 47.8827 40.2181C44.3154 39.5307 38.9719 37.9791 37.7073 37.6067C38.1158 39.0072 39.608 44.2088 40.2744 47.7045C40.9038 51.0061 42.0279 57.1879 42.0186 61.8638C41.9979 72.3053 39.8883 75.0653 37.5272 75.0606C35.166 75.056 33.2574 72.2879 33.2782 61.8464C33.2874 57.1705 34.2611 50.9929 34.9036 47.6938C35.5817 44.212 37.076 39.0383 37.4925 37.6197C36.1519 38.0141 30.8886 39.5385 27.3616 40.2181C24.0612 40.8541 17.8817 41.9904 13.2058 41.9904C2.76421 41.9904 0 39.8863 0 37.5252C0 35.164 2.76421 33.2499 13.2058 33.2499C17.8817 33.2499 24.0612 34.2113 27.3616 34.8473C30.8839 35.526 36.1381 37.036 37.4873 37.4298C37.0635 35.986 35.5789 30.8409 34.9036 27.3737Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_8}`}
                viewBox="0 0 87 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.007 0.992676L43.4657 17.602C43.8567 31.7627 55.2441 43.1501 69.4047 43.5411L86.0141 43.9997L69.4047 44.4583C55.2441 44.8493 43.8567 56.2368 43.4657 70.3974L43.007 87.0068L42.5484 70.3974C42.1574 56.2368 30.77 44.8493 16.6093 44.4583L0 43.9997L16.6093 43.5411C30.77 43.1501 42.1574 31.7627 42.5484 17.602L43.007 0.992676Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className={`${styles.icon} ${styles.icon_9}`}
                viewBox="0 0 87 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.007 0.992676L43.4657 17.602C43.8567 31.7627 55.2441 43.1501 69.4047 43.5411L86.0141 43.9997L69.4047 44.4583C55.2441 44.8493 43.8567 56.2368 43.4657 70.3974L43.007 87.0068L42.5484 70.3974C42.1574 56.2368 30.77 44.8493 16.6093 44.4583L0 43.9997L16.6093 43.5411C30.77 43.1501 42.1574 31.7627 42.5484 17.602L43.007 0.992676Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <StudioScreen
          files={data?.hero?.files}
          activeIndex={1}
          className={`${styles.studio} hero_studio hidden`}
        />
      </div>
    </section>
  );
};

export default Hero;
