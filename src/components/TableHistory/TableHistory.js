import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./TableHistory.module.scss";
import sprite from "../../images/sprite.svg";
import TableHistoryMobile from "../TabelHistoryMobile/TableHistoryMobile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import {
  getTransByMonthMinus,
  getTransByMonthPlus,
  deleteTransactionById,
} from "../../redux/transactions/";
import {
  getTransactionsListTrue,
  getTransactionsListFalse,
  getLoading,
} from "../../redux/transactions/transactionsSelectors";
import { getAllCategories } from "../../redux/operation/categories";
import {
  getCategoriesExpenses,
  getCategoriesIncomes,
} from "../../redux/report";
import authSelector from "../../redux/auth/auth-selector";
import Spinner from "../Spinner/Spinner";

import { getData } from "../../redux/transactionAdd/transactionADD-selectors";

export default function TableHistory({ clickedTabId, setActiveDelete, setId }) {
  const balance = useSelector(authSelector.getBalance);

  const isloading = useSelector(getLoading);

  const date = useSelector(getData);

  const month = date.split(".")[1];
  const year = date.split(".")[2];

  const dispatch = useDispatch();
  // const date = new Date()

  useEffect(() => {
    dispatch(getTransByMonthPlus(`${month}.${year}`));
  }, [dispatch, balance, date]);

  // useEffect(() => {
  //   dispatch(
  //     getTransByMonthPlus(`${date.getMonth() + 1}.${date.getFullYear()}`),
  //   )
  // }, [dispatch, balance])
  useEffect(() => {
    dispatch(getTransByMonthMinus(`${month}.${year}`));
  }, [dispatch, balance, date]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const expenses = useSelector(getCategoriesExpenses);
  const incomes = useSelector(getCategoriesIncomes);
  const allCategories = [...expenses, ...incomes];

  const trueTransactions = useSelector(getTransactionsListTrue);
  const falseTransactions = useSelector(getTransactionsListFalse);
  const allTransactions =
    clickedTabId === "expense" ? falseTransactions : trueTransactions;

  const matches = useMediaQuery("(min-width:768px)");

  const deleteHandler = (_id) => {
    setId(_id);
    setActiveDelete(true);
  };

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
          {isloading ? (
            <div className={styles.spinner}>
              <Spinner width="40px" height="40px" color="#ff751d" type="Oval" />
            </div>
          ) : (
              allTransactions.map(
                ({ _id, date, description, category, sum, type }) => {
                  const relativeCategObdj = allCategories.find((categoryObj) => {
                    return category === categoryObj._id;
                  });
                  return (
                    <li key={_id} className={styles.TableHistoryRow}>
                      <div className={styles.TableHistoryDate}>{date}</div>

                      <div className={styles.TableHistoryDescription}>
                        <LinesEllipsis
                          text={description}
                          maxLine="1"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                      </div>

                      <div className={styles.TableHistoryCategory}>
                        {relativeCategObdj?.title ?? "Нет такой категории"}
                      </div>
                      <div className={styles.TableHistoryAmount}>
                        {clickedTabId === "expense" ? (
                          <span className={styles.TableHistoryAmountExpense}>
                            {`-${sum}  грн.`}{" "}
                          </span>
                        ) : (
                            <span className={styles.TableHistoryAmountIncome}>
                              {`+${sum}  грн.`}{" "}
                            </span>
                          )}
                      </div>
                      <button
                        className={styles.TrashIcon}
                        type="button"
                        // onClick={() => deleteHandler(_id)}
                        onClick={(e) => {
                          deleteHandler(_id);
                          document.body.style.overflow = "hidden";
                        }}
                      >
                        <svg
                          className={styles.iconDelete}
                          width="18px"
                          height="18px"
                        >
                          <use href={sprite + "#icon-delete-1"} />
                        </svg>
                      </button>
                    </li>
                  );
                }
              )
            )}
          {/* {allTransactions.map(
            ({ _id, date, description, category, sum, type }) => {
              const relativeCategObdj = allCategories.find((categoryObj) => {
                return category === categoryObj._id
              })
              return (
                <li key={_id} className={styles.TableHistoryRow}>
                  <div className={styles.TableHistoryDate}>{date}</div>
                  <div className={styles.TableHistoryDescription}>
                    {description}
                  </div>
                  <div className={styles.TableHistoryCategory}>
                    {relativeCategObdj?.title ?? 'Нет такой категории'}
                  </div>
                  <div className={styles.TableHistoryAmount}>
                    {clickedTabId === 'expense' ? (
                      <span className={styles.TableHistoryAmountExpense}>
                        {`-${sum}  грн.`}{' '}
                      </span>
                    ) : (
                      <span className={styles.TableHistoryAmountIncome}>
                        {`+${sum}  грн.`}{' '}
                      </span>
                    )}
                  </div>
                  <button
                    className={styles.TrashIcon}
                    type="button"
                    onClick={() => deleteHandler(_id)}
                  >
                    <svg
                      className={styles.iconDelete}
                      width="18px"
                      height="18px"
                    >
                      <use href={sprite + '#icon-delete-1'} />
                    </svg>
                  </button>
                </li>
              )
            },
          )} */}
        </ul>
      </div>
    );
  } else {
    return (
      <TableHistoryMobile
        clickedTabId={clickedTabId}
        allTransactions={allTransactions}
        setActiveDelete={setActiveDelete}
        setId={setId}
      />
    );
  }
}
