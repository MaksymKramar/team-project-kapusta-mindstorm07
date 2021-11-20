import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./CategoryInfo.module.scss";
import sprite from "../../images/sprite.svg";
// import { getAllCategories } from "../../redux/report";

export default function CategoryInfo({ trans, handleClick }) {
  // let categories = useSelector(getAllCategories);

  const [isActiveId, setIsActiveId] = useState("");

  return (
    <ul className={s.list}>
      {trans.length === 0 ? (
        <li className={s.transEmpty}>Транзакций нет</li>
      ) : (
        trans.map((item) => (
          <li
            key={item.category}
            className={s.item}
            onClick={() => {
              handleClick(item._id);
              setIsActiveId(item._id);
            }}
          >
            <span className={s.price}>{item.value}</span>

            <div className={s.iconContainer}>
              <div
                className={
                  item.isActive === item._id
                    ? s.svgContainerActive
                    : s.svgContainer
                }
              >
                <svg className={item.isActive ? s.iconActive : s.icon}>
                  <use xlinkHref={`${sprite}#${item.title}`} />
                </svg>
              </div>
            </div>

            <h3 className={s.titleItem}>{item.title}</h3>
          </li>
        ))
      )}
    </ul>
  );
}
