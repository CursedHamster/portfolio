"use client";

import data from "@/data/data";
import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import IconLink from "./IconLink";
import styles from "./footer.module.scss";

const Footer = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".footer", {
      autoAlpha: 0,
      yPercent: 100,
      duration: vars?.durationMd,
    });
  });
  return (
    <footer>
      <div className={`${styles.footer} footer`}>
        <p className={styles.copyright}>
          ©2024. Created by Viktoriia Harniuk. All rights reserved.
        </p>
        <div className={styles.socials}>
          {data?.socials?.map((social, i) => (
            <IconLink
              key={`contacts_icon_link_${i + 1}`}
              icon={social?.icon}
              link={social?.link}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
