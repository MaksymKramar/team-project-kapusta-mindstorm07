import sprite from "../../images/sprite.svg";
import styles from "./CurrentPeriod.module.css";

export default function CurrentPeriod() {
  return (
    <div className={styles.currentPeriodWrapper}>
      <p className={styles.currentPeriodP}>Текущий период:</p>
      <div className={styles.perodWrapper}>
        <svg
          width="8px"
          height="20px"
          className={styles.iconPrevious}
          // onClick={onHandleChangeType}
        >
          <use href={sprite + "#icon-previous"}></use>
        </svg>
        <p className={styles.periodP}>Ноябрь 2019</p>
        <svg
          width="8px"
          height="20px"
          className={styles.iconNext}
          // onClick={onHandleChangeType}
        >
          <use href={sprite + "#icon-next"}></use>
        </svg>
      </div>
    </div>
  );
}
