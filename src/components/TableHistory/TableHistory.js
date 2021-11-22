import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./TableHistory.module.scss";
import sprite from "../../images/sprite.svg";
import TableHistoryMobile from "../TabelHistoryMobile/TableHistoryMobile";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTransByMonthMinus,
  getTransByMonthPlus,
  deleteTransactionById,
} from "../../redux/transactions/";
import {
  getTransactionsFalse,
  getTransactionsTrue,
} from "../../redux/transactions/transactionsSelectors";
import { getAllCategories } from "../../redux/operation/categories";
import {
  getCategoriesExpenses,
  getCategoriesIncomes,
} from "../../redux/report";
import authSelector from "../../redux/auth/auth-selector";

// const categories = useSelector(selectors.getAllCategories)
// const change = (e) => {
//     categories.map(i => {
//       if(i.title === e.target.textContent ) {
//         setCategory(i._id)
//         setType(i.type)
//       }
//      })
//     // console.log(catItem)
//     setValue(e.target.textContent)
//   }

export default function TableHistory() {
  const transactionsFalse = useSelector(getTransactionsFalse);
  const transactionsTrue = useSelector(getTransactionsTrue);
  const balance = useSelector(authSelector.getBalance);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransByMonthMinus("11.2021"));
  }, [balance]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const expenses = useSelector(getCategoriesExpenses);
  const incomes = useSelector(getCategoriesIncomes);

  const trueTransactions = useSelector(getTransactionsTrue);
  console.log(trueTransactions);
  const falseTransactions = useSelector(getTransactionsFalse);
  console.log(falseTransactions);

  const matches = useMediaQuery("(min-width:768px)");

  if (matches) {
    return (
      <div className={styles.TableHistoryContainer}>
        <ul className={styles.TableHistoryHeader}>
          <li className={styles.TableHistoryHeaderRow}>Дата</li>
          <li className={styles.TableHistoryHeaderRow}>Описание</li>
          <li className={styles.TableHistoryHeaderRow}>Категория</li>
          <li className={styles.TableHistoryHeaderRow}>Сумма</li>
          <li className={styles.TableHistoryHeaderRow}></li>
        </ul>
        <ul className={styles.TableHistoryBody}>
          {/* false ? falseTransactions : trueTransactions*/}
          {falseTransactions.map(
            ({ _id, date, description, category, sum }) => (
              <li key={_id} className={styles.TableHistoryRow}>
                <div className={styles.TableHistoryDate}>{date}</div>
                <div className={styles.TableHistoryDescription}>
                  {description}
                </div>
                <div className={styles.TableHistoryCategory}>{category}</div>
                <div className={styles.TableHistoryAmount}>{sum + "грн."} </div>
                <button
                  className={styles.TrashIcon}
                  type="button"
                  onClick={() => dispatch(deleteTransactionById(_id))}
                >
                  <svg width="18px" height="18px">
                    <use href={sprite + "#icon-delete-1"} />
                  </svg>
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    );
  } else {
    return <TableHistoryMobile />;
  }
}
