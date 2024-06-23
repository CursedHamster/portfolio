import { useState, useEffect, useMemo } from "react";
import styles from "./studioScreen.module.scss";
import {
  IconBrandReact,
  IconBrandSass,
  IconDots,
  IconSquare,
  IconX,
} from "@tabler/icons-react";

interface FileInfo {
  name: string;
  extension: string;
  text: string;
}

const StudioScreen = (props: {
  files: FileInfo[];
  activeIndex?: number;
  className?: any;
}) => {
  const reactExtension = "jsx";
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFile = useMemo(() => {
    return props?.files[activeIndex];
  }, [activeIndex]);
  useEffect(() => {
    if (props?.activeIndex) {
      setActiveIndex(props?.activeIndex);
    }
  }, []);

  function changeActive(newActive: number) {
    if (newActive >= 0 && newActive < props?.files?.length) {
      setActiveIndex(newActive);
    }
  }

  return (
    <div className={`${styles.studio_container} ${props?.className}`}>
      <div className={styles.header}>
        <IconDots className={styles.dots} />
        <div className={styles.controls_container}>
          <div className={styles.minimize}></div>
          <IconSquare className={styles.full_screen} />
          <IconX className={styles.close} />
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.explorer}>
          <div className={styles.main_header}>
            <p>Explorer</p>
            <IconDots className={styles.dots} />
          </div>
          <div className={styles.files_container}>
            {props?.files?.map((file, i) => (
              <div
                key={`studio_screen_file_${i + 1}`}
                className={`${styles.explorer_file} ${styles.filename} ${
                  i === activeIndex ? styles.active : ""
                }`}
                onClick={() => changeActive(i)}
              >
                {file?.extension === reactExtension ? (
                  <IconBrandReact className={styles.icon_react} />
                ) : (
                  <IconBrandSass className={styles.icon_sass} />
                )}
                {file?.name}.{file?.extension}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.file}>
          <div className={styles.main_header}>
            <p className={styles.filename}>
              {activeFile?.extension === reactExtension ? (
                <IconBrandReact className={styles.icon_react} />
              ) : (
                <IconBrandSass className={styles.icon_sass} />
              )}
              {activeFile?.name}.{activeFile?.extension}
            </p>
          </div>
          <div className={styles.code_container}>
            {activeFile?.extension === reactExtension ? (
              <div className={`${styles.code} ${styles.react}`}>
                <span className={styles.color_3}>const</span>{" "}
                <span className={styles.color_2}>{activeFile?.name}</span>{" "}
                <span className={styles.color_1}>=</span>{" "}
                <span className={styles.color_2}>()</span>{" "}
                <span className={styles.color_3}>{"=>"}</span>{" "}
                <span className={styles.color_2}>{"{"}</span>
                <div className={styles.tab}>
                  <span className={styles.color_1}>return</span>{" "}
                  <span className={styles.color_3}>(</span>
                  <div className={styles.tab}>
                    {"<"}
                    <span className={styles.color_1}>h1</span>
                    {">"}
                    <div className={styles.tab}>{activeFile?.text}</div>
                    {"</"}
                    <span className={styles.color_1}>h1</span>
                    {">"}
                  </div>
                  <span className={styles.color_3}>)</span>;
                </div>
                <span className={styles.color_2}>{"}"}</span>;
                <br />
                <br />
                <span className={styles.color_1}>export default</span>{" "}
                <span className={styles.color_4}>{activeFile?.name}</span>;
              </div>
            ) : (
              <div className={`${styles.code} ${styles.css}`}>
                {`const Home = () => {
    return (
        <div>
           <h1>Thank you for visiting my website!
         Have a nice day ❀</h1>
        </div>
     );
};

export default Home;`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioScreen;
