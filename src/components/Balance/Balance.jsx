import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { createBalance } from '../../redux/balance/balance-operations'
import { createBalance } from "../../redux/auth/auth-operation";
// import { balanceSum } from '../../redux/balance/balance-selector';
import { useSelector } from "react-redux";

import styles from "./Balance.module.css";
import sprite from "../../images/sprite.svg";
import { NavLink } from "react-router-dom";

import authSelector from "../../redux/auth/auth-selector";

function Balance() {
  const [balanceAmount, setbalanceAmount] = useState(0);

  const balance = useSelector(authSelector.getBalance);

  useEffect(() => {
    setbalanceAmount(balance);
  }, []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    const valueNum = Number(value);
    setbalanceAmount(valueNum);
    // console.log(typeof valueNum)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(balanceAmount);
    dispatch(createBalance({ balance: balanceAmount }));
    // reset();
  };
  // const reset = () => {
  //   setName('');
  //   setNumber('');
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
            type="number"
            className={styles["balance-amount"]}
            placeholder={balanceAmount + " UAH"}
            onChange={handleChange}
          />
          <button className={styles["balance-btn"]}>Подтвердить</button>
        </div>
      </form>
    </div>
  );
}

export default Balance;
