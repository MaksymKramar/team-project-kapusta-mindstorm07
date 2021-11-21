import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBalance } from '../../redux/balance/balance-operations';
// import { balanceSum } from '../../redux/balance/balance-selectors';

import styles from "./Balance.module.css";
import sprite from "../../images/sprite.svg";

function Balance() {

const [balance, setBalance] = useState(0);

  // const balance = useSelector(balanceSum);
  const dispatch = useDispatch();

  const handleChange = e => {
    const {value} = e.target;
    console.log(e.currentTarget.value)
    setBalance(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(balance)
    dispatch(createBalance({ balance }));


  };
  // const reset = () => {
  //   setBalance('');
  // };

  return (
    <div className={styles["container"]}>
      <div className={styles["report-link-container"]}>
        <a href="/report" className={styles["report-link"]}>
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
          placeholder={balance + 'UAH'}
          onBlur={handleChange}
          disabled={balance} />
          <button className={styles["balance-btn"]}>Подтвердить</button>
        </div>
      </form>
    </div>
  );
}

export default Balance;