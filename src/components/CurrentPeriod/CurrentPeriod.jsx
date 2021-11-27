import { useDispatch, useSelector } from "react-redux";
import {
  goBackOneMonth,
  goForwardOneMonth,
} from "../../redux/report/reportSlices";
import { getMonth, getYear } from "../../redux/report";
import arrMonths from "../../data/Month.json";
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

  const currentMonth = mouths[month - 1];

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
