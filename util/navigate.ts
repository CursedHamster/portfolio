import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import gsap from "gsap";

export default function navigate(
  href: string,
  router: AppRouterInstance,
  // page?: any
) {
  const transitionElement = document?.getElementById("transition_element");
  if (
    transitionElement &&
    !(
      window?.location?.pathname ===
      new URL(href, window?.location?.origin)?.pathname
    )
  ) {
    gsap
      .timeline({ onComplete: () => router?.push(href) })
    //   .fromTo(
    //     transitionElement,
    //     {
    //       xPercent: 0,
    //       borderTopRightRadius: "50vh",
    //       borderBottomRightRadius: "50vh",
    //       borderTopLeftRadius: 0,
    //       borderBottomLeftRadius: 0,
    //     },
    //     {
    //       xPercent: 100,
    //       duration: 0.5,
    //     }
    //   )
      .to(".main_opacity", { autoAlpha: 0, duration: 0.2 }, 0)
    //   .to(
    //     transitionElement,
    //     { borderTopRightRadius: 0, borderBottomRightRadius: 0, duration: 0.5 },
    //     "<+=50%"
    //   )
    //   .to(transitionElement, {
    //     borderTopLeftRadius: "50vh",
    //     borderBottomLeftRadius: "50vh",
    //     duration: 0.5,
    //     delay: 0.2,
    //   })
    //   .to(
    //     transitionElement,
    //     {
    //       xPercent: 200,
    //       duration: 1,
    //     },
    //     "<"
    //   );
  } else {
    router?.push(href);
  }
}
