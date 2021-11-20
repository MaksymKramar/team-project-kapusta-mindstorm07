import styles from "./BackgroundHome.module.css";
import sprite from "../../images/sprite.svg";

export default function BackgroundHome() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <svg className={styles.logoIcon} width="183px" height="46px">
          <use href={sprite + "#icon-kapusta-mobile"} />
        </svg>
        <h1 className={styles.title}> Smart finance</h1>

        <svg className={styles.logoCabbageMobile} width="83px" height="89px">
          <use href={sprite + "#icon-cabbage_x1mobile"} />
        </svg>

        <svg className={styles.logoCabbage2Mobile} width="83px" height="89px">
          <use href={sprite + "#icon-cabbage-mobile"} />
        </svg>

        <svg className={styles.logoTwoCabbages} width="183px" height="142px">
          <use href={sprite + "#icon-cabbage_x2"} />
        </svg>
      </div>
    </div>
  );
}
