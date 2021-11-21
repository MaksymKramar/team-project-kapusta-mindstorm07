import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBalance } from "../../redux/balance/balance-operations";
// import { balanceSum } from '../../redux/balance/balance-selector';

import styles from "./Balance.module.css";
import sprite from "../../images/sprite.svg";
import { NavLink } from "react-router-dom";

function Balance() {
  const [balanceAmount, setbalanceAmount] = useState(0);

  // const balance = useSelector(balanceSum);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setbalanceAmount(value);
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(balanceAmount);
    dispatch(createBalance({ balanceAmount }));
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
            onClick={handleChange}
          />
          <button className={styles["balance-btn"]}>Подтвердить</button>
        </div>
      </form>
    </div>
  );
}

export default Balance;
