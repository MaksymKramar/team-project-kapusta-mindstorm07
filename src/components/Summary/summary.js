import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getTransByMonthMinus,
  getTransByMonthPlus,
} from "../../redux/transactions/";

import s from "./summary.module.scss";
import dataMonth from "./month.json";
import { getTransactionsTotalAmountFalse } from "../../redux/transactions/transactionsSelectors";

const Summary = () => {
  const totalAmount = useSelector(getTransactionsTotalAmountFalse);
  const [monthSummary, setMonthSummary] = useState(dataMonth);
  console.log(monthSummary);

  // if (dataMonth.id ) {
  //   setMonthSummary(dataMonth.map(...monthSummary,{suma:`${totalAmount}`}))
  // }
  // // const arr = dataMonth.map((month) => month.push('a'))

  // console.log(monthSummary)
  return (
    <div className={s.summaryContainer}>
      <h4 className={s.summaryTitle}>Сводка</h4>
      <ul className={s.summaryList}>
        {dataMonth.map(({ _id, name, date, description, category, sum }) => (
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
