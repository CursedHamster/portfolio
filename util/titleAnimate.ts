import gsap from "gsap";
import vars from "@/data/vars";

function titleAnimate(target: any) {
  return gsap.from(target, {
    autoAlpha: 0,
    yPercent: 100,
    duration: vars?.enterAnimationDuration,
  });
}

export default titleAnimate;
