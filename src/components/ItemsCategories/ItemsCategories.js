import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as operations from "../../redux/transactionAdd/transactionAdd-operations";
import { getCategoriesAll } from "../../redux/transactionAdd/transactionADD-selectors";
import sprite from "../../images/sprite.svg";
import styles from "./ItemsCategories.module.scss";

function ItemsCategories() {
  const [value, setValue] = useState("Категория товара");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const getCategoriesItem = () => {
    dispatch(operations.getGategories());
  };

  const categories = useSelector(getCategoriesAll);

  const change = (e) => {
    setValue(e.target.textContent);
    setCategory(e.target.__reactProps$qk4iqhvwvj.value);
  };

  return (
    <div className={styles["dropdown"]}>
      <button className={styles["dropbtn"]} onClick={getCategoriesItem}>
        {value}
        <svg width="12" height="20" className={styles["category-svg-down"]}>
          <use href={sprite + "#down"}></use>
        </svg>
        <svg width="12" height="20" className={styles["category-svg-up"]}>
          <use href={sprite + "#up"}></use>
        </svg>
      </button>
      <ul className={styles["dropdown-content"]}>
        {categories.map((category) => (
          <li
            className={styles["dropdown-content-a"]}
            key={category._id}
            value={category._id}
            onClick={change}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsCategories;
