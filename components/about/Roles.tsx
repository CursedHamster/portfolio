"use client";

import vars from "@/data/vars";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import styles from "./roles.module.scss";

interface Role {
  title: string;
  icon: JSX.Element;
}

const Roles = (props: { roles: Role[]; className?: string }) => {
  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP();
  const rolesRef = useRef<HTMLDivElement>(null);
  const [rolesTimeline, setRolesTimeline] = useState<GSAPTimeline>();
  const topRoleVars = {
    y: "0%",
    z: -50,
    autoAlpha: 0.2,
    scale: 1,
  };
  const activeRoleVars = {
    y: "60%",
    z: 0,
    autoAlpha: 1,
    scale: 1.1,
  };
  const bottomRoleVars = {
    y: "120%",
    z: -50,
    autoAlpha: 0.2,
    scale: 1,
  };
  const getRoleVars = (roleVars: Object) => ({
    ...roleVars,
    duration: vars?.durationMd,
  });

  useGSAP(() => {
    setRolesHeight();
    setRolesTimeline(getRolesTimeline());
    window.addEventListener("resize", setRolesHeight);
    return () => window.removeEventListener("resize", setRolesHeight);
  });

  function setRolesHeight() {
    const roles = document.getElementsByClassName(styles.role);
    let biggestRoleHeight = 0;
    for (let i = 0; i < roles?.length; i++) {
      const roleHeight = roles[i]?.clientHeight;
      if (roleHeight > biggestRoleHeight) {
        biggestRoleHeight = roleHeight;
      }
    }
    Array.from(roles).forEach((role: any) => {
      if (role?.style && role?.clientHeight !== biggestRoleHeight) {
        role.style.height = biggestRoleHeight + "px";
      }
    });
    const containerHeight = biggestRoleHeight * 2.2;
    const rolesDiv = rolesRef?.current;
    if (rolesDiv) {
      rolesDiv.style.height = containerHeight + "px";
    }
  }

  function isRoleUp(
    activeIndex: number,
    newActiveIndex: number,
    arrayLength: number
  ): boolean {
    if (activeIndex - 1 < 0 && newActiveIndex + 1 >= arrayLength) {
      return true;
    }
    if (activeIndex - 1 === newActiveIndex) {
      return true;
    }
    return false;
  }

  const changeOrder = contextSafe((e: any) => {
    if (!rolesTimeline?.paused()) {
      rolesTimeline?.pause();
    }
    const currentElement = e?.currentTarget;
    const roles = document.getElementsByClassName(styles.role);
    let activeIndex = 0;
    let newActiveIndex = 0;
    let inactiveIndex = 0;
    for (let i = 0; i < roles?.length; i++) {
      if (roles[i] === currentElement) {
        newActiveIndex = i;
      }
      if (roles[i]?.classList?.contains("active")) {
        activeIndex = i;
      }
    }
    if (newActiveIndex === activeIndex) {
    } else {
      for (let i = 0; i < roles?.length; i++) {
        if (i !== activeIndex && i !== newActiveIndex) {
          inactiveIndex = i;
        }
      }
      roles[activeIndex].classList.remove("active");
      roles[newActiveIndex].classList.add("active");

      const isUp = isRoleUp(activeIndex, newActiveIndex, roles?.length);

      const activeRole = roles[newActiveIndex];
      const topRole = isUp ? roles[activeIndex] : roles[inactiveIndex];
      const bottomRole = isUp ? roles[inactiveIndex] : roles[activeIndex];

      gsap.to(bottomRole, getRoleVars(bottomRoleVars));
      gsap.to(activeRole, getRoleVars(activeRoleVars));
      gsap.to(topRole, getRoleVars(topRoleVars));
    }
  });

  const getRolesTimeline = contextSafe(() => {
    const delayDuration = vars?.durationLg * 2;
    const roles = document.getElementsByClassName(styles.role);
    gsap.set(roles[0], activeRoleVars);
    gsap.set(roles[1], topRoleVars);
    gsap.set(roles[2], bottomRoleVars);
    const rolesTl = gsap.timeline({ paused: true, repeat: -1 });
    rolesTl
      .to(roles[0], getRoleVars(bottomRoleVars), `${delayDuration}`)
      .to(roles[1], getRoleVars(activeRoleVars), "<")
      .to(roles[2], getRoleVars(topRoleVars), "<");
    rolesTl
      .to(roles[0], getRoleVars(topRoleVars), `>+=${delayDuration}`)
      .to(roles[1], getRoleVars(bottomRoleVars), "<")
      .to(roles[2], getRoleVars(activeRoleVars), "<");
    rolesTl
      .to(roles[0], getRoleVars(activeRoleVars), `>+=${delayDuration}`)
      .to(roles[1], getRoleVars(topRoleVars), "<")
      .to(roles[2], getRoleVars(bottomRoleVars), "<");
    return rolesTl;
  });

  useEffect(() => {
    if (rolesTimeline?.paused()) {
      rolesTimeline?.play();
    }
  }, [rolesTimeline]);

  return (
    <div className={`${styles.roles}`} ref={rolesRef}>
      {props?.roles?.map((role, i) => (
        <div
          className={`${styles.role} ${styles[`role_${i + 1}`]}`}
          key={`about_role_${i + 1}`}
          onClick={changeOrder}
        >
          {role?.icon}
          {role?.title}
        </div>
      ))}
    </div>
  );
};

export default Roles;
