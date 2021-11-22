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

export default function TableHistory() {
  const transactionsFalse = useSelector(getTransactionsFalse);
  const transactionsTrue = useSelector(getTransactionsTrue);
  const balance = useSelector(authSelector.getBalance);

  const dispatch = useDispatch();
  const date = new Date();

  useEffect(() => {
    dispatch(
      getTransByMonthMinus(`${date.getMonth() + 1}.${date.getFullYear()}`)
    );
  }, [balance]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const expenses = useSelector(getCategoriesExpenses);
  const incomes = useSelector(getCategoriesIncomes);
  const allCategories = [...expenses, ...incomes];

  const trueTransactions = useSelector(getTransactionsTrue);
  const falseTransactions = useSelector(getTransactionsFalse);
  const allTransactions = false ? falseTransactions : trueTransactions;

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
            ({ _id, date, description, category, sum, type }) => {
              // console.log(type)
              const relativeCategObdj = allCategories.find((categoryObj) => {
                return category === categoryObj._id;
              });
              return (
                <li key={_id} className={styles.TableHistoryRow}>
                  <div className={styles.TableHistoryDate}>{date}</div>
                  <div className={styles.TableHistoryDescription}>
                    {description}
                  </div>
                  <div className={styles.TableHistoryCategory}>
                    {relativeCategObdj?.title ?? "Нет такой категории"}
                  </div>
                  <div className={styles.TableHistoryAmount}>
                    {`${sum}  грн.`}{" "}
                  </div>
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
              );
            }
          )}
        </ul>
      </div>
    );
  } else {
    return <TableHistoryMobile />;
  }
}
