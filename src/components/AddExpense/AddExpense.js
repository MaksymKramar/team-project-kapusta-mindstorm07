import ItemCategories from "../ItemsCategories/ItemsCategories";
import sprite from "../../images/sprite.svg";
import styles from "./AddExpense.module.css";

export default function AddExpense() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemDiv}>
            <input className={styles.itemInput} placeholder="Описание товара" />
            <ItemCategories />
          </div>
          <div className={styles.amountDiv}>
            <input className={styles.amountInput} placeholder="00.00 UAH" />
            <button className={styles.calculatorBtn}>
              <svg width="20" height="20" className={styles["report-svg"]}>
                <use href={sprite + "#icon-calculator"}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.btnsDiv}>
          <button className={styles.enterBtn}>Ввод</button>
          <button className={styles.clearBtn}>Очистить</button>
        </div>
      </div>
    </div>
  );
}
