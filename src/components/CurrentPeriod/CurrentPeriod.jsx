import sprite from "../../images/sprite.svg";
import s from "./CurrentPeriod.module.scss";

export default function CurrentPeriod() {
  return (
    <div className={s.currentPeriodWrapper}>
      <p className={s.currentPeriodP}>Текущий период:</p>
      <div className={s.perodWrapper}>
        <svg
          width="8px"
          height="20px"
          className={s.icon}
          // onClick={onHandleChangeType}
        >
          <use href={sprite + "#icon-previous"}></use>
        </svg>
        <p className={s.periodP}>Ноябрь 2019</p>
        <svg
          width="8px"
          height="20px"
          // onClick={onHandleChangeType}
        >
          <use href={sprite + "#icon-next"}></use>
        </svg>
      </div>
    </div>
  );
}
