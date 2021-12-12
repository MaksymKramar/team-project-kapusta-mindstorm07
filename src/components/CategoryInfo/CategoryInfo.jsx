import { useState } from "react";

import s from "./CategoryInfo.module.scss";
import sprite from "../../images/sprite.svg";
import { getAllCategories } from "../../redux/report";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/Spinner";

// import { getFullTransInfo } from "../../redux/report";
// import { getDescription } from "../../redux/report";
// import { getData } from "../../redux/transactionAdd/transactionADD-selectors";
import { getCategorySums } from "../../redux/report/reportSelectors";
import { isLoadingValue } from "../../redux/report";

export default function CategoryInfo({ trans, handleClick, onClick }) {
  const [isActiveId, setIsActiveId] = useState("");
  const categorySums = useSelector(getCategorySums) || [];

  const isLoading = useSelector(isLoadingValue);

  const filteredCategories = trans.filter((item) =>
    categorySums.find((i) => i.group === item._id)
  );

  return (
    <ul className={s.list}>
      {isLoading ? (
        <div className={s.spinner}>
          {" "}
          <Spinner
            width="40px"
            height="40px"
            color="#ff751d"
            type="Oval"
          />{" "}
        </div>
      ) : (
        <>
          {filteredCategories.length === 0 ? (
            <li className={s.transEmpty}>Транзакций нет</li>
          ) : (
            filteredCategories.map((item) => (
              <li
                key={item._id}
                className={s.item}
                onClick={() => {
                  onClick(item._id);
                  handleClick(item._id);
                  setIsActiveId(item._id);
                }}
              >
                <span className={s.price}>
                  {categorySums.map((i) => {
                    if (i.group === item._id) {
                      return i.totalCategory;
                    }
                  })}
                </span>

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
        </>
      )}
    </ul>
  );
}
