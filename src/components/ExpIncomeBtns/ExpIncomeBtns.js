import styles from "./ExpIncomeBtns.module.css";

export default function ExpIncomeBtns() {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.expBtn}>Расход</button>
      <button className={styles.incomeBtn}>Доход</button>
    </div>
  );
}
