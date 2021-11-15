import s from "./CategoryInfo.module.scss";
import sprite from "../../images/sprite.svg";

export default function CategoryInfo({ trans }) {
  return (
    <ul className={s.list}>
      {trans.length === 0 ? (
        <li className={s.transEmpty}>Транзакций нет</li>
      ) : (
        trans.map((item) => (
          <li key={item.category} className={s.item}>
            <span className={s.price}>{item.value}</span>

            <div className={s.iconContainer}>
              <div
                className={
                  item.isActive ? s.svgContainerActive : s.svgContainer
                }
              >
                <svg className={item.isActive ? s.iconActive : s.icon}>
                  <use xlinkHref={`${sprite}#${item.category}`} />
                </svg>
              </div>
            </div>

            <h3 className={s.titleItem}>{item.category}</h3>
          </li>
        ))
      )}
    </ul>
  );
}
