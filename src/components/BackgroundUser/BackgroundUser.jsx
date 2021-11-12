import styles from "./BackgroundUser.module.css";
import sprite from "../../images/sprite.svg";

export default function BackgroundHome() {
  return (
    <>
      <div className={styles.wrapper}>
        <div class="container">
          <svg className={styles.logoTwoCabbages} width="183px" height="142px">
            <use href={sprite + "#icon-cabbage_x2"} />
          </svg>
        </div>
      </div>
      <svg className={styles.cabbagesBottom} width="100%" height="232px">
        <use href={sprite + "#icon-Group-cabbage-userMenu"} />
      </svg>
    </>
  );
}
