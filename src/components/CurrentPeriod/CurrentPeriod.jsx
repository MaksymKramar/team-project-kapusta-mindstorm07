import { useDispatch, useSelector } from "react-redux";
import {
  goBackOneMonth,
  goForwardOneMonth,
} from "../../redux/report/reportSlices";
import { getMonth, getYear } from "../../redux/report";
import arrMonths from "../../data/Month.json";
import sprite from "../../images/sprite.svg";
import s from "./CurrentPeriod.module.scss";

export default function CurrentPeriod() {
  const dispatch = useDispatch();

  // const month = useSelector(getMonth);
  // const year = useSelector(getYear);
  // const correctMonth = arrMonths.find(el => Number(el.id) === Number(month));

  const handleClickLeft = () => {
    dispatch(goBackOneMonth());
  };
  const handleClickRight = () => {
    dispatch(goForwardOneMonth());
  };

  return (
    <div className={s.currentPeriodWrapper}>
      <p className={s.currentPeriodP}>Текущий период:</p>
      <div className={s.periodWrapper}>
        <button
          className={s.button}
          type="button"
          onClick={() => handleClickLeft()}
        >
          <svg className={s.icon}>
            <use href={sprite + "#icon-previous"}></use>
          </svg>
        </button>
        <p className={s.periodP}>
          дата
          {/* {correctMonth.name} {year} */}
        </p>
        <button
          className={s.button}
          type="button"
          onClick={() => handleClickRight()}
        >
          <svg className={s.icon}>
            <use href={sprite + "#icon-next"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
