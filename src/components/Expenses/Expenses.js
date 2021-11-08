import s from "./Expenses.module.scss";
import sprite from "../../images/sprite.svg";

export default function Expenses() {
  return (
    <div className={s.expenses}>
      <div className={s.blok}>
        <p className={s.title}>Расходы</p>

        <div>
          <ul className={s.list}>
            <div className={s.pseudoelementFirst}>
              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-Group"}></use>
                  </svg>
                </div>
                <p className={s.category}>Продукты</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-cocktail"}></use>
                  </svg>
                </div>
                <p className={s.category}>Алкоголь</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-kite"}></use>
                  </svg>
                </div>
                <p className={s.category}>Развлечение</p>
              </li>
            </div>

            <div className={s.pseudoelementSecond}>
              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-hands-holding-heart"}></use>
                  </svg>
                </div>
                <p className={s.category}>Здоровье</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-car"}></use>
                  </svg>
                </div>
                <p className={s.category}>Транспорт</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-couch"}></use>
                  </svg>
                </div>
                <p className={s.category}>все для дома</p>
              </li>
            </div>

            <div className={s.pseudoelementThird}>
              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-tools"}></use>
                  </svg>
                </div>
                <p className={s.category}>техника</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-invoice"}></use>
                  </svg>
                </div>
                <p className={s.category}>коммуналка, связь</p>
              </li>

              <li className={s.item}>
                <span className={s.price}></span>
                <div className={s.bg}>
                  <svg className={s.icon}>
                    <use href={sprite + "#icon-clay"}></use>
                  </svg>
                </div>
                <p className={s.category}>спорт, хобби</p>
              </li>
            </div>

            <li className={s.item}>
              <span className={s.price}></span>
              <div className={s.bg}>
                <svg className={s.icon}>
                  <use href={sprite + "#icon-book"}></use>
                </svg>
              </div>
              <p className={s.category}>образование</p>
            </li>

            <li className={s.item}>
              <span className={s.price}></span>
              <div className={s.bg}>
                <svg className={s.icon}>
                  <use href={sprite + "#icon-ufo"}></use>
                </svg>
              </div>
              <p className={s.category}>прочее</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={(s.costs, s.blok)}>
        <ul className={s.costsList}>
          <li className={s.costsItem}>
            <p className={s.costsType}>Свинина</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Говядина</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Курица</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Рыба</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Панини</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Кофе</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Спагетти</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Шоколад</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Маслины</p>
            <p className={s.costsPrice}>грн</p>
          </li>

          <li className={s.costsItem}>
            <p className={s.costsType}>Зелень</p>
            <p className={s.costsPrice}>грн</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
