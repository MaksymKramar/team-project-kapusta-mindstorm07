import styles from "./Balance.module.css";
import sprite from "../../images/sprite.svg";

function Balance() {
  return (
    <div className={styles["container"]}>
      <div className={styles["report-link-container"]}>
        <a href="123" className={styles["report-link"]}>
          Перейти к отчетам
        </a>
        <svg width="14" height="14" className={styles["report-svg"]}>
          <use href={sprite + "#icon-schedule"}></use>
        </svg>
      </div>
      <div className={styles["balance-container"]}>
        <p className={styles["balance-name"]}>Баланс:</p>
        <div className={styles["balance-container2"]}>
          <p className={styles["balance-amount"]}> UAH</p>
          <button className={styles["balance-btn"]}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
}

export default Balance;
