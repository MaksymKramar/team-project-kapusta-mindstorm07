import styles from './ItemsCategories.module.css'

function ItemsCategories() {
  return <select className={styles["itemsCategoriesGroup"]}>
            <option selected className={styles["itemCategory"]}>Категория товара</option>
            <option className={styles["itemCategory"]}>Транспорт</option>
            <option className={styles["itemCategory"]}>Продукты</option>
            <option className={styles["itemCategory"]}>Здоровье</option>
            <option className={styles["itemCategory"]}>Алкоголь</option>
            <option className={styles["itemCategory"]}>Развлечения</option>
            <option className={styles["itemCategory"]}>Всё для дома</option>
            <option className={styles["itemCategory"]}>Техника</option>
            <option className={styles["itemCategory"]}>Коммуналка, связь</option>
            <option className={styles["itemCategory"]}>Спорт, хобби</option>
            <option className={styles["itemCategory"]}>Образование</option>
            <option className={styles["itemCategory"]}>Прочее</option>
        </select>
}

export default ItemsCategories;
