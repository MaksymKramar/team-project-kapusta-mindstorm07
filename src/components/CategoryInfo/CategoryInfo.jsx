import { useState } from "react";

import s from "./CategoryInfo.module.scss";
import sprite from "../../images/sprite.svg";
import { getAllCategories } from "../../redux/report";
import { useSelector, useDispatch } from "react-redux";

import { getFullTransInfo } from "../../redux/report";
import { getDescription } from "../../redux/report";
import { getData } from "../../redux/transactionAdd/transactionADD-selectors";

export default function CategoryInfo({ trans, handleClick, type }) {
  let categories = useSelector(getAllCategories);
  const data = useSelector(getData);
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
  // const type = {type}

  const [isActiveId, setIsActiveId] = useState("");
  const dispatch = useDispatch();

  const onClick = (e) => {
    //console.log(e.target.value);

    dispatch(getFullTransInfo({ data, type }));
  };

  // useEffect(() =>{
  //   dispatch(getFullTransInfo())
  // }, [])

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
              onClick();

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
