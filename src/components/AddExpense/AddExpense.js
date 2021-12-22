import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as operations from "../../redux/transactionAdd/transactionAdd-operations";
import * as selectors from "../../redux/transactionAdd/transactionADD-selectors";
import sprite from "../../images/sprite.svg";
import styles from "./AddExpense.module.scss";

import "react-datepicker/dist/react-datepicker.css";
import DateCalendar from "../Date/Date";

import { getBalance } from "../../redux/auth/auth-operation";

export default function AddExpense() {
  // const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState();
  const [value, setValue] = useState("Категория товара");

  const dispatch = useDispatch();

  // const date = `${startDate.getDate()}.${
  //   startDate.getMonth() + 1
  // }.${startDate.getFullYear()}`;

  const categories = useSelector(selectors.getCategoriesAll);
  const expenseCategories = categories.filter((cat) => cat.type === false);
  const getDatas = useSelector(selectors.getData);

  const [showCategs, setShowCategs] = useState(false);

  const onClick = () => {
    setShowCategs(!showCategs);
  };

  function upperFirstLetter(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  const change = (e) => {
    categories.map((i) => {
      if (i.title === e.target.textContent) {
        setCategory(i._id);
        setType(i.type);
      }
      return i;
    }, setShowCategs(false));

    setValue(e.target.textContent);
  };
  const handleChange = (e) => {
    switch (e.target.name) {
      case "description":
        return setDescription(upperFirstLetter(e.target.value));
      case "sum":
        return setSum(e.target.value);
      default:
        return;
    }
  };

  const newTransaction = {
    date: getDatas,
    description: description,
    type: type,
    sum: Number(sum.includes(",") ? +sum.replace(/,/g, ".") : +sum),
    category: category,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(operations.transactionAdd(newTransaction));
    dispatch(getBalance());
    clearBtn();
  };

  const clearBtn = () => {
    setSum("");
    setDescription("");
    setValue("Категория товара");
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.dates}>
        <DateCalendar />
      </div>

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemDiv}>
            <input
              className={styles.itemInput}
              placeholder="Описание товара"
              name="description"
              value={description}
              onChange={handleChange}
              required
            />
            <div className={styles["dropdown"]}>
              <button
                type="button"
                className={styles["dropbtn"]}
                onClick={onClick}
              >
                {value}
                <svg
                  width="12"
                  height="20"
                  className={styles["category-svg-down"]}
                >
                  <use href={sprite + "#down"}></use>
                </svg>
                <svg
                  width="12"
                  height="20"
                  className={styles["category-svg-up"]}
                >
                  <use href={sprite + "#up"}></use>
                </svg>
              </button>
              {showCategs && (
                <ul className={styles["dropdown-content"]}>
                  {expenseCategories.map((category) => (
                    <li
                      className={styles["dropdown-content-a"]}
                      key={category._id}
                      value={category}
                      onClick={change}
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={styles.amountDiv}>
            <input
              className={styles.amountInput}
              placeholder="00.00 UAH"
              type="number"
              name="sum"
              value={sum}
              onChange={handleChange}
              required
            />
            <button className={styles.calculatorBtn}>
              <svg width="20" height="20" className={styles["report-svg"]}>
                <use href={sprite + "#icon-calculator"}></use>
              </svg>
            </button>

            <ul className={styles["dropdown-content"]}>
              {categories.map((category) => (
                <li
                  className={styles["dropdown-content-a"]}
                  key={category._id}
                  value={category._id}
                  onClick={change}
                >
                  {category.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.btnsDiv}>
          <button type="submit" className={styles.enterBtn}>
            Ввод
          </button>
          <button type="button" className={styles.clearBtn} onClick={clearBtn}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}
