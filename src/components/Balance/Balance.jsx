import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Balance.module.css";
import sprite from "../../images/sprite.svg";
import { NavLink } from "react-router-dom";
import { createBalance } from "../../redux/auth/auth-operation";

import authSelector from "../../redux/auth/auth-selector";

import Notification  from "../Notification/Notification";

function Balance() {
  const [balanceAmount, setbalanceAmount] = useState(0);

  const balance = useSelector(authSelector.getBalance);

  useEffect(() => {
    setbalanceAmount(balance);
  }, []);

  const dispatch = useDispatch();


  
  const handleChange = (e) => {
    const { value } = e.target;
    const valueNum = Number(value);
    setbalanceAmount(valueNum);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBalance({ balance: balanceAmount }));
  };

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
            placeholder={`${balance}  UAH`}
            onChange={handleChange}
            disabled={balance}
          />
          {balanceAmount === 0 && (
            <Notification />
          
          )}
           
          <button type="submit"className={styles["balance-btn"]}>Подтвердить</button>
        </div>
        
      </form>
      
    </div>
  );
}

export default Balance;
