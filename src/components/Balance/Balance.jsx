import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBalance } from "../../redux/balance/balance-operations";
// import { balanceSum } from '../../redux/balance/balance-selectors';

import styles from "./Balance.module.css";
import sprite from "../../images/sprite.svg";
import { NavLink } from "react-router-dom";

import authSelector from "../../redux/auth/auth-selector";

function Balance() {
  const [balanceAmount, setbalanceAmount] = useState(0);

  const balance = useSelector(authSelector.getBalance);

  //const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    const valueNum = Number(value);
    console.log(typeof valueNum);
    setbalanceAmount(valueNum);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(balance)
    dispatch(createBalance({ balance: balanceAmount }));
  };
  // const reset = () => {
  //   setBalance('');
  // };

  return (
    <div className={styles["container"]}>
      <div className={styles["report-link-container"]}>
        <NavLink to="/report" exact className={styles["report-link"]}>
          Перейти к отчетам
        </NavLink>
        <svg width="14" height="14" className={styles["report-svg"]}>
          <use href={sprite + "#icon-schedule"}></use>
        </svg>
      </div>
      <form className={styles["balance-container"]} onSubmit={handleSubmit}>
        <p className={styles["balance-name"]}>Баланс:</p>
        <div className={styles["balance-container2"]}>
          <input
            className={styles["balance-amount"]}
            placeholder={balance + "UAH"}
            onChange={handleChange}
            disabled={balance}
          />

          <button className={styles["balance-btn"]}>Подтвердить</button>
        </div>
      </form>
    </div>
  );
}

export default Balance;
