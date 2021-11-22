import { useSelector } from "react-redux";
import styles from "./BalanceForReports.module.css";
import authSelector from "../../redux/auth/auth-selector";

function BalanceForReports() {
  const balance = useSelector(authSelector.getBalance);

  return (
    <div className={styles["container"]}>
      <div className={styles["balance-container"]}>
        <p className={styles["balance-name"]}>Баланс:</p>
        <div className={styles["balance-container2"]}>
            <span className={styles["balance-amount"]}>{balance + "UAH"}</span>
        </div>
      </div>
      </div>
  );
}

export default BalanceForReports;
