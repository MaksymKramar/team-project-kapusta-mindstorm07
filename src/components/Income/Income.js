import s from "./Income.module.scss";
import sprite from "../../images/sprite.svg";

export default function Income() {
  return (
    <div className={s.income}>
      <div className={s.blok}>
        <p className={s.title}>Доходы</p>

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
