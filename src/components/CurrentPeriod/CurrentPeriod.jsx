import sprite from "../../images/sprite.svg";
import s from "./CurrentPeriod.module.scss";

export default function CurrentPeriod({
  month,
  year,
  onHandleClickRight,
  onHandleClickLeft,
}) {
  const mouths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  // let date = new Date()

  const currentMonth = mouths[month - 1];
  // console.log(year)
  // const checkForTheCurrentDate = () =>
  //   month === date.getMonth() + 1 && year === date.getFullYear()

  return (
    <div className={s.currentPeriodWrapper}>
      <p className={s.currentPeriodP}>Текущий период:</p>
      <div className={s.periodWrapper}>
        <button
          className={s.button}
          type="button"
          onClick={() => onHandleClickLeft()}
        >
          <svg className={s.icon}>
            <use href={sprite + "#icon-previous"}></use>
          </svg>
        </button>
        <p className={s.periodP}>
          {currentMonth} {year}
        </p>
        <button
          // className={checkForTheCurrentDate === false ? s.hidden : s.button}
          className={s.button}
          type="button"
          onClick={() => onHandleClickRight()}
        >
          <svg className={s.icon}>
            <use href={sprite + "#icon-next"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
