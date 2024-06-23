import { RefObject } from "react";
import styles from "./tag.module.scss";

const Tag = (props: {
  text?: string;
  color?: string;
  hasIcon?: boolean;
  className?: any;
  // ref?: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className={`${styles.tag} ${styles[props?.color || ""]} ${
        props?.className
      }`}
      // ref={props?.ref}
    >
      {props?.hasIcon && <span className={styles.circle}></span>}
      {props?.text}
    </div>
  );
};

export default Tag;
