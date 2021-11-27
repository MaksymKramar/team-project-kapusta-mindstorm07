import styles from "./ExpIncomeBtns.module.scss";

export default function ExpIncomeBtns({ onClick }) {
  return (
    <div className={styles.btnWrapper}>
      <button
        type="bytton"
        onClick={onClick}
        value="expense"
        className={styles.expBtn}
      >
        Расход
      </button>
      <button
        type="bytton"
        onClick={onClick}
        value="income"
        className={styles.incomeBtn}
      >
        Доход
      </button>
    </div>
  );
}
