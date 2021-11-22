// import Button from '@mui/material/Button';
import { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import * as operations from "../../redux/transactionAdd/transactionAdd-operations";
import {getCategoriesAll} from "../../redux/transactionAdd/transactionADD-selectors";
import sprite from "../../images/sprite.svg";
import styles from "./ItemsCategories.module.css";

function ItemsCategories() {
  // const [category, setCategories] = useState('');
  const [value, setValue] = useState('Категория товара');
  const [category, setCategory] = useState('');
  
  const dispatch = useDispatch();

  const getCategoriesItem = () => {
    dispatch(operations.getGategories());
  }

  const categories = useSelector(getCategoriesAll)

  const change = (e) => {
    console.log(e)
    setValue(e.target.textContent)
    setCategory(e.target.__reactProps$qk4iqhvwvj.value)
    console.log(category)
  }

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
        {categories.map(category => (
                  <li className={styles["dropdown-content-a"]} key={category._id} value={category._id} onClick={change}>{category.title}</li>
                ))

                }
        {/* <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Категория товара</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Транспорт</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Продукты</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Здоровье</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Алкоголь</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Развлечения</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Всё для дома</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Коммуналка, связь</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Спорт, хобби</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Образование</li>
        <li className={styles["dropdown-content-a"]} value={value} onClick={change}>Прочее</li> */}
      </ul>
    </div>
  );
}

export default ItemsCategories;
