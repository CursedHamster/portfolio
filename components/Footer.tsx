"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  IconBrandGithubFilled,
  IconMailFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import IconLink from "./IconLink";
import styles from "./footer.module.scss";
import data from "@/data/data";
import vars from "@/data/vars";

const Footer = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".footer", {
      autoAlpha: 0,
      duration: vars?.durationMd,
    });
  });
  return (
    <footer className={`${styles.footer} footer main_opacity`}>
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
    </footer>
  );
};

export default Footer;
