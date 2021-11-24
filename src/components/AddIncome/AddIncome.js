import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as operations from "../../redux/transactionAdd/transactionAdd-operations";
import * as selectors from "../../redux/transactionAdd/transactionADD-selectors";
// import {transactionAdd, getGategories} from '../../redux/transactionAdd/transactionAdd-operations'
// import DatePicker from "react-datepicker";
// import ItemCategories from "../ItemsCategories/ItemsCategories";
import sprite from "../../images/sprite.svg";
import styles from "./AddIncome.module.css";

import "react-datepicker/dist/react-datepicker.css";
import DateCalendar from "../Date/Date";

// import { getBalance } from "../../redux/auth/auth-operation";

export default function AddIncome() {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState();
  const [value, setValue] = useState("Категория дохода");

  const dispatch = useDispatch();

  const date = `${startDate.getDate()}.${
    startDate.getMonth() + 1
  }.${startDate.getFullYear()}`;
  console.log(date)

  const categories = useSelector(selectors.getCategoriesAll);
  const incomeCategories = categories.filter(cat => cat.type===true)
  const getDatas = useSelector(selectors.getData);
  console.log(getDatas)
  // const getDescription = useSelector(selectors.getDescription);
  const [showCategs, setShowCategs] = useState(false)

  const onClick = () => {
    setShowCategs(!showCategs)
  }
  
  const change = (e) => {
    categories.map((i) => {
      if (i.title === e.target.textContent) {
        setCategory(i._id);
        setType(i.type);
      }
    },
    setShowCategs(false)
    );

    setValue(e.target.textContent);
  };
  const handleChange = (e) => {
    switch (e.target.name) {
      case "description":
        return setDescription(e.target.value);
      case "sum":
        return setSum(Number(e.target.value));
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { date: getDatas, description, sum, type, category };
    console.log(description);
    dispatch(operations.transactionAdd(newTransaction));
    clearBtn()
  };

  const clearBtn = () => {
    setSum("");
    setDescription("");
    setValue("Категория дохода");
  };

  return (
    <div>
      <div className={styles.mainWrapper}>
        <div className={styles.dates}>
          <DateCalendar />
        </div>

        <form className={styles.wrapper} onSubmit={handleSubmit}>
          <div className={styles.itemsWrapper}>
            <div className={styles.itemDiv}>
              <input
                className={styles.itemInput}
                placeholder="Описание дохода"
                name="description"
                value={description}
                onChange={handleChange}
              />
            <div className={styles["dropdown"]}>
              <button type="button" className={styles["dropbtn"]} onClick={onClick}>
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
                {showCategs &&
                <ul className={styles["dropdown-content"]}>
                  {incomeCategories.map((category) => (
                    <li
                      className={styles["dropdown-content-a"]}
                      key={category._id}
                      value={category}
                      onClick={change}
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>}
              </div>
            </div>
            <div className={styles.amountDiv}>
              <input
                className={styles.amountInput}
                placeholder="00.00 UAH"
                name="sum"
                value={sum}
                onChange={handleChange}
              />
              <button className={styles.calculatorBtn}>
                <svg width="20" height="20" className={styles["report-svg"]}>
                  <use href={sprite + "#icon-calculator"}></use>
                </svg>
              </button>

              <ul className={styles["dropdown-content"]}>
                {incomeCategories.map((category) => (
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
            <button
              type="button"
              className={styles.clearBtn}
              onClick={clearBtn}
            >
              Очистить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
