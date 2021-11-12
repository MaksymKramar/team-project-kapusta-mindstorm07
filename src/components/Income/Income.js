import s from "./Income.module.scss";
import sprite from "../../images/sprite.svg";

export default function Income() {
  return (
    <div className={s.income}>
      <div className={s.blok}>
        <div className={s.navigation}>
          <a src="">
            <svg className={s.iconPrevious}>
              <use href={sprite + "#icon-previous"}></use>
            </svg>
          </a>

          <p className={s.title}>Доходы</p>

          <a src="">
            <svg className={s.iconNext}>
              <use href={sprite + "#icon-next"}></use>
            </svg>
          </a>
        </div>

        <div>
          <ul className={s.list}>
            <li className={s.item}>
              <span className={s.price}></span>
              <div className={s.bg}>
                <svg className={s.icon}>
                  <use href={sprite + "#icon-salary-1"}></use>
                </svg>
              </div>
              <p className={s.category}>ЗП</p>
            </li>

            <li className={s.item}>
              <span className={s.price}></span>
              <div className={s.bg}>
                <svg className={s.icon}>
                  <use href={sprite + "#icon-salary"}></use>
                </svg>
              </div>
              <p className={s.category}>Доп. доход</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={(s.costs, s.blok)}>
        <ul className={s.costsList}>
          <li className={s.costsItem}>
            <p className={s.costsType}>Основной</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Дополнительный</p>
            <p className={s.costsPrice}>грн</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
