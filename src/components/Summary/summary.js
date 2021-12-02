import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import s from "./summary.module.scss";
import {
  getSummaryExpenses,
  getSummaryIncomes,
} from "../../redux/transactions/transactionsSelectors";
import authSelector from "../../redux/auth/auth-selector";

import { getSummary } from "../../redux/transactions";

const Summary = ({ clickedTabId }) => {
  const dispatch = useDispatch();
  const balance = useSelector(authSelector.getBalance);

  useEffect(() => {
    dispatch(getSummary());
  }, [balance, dispatch]);

  const summaryIncomes = useSelector(getSummaryIncomes);
  const summaryExpenses = useSelector(getSummaryExpenses);

  const summary = clickedTabId === "expense" ? summaryExpenses : summaryIncomes;

  const formatter = Intl.DateTimeFormat("ru", { month: "long" });
  // const date = new Date(2021, 09)
  // console.log(date)
  // console.log(formatter.format(date))

  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {summary.length > 0 &&
          summary.map(({ _id: { month, year, type }, total }) => (
            <li key={month} className={s.summaryItem}>
              <p className={s.summaryDescription}>
                {formatter.format(new Date(year, month - 1)).toUpperCase()}
              </p>

              <p className={s.summaryDescription}>{total}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Summary;
