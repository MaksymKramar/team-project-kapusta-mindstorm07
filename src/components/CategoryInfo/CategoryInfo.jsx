import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./CategoryInfo.module.scss";
import sprite from "../../images/sprite.svg";
import { getAllCategories } from "../../redux/operation/categories";

export default function CategoryInfo({ trans, handleClick }) {
  let categories = useSelector(getAllCategories);

  const [isActiveId, setIsActiveId] = useState("");

  // const summs = Object.values(
  //   trans.reduce((acc, { group, total_amounts }) => {
  //     const category = categories.find((i) => i._id === group.category);
  //     if (!acc[category.name]) {
  //       acc[category.name] = { category, total_amounts: 0 };
  //     }
  //     acc[category.name].total_amounts += total_amounts;
  //     return acc;
  //   }, {})
  // );

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
              handleClick(item.category._id);
              setIsActiveId(item.category._id);
            }}
          >
            <span className={s.price}>{item.value}</span>

            <div className={s.iconContainer}>
              <div
                className={
                  item.isActive === item.category._id
                    ? s.svgContainerActive
                    : s.svgContainer
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
