import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import s from "./summary.module.scss";
import {
  getSummaryExpenses,
  getSummaryIncomes,
  getIsLoadingSummary,
} from "../../redux/transactions/transactionsSelectors";
import authSelector from "../../redux/auth/auth-selector";
import { getSummary } from "../../redux/transactions";

import Spinner from "../Spinner/Spinner";
import ProjectLoader from "../ProjectLoader/ProjectLoader";

const Summary = ({ clickedTabId }) => {
  const dispatch = useDispatch();
  const balance = useSelector(authSelector.getBalance);
  const summaryIncomes = useSelector(getSummaryIncomes);
  const summaryExpenses = useSelector(getSummaryExpenses);
  const isLoading = useSelector(getIsLoadingSummary);

  useEffect(() => {
    dispatch(getSummary());
  }, [balance, dispatch]);

  const summary = clickedTabId === "expense" ? summaryExpenses : summaryIncomes;

  const formatter = Intl.DateTimeFormat("ru", { month: "long" });

  const formatData = (year, month) => {
    return formatter.format(new Date(year, month - 1)).toUpperCase();
  };

  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {isLoading ? (
          <div className={s.spinner}>
            {" "}
            <Spinner
              width="40px"
              height="40px"
              color="#ff751d"
              type="Oval"
            />{" "}
          </div>
        ) : (
          summary.length > 0 &&
          summary.map(({ _id: { month, year }, total }) => (
            <li key={month} className={s.summaryItem}>
              <p className={s.summaryDescription}>{formatData(year, month)}</p>

              <p className={s.summaryDescription}>{total}</p>
            </li>
          ))
        )}

        {/* {summary.length > 0 &&
          summary.map(({ _id: { month, year }, total }) => (
            <li key={month} className={s.summaryItem}>
              <p className={s.summaryDescription}> */}
        {/* {formatter.format(new Date(year, month - 1)).toUpperCase()} */}
        {/* {formatData(year, month)}
              </p>

              <p className={s.summaryDescription}>{total}</p>
            </li>
          ))} */}
      </ul>
    </div>
  );
};

export default Summary;
