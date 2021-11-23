import styles from "./TableHistoryMobile.module.scss";
import sprite from "../../images/sprite.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

export default function TableHistoryMobile({ allTransactions }) {
  const balance = useSelector(authSelector.getBalance);

  const dispatch = useDispatch();
  const date = new Date();

  useEffect(() => {
    dispatch(
      getTransByMonthPlus(`${date.getMonth() + 1}.${date.getFullYear()}`)
    );
  }, [balance]);
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

  return (
    <div className={styles.tableContainer}>
      <ul className={styles.table}>
        {allTransactions.map(
          ({ _id, date, description, category, sum, type }) => {
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
