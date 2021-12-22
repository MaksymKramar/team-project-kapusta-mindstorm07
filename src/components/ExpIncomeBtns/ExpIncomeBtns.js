import styles from "./ExpIncomeBtns.module.scss";

export default function ExpIncomeBtns({ onClick, active }) {
  return (
    <div className={styles.btnWrapper}>
      <button
        type="bytton"
        onClick={onClick}
        value="expense"
        className={active === "expense" ? styles.active : styles.expBtn}
      >
        Расход
      </button>
      <button
        type="bytton"
        onClick={onClick}
        value="income"
        className={active === "income" ? styles.active : styles.incomeBtn}
      >
        Доход
      </button>
    </div>
  );
}
