import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./iconLink.module.scss";
import styleVars from "@/app/_vars.module.scss";
import vars from "@/data/vars";

const IconLink = (props: { icon: any; link?: string, className?: string }) => {
  gsap?.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP();

  const onMouseEnter = contextSafe((e: any) => {
    const el = e?.currentTarget;
    gsap?.to(el, {
      backgroundColor: styleVars?.primaryTextColor,
      color: styleVars?.secondaryBackgroundColor,
      duration: vars?.durationXs,
    });
  });
  const onMouseLeave = contextSafe((e: any) => {
    const el = e?.currentTarget;
    gsap?.to(el, {
      backgroundColor: styleVars?.secondaryBackgroundColor,
      color: styleVars?.primaryTextColor,
      duration: vars?.durationXs,
    });
  });
  return (
    <a
      href={props?.link}
      target="_blank"
      className={`${styles.link} ${props?.className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props?.icon}
    </a>
  );
};

export default IconLink;
