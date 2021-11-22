import styles from "./TableHistoryMobile.module.scss";
import sprite from "../../images/sprite.svg";

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

export default function TableHistoryMobile() {
  const dispatch = useDispatch();
  const date = new Date();

  useEffect(() => {
    dispatch(
      getTransByMonthMinus(`${date.getMonth() + 1}.${date.getFullYear()}`)
    );
  }, []);
  useEffect(() => {
    dispatch(
      getTransByMonthPlus(`${date.getMonth() + 1}.${date.getFullYear()}`)
    );
  }, [date, dispatch]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const expenses = useSelector(getCategoriesExpenses);
  const incomes = useSelector(getCategoriesIncomes);
  const allCategories = [...expenses, ...incomes];

  const trueTransactions = useSelector(getTransactionsTrue);
  const falseTransactions = useSelector(getTransactionsFalse);
  const allTransactions = false ? falseTransactions : trueTransactions;
  return (
    <div className={styles.tableContainer}>
      <ul className={styles.table}>
        {falseTransactions.map(
          ({ _id, date, description, category, sum, type }) => {
            //  console.log(type)
            const relativeCategObdj = allCategories.find((categoryObj) => {
              return category === categoryObj._id;
            });
            return (
              <li key={_id} className={styles.tableRow}>
                <div className={styles.tableCollapseColumn}>
                  <span className={styles.tableDate}>{date}</span>
                  <span className={styles.tableDescription}>{description}</span>
                </div>

                <div className={styles.tableCategory}>
                  {relativeCategObdj?.title ?? "Нет такой категории"}
                </div>
                <div className={styles.tableAmount}>{`${sum}  грн.`}</div>
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
}
