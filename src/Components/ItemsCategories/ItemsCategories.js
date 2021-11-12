// import Button from '@mui/material/Button';
import sprite from "../../images/sprite.svg";
import styles from './ItemsCategories.module.css'

function ItemsCategories() {
return <div className={styles["dropdown"]}>
    <button className={styles["dropbtn"]}>Категория товара <svg width="12" height="20" className={styles["category-svg-down"]}>
      <use href={sprite + "#down"}></use>
    </svg>
    <svg width="12" height="20" className={styles["category-svg-up"]}>
      <use href={sprite + "#up"}></use>
    </svg>
    </button>
  <ul className={styles["dropdown-content"]}>
  <li className={styles["dropdown-content-a"]}>Транспорт</li>
  <li className={styles["dropdown-content-a"]}>Продукты</li>
  <li className={styles["dropdown-content-a"]}>Здоровье</li>
  <li className={styles["dropdown-content-a"]}>Алкоголь</li>
  <li className={styles["dropdown-content-a"]}>Развлечения</li>
  <li className={styles["dropdown-content-a"]}>Всё для дома</li>
  <li className={styles["dropdown-content-a"]}>Коммуналка, связь</li>
  <li className={styles["dropdown-content-a"]}>Спорт, хобби</li>
  <li className={styles["dropdown-content-a"]}>Образование</li>
  <li className={styles["dropdown-content-a"]}>Прочее</li>
  </ul>
</div>
}

export default ItemsCategories;
