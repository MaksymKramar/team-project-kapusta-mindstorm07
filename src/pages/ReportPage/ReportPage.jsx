import Header from "../../components/Header/Header";
import BackBtn from "../../components/BackBtn/BackBtn";
import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";
import BackgrounUser from "../../components/BackgroundUser/BackgroundUser";
import BalanceForReports from "../../components/BalanceForReports/BalanceForReports";
import Balance from "../../components/Balance/Balance";
import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
import s from "./ReportPage.module.scss";

import { useState, useEffect } from "react";
import {
  getTransByMonthPlus,
  getTransByMonthMinus,
} from "../../redux/transactions";
import {
  getTransactionsTotalAmountFalse,
  getTransactionsTotalAmountTrue,
} from "../../redux/transactions";
import { useDispatch, useSelector } from "react-redux";

export default function ReportPage({ setActive }) {
  let date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  const totalIncomes = useSelector(getTransactionsTotalAmountTrue);
  const totalExpences = useSelector(getTransactionsTotalAmountFalse);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransByMonthPlus(`${month}.${year}`));
    dispatch(getTransByMonthMinus(`${month}.${year}`));
  }, [dispatch, month, year]);

  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth((prev) => (prev += 1));
    } else {
      setMonth(1);
      setYear((prev) => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear((prev) => (prev -= 1));
    } else {
      setMonth((prev) => (prev -= 1));
    }
  };

  return (
    <>
      <Header setActive={setActive} />
      <BackgrounUser />
      <div className={s.wrapper}>
        <div className={s.secondWrapper}>
          <BackBtn />
          <div className={s.currentPeriod}>
            <CurrentPeriod
              month={month}
              year={year}
              onHandleClickRight={onHandleClickRight}
              onHandleClickLeft={onHandleClickLeft}
            />
          </div>
          <BalanceForReports />
        </div>
        <ExpensesIncome
          totalIncomes={totalIncomes}
          totalExpences={totalExpences}
          month={month}
          year={year}
        />
      </div>
    </>
  );
}
