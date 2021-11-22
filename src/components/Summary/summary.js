import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTransByMonthMinus,
  getTransByMonthPlus,
} from "../../redux/transactions/";
import {
  getTransactionsFalse,
  getTransactionsTrue,
} from "../../redux/transactions/transactionsSelectors";
import { getAllCategories } from "../../redux/operation/categories";

import s from "./summary.module.scss";
import data from "./month.json";

const Summary = () => {
  // const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getTransByMonthMinus("11.2021"));
  //   }, [dispatch]);
  //   useEffect(() => {
  //     dispatch(getAllCategories());
  //   }, [dispatch]);

  const trueTransactions = useSelector(getTransactionsTrue);
  console.log(trueTransactions);
  const falseTransactions = useSelector(getTransactionsFalse);
  console.log(falseTransactions);

  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {data.map(({ _id, name, date, description, category, sum }) => (
          <li key={_id} className={s.summaryItem}>
            <p className={s.summaryDescription}>
              {name}
              {/* {data.find(monthData => monthData.id === month).name} */}
            </p>
            <p className={s.summaryDescription}>{sum}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
