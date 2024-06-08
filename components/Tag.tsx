import styles from "./tag.module.scss";

const Tag = (props: {
  text?: string;
  color?: string;
  hasIcon?: boolean;
  className?: any;
}) => {
  return (
    <div
      className={`${styles.tag} ${styles[props?.color || ""]} ${
        props?.className
      }`}
    >
      {props?.hasIcon && <span className={styles.circle}></span>}
      {props?.text}
    </div>
  );
};

export default Tag;
