import Header from "../../components/Header/Header";
import AddExpense from "../../components/AddExpense/AddExpense";
import AddIncome from "../../components/AddIncome/AddIncome";
import Balance from "../../components/Balance/Balance";
import ExpIncomeBtns from "../../components/ExpIncomeBtns/ExpIncomeBtns";
import TableHistory from "../../components/TableHistory/TableHistory";
import Summary from "../../components/Summary/summary";
import s from "./MainPage.module.scss";
import BackgrounUser from "../../components/BackgroundUser/BackgroundUser";

import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux/auth/auth-operation";

import {
  getTransactionsFalse,
  getTransactionsTrue,
} from "../../redux/transactions/transactionsSelectors";
import { useEffect, useState } from "react";
import * as operations from "../../redux/transactionAdd/transactionAdd-operations";

export default function MainPage({ setActive, setActiveDelete, setId }) {
  const transactionsFalse = useSelector(getTransactionsFalse);
  const transactionsTrue = useSelector(getTransactionsTrue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch, transactionsFalse, transactionsTrue]);

  useEffect(() => {
    dispatch(operations.getGategories());
  }, [dispatch]);

  const [clickedTabId, setСlickedTabID] = useState("expense");

  const eventBtn = (e) => {
    setСlickedTabID(e.target.value);
  };

  return (
    <>
      <div className={s.mainPage}>
        <Header setActive={setActive} />
        <BackgrounUser />
        <div className={s.container}>
          <section className={s.section}>
            <Balance />

            <div className={s.btn1} active>
              <ExpIncomeBtns onClick={eventBtn} />
            </div>
            <div className={s.tableWraper}>
              <div className={s.balanceString}>
                {clickedTabId === "income" && <AddIncome />}
                {clickedTabId === "expense" && <AddExpense />}
              </div>

              <div className={s.allTables}>
                <TableHistory
                  clickedTabId={clickedTabId}
                  setActiveDelete={setActiveDelete}
                  setId={setId}
                />
                <Summary clickedTabId={clickedTabId} />
              </div>
              <div className={s.btn2}>
                <ExpIncomeBtns onClick={eventBtn} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
