import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import gsap from "gsap";

export default function navigate(
  href: string,
  router: AppRouterInstance,
) {
  if (
    !(
      window?.location?.pathname ===
      new URL(href, window?.location?.href)?.pathname
    )
  ) {
    gsap
      .timeline({ onComplete: () => router?.push(href) })
      .to(".main_opacity", { autoAlpha: 0, duration: 0.2 }, 0)
  } else {
    router?.push(href);
  }
}
