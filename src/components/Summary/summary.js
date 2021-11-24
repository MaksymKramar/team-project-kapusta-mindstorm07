import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import s from "./summary.module.scss";
import dataMonth from "./month.json";
import {
  getTransactionsTotalAmountFalse,
  getTransactionsTotalAmountTrue,
} from "../../redux/transactions/transactionsSelectors";

const Summary = ({ clickedTabId }) => {
  const dispatch = useDispatch();
  const date = new Date();

  const monthDate = date.getMonth() + 1;

  const totalAmountTrue = useSelector(getTransactionsTotalAmountTrue);
  const totalAmountFalse = useSelector(getTransactionsTotalAmountFalse);
  const allTotalAmount =
    clickedTabId === "expense" ? totalAmountFalse : totalAmountTrue;

  const [monthSummary, setMonthSummary] = useState(dataMonth);
  console.log(allTotalAmount);

  // =================================================
  // {"1":70000,
  // "2":8000,
  // "3":10000,
  // }
  //  =================================================
  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {dataMonth.map(({ _id, name, sum }) => (
          <li key={_id} className={s.summaryItem}>
            <p className={s.summaryDescription}>{name}</p>
            {/* <zxc dfds={_id}/>  */}
            {/* <p className={s.summaryDescription}>{amounts[_id]}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
