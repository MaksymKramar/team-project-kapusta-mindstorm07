import styles from "./TableHistoryMobile.module.scss";
import sprite from "../../images/sprite.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getTransByMonthMinus,
  getTransByMonthPlus,
  deleteTransactionById,
} from "../../redux/transactions/";
import { getAllCategories } from "../../redux/operation/categories";
import {
  getCategoriesExpenses,
  getCategoriesIncomes,
} from "../../redux/report";
import authSelector from "../../redux/auth/auth-selector";
import { getData } from "../../redux/transactionAdd/transactionADD-selectors";
import Spinner from "../Spinner/Spinner";
import { getLoading } from "../../redux/transactions/transactionsSelectors";

export default function TableHistoryMobile({
  allTransactions,
  clickedTabId,
  setActiveDelete,

  setId,
}) {
  const balance = useSelector(authSelector.getBalance);

  const dispatch = useDispatch();
  // const date = new Date();
  const isloading = useSelector(getLoading);

  const date = useSelector(getData);

  const month = date.split(".")[1];
  const year = date.split(".")[2];

  useEffect(() => {
    dispatch(getTransByMonthPlus(`${month}.${year}`));
  }, [balance, date]);
  useEffect(() => {
    dispatch(getTransByMonthMinus(`${month}.${year}`));
  }, [balance, date]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const expenses = useSelector(getCategoriesExpenses);
  const incomes = useSelector(getCategoriesIncomes);
  const allCategories = [...expenses, ...incomes];

  const deleteHandler = (_id) => {
    setId(_id);
    setActiveDelete(true);
  };

  return (
    <div className={styles.tableContainer}>
      <ul className={styles.table}>
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
                  <li key={_id} className={styles.tableRow}>
                    <div className={styles.tableCollapseColumn}>
                      <span className={styles.tableDate}>{date}</span>
                      <span className={styles.tableDescription}>
                        {description}
                      </span>
                    </div>

                    <div className={styles.tableCategory}>
                      {relativeCategObdj?.title ?? "Нет такой категории"}
                    </div>
                    <div className={styles.tableAmount}>
                      {clickedTabId === "expense" ? (
                        <span className={styles.TableHistoryMobExpense}>
                          {`-${sum}  грн.`}{" "}
                        </span>
                      ) : (
                          <span className={styles.TableHistoryMobIncome}>
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
              <li key={_id} className={styles.tableRow}>
                <div className={styles.tableCollapseColumn}>
                  <span className={styles.tableDate}>{date}</span>
                  <span className={styles.tableDescription}>{description}</span>
                </div>

                <div className={styles.tableCategory}>
                  {relativeCategObdj?.title ?? 'Нет такой категории'}
                </div>
                <div className={styles.tableAmount}>
                  {clickedTabId === 'expense' ? (
                    <span className={styles.TableHistoryMobExpense}>
                      {`-${sum}  грн.`}{' '}
                    </span>
                  ) : (
                    <span className={styles.TableHistoryMobIncome}>
                      {`+${sum}  грн.`}{' '}
                    </span>
                  )}
                </div>
                <button
                  className={styles.TrashIcon}
                  type="button"
                  onClick={() => deleteHandler(_id)}
                >
                  <svg className={styles.iconDelete} width="18px" height="18px">
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
}
