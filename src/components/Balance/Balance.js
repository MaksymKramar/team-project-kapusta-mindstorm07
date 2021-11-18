import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBalance } from '../../redux/balance/balance-operations';
import { balanceSum } from '../../redux/balance/balance-selector';

import styles from "./Balance.module.css";
import sprite from "../../images/sprite.svg";

function Balance() {

const [balanceAmount, setbalanceAmount] = useState(0);

  const balance = useSelector(balanceSum);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    setbalanceAmount(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
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
        <a href="123" className={styles["report-link"]}>
          Перейти к отчетам
        </a>
        <svg width="14" height="14" className={styles["report-svg"]}>
          <use href={sprite + "#icon-schedule"}></use>
        </svg>
      </div>
      <form className={styles["balance-container"]}
        onSubmit={handleSubmit}>
        <p className={styles["balance-name"]}>Баланс:</p>
        <div className={styles["balance-container2"]}>
          <input 
          className={styles["balance-amount"]} 
          placeholder={balance + ' UAH'}
          onClick={handleChange} />
          <button className={styles["balance-btn"]}>Подтвердить</button>
        </div>
      </form>
    </div>
  );
}

export default Balance;
