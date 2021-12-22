import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as operations from "../../redux/transactionAdd/transactionAdd-operations";
import * as selectors from "../../redux/transactionAdd/transactionADD-selectors";
import sprite from "../../images/sprite.svg";
import s from "./AddIncome.module.scss";

import "react-datepicker/dist/react-datepicker.css";
import DateCalendar from "../Date/Date";

import { getBalance } from "../../redux/auth/auth-operation";

export default function AddIncome() {
  const [description, setDescription] = useState("");
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState();
  const [value, setValue] = useState("Категория дохода");

  const dispatch = useDispatch();

  const categories = useSelector(selectors.getCategoriesAll);
  const incomeCategories = categories.filter((cat) => cat.type === true);
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
    setValue("Категория дохода");
  };

  return (
    <div>
      <div className={s.mainWrapper}>
        <div className={s.dates}>
          <DateCalendar />
        </div>

        <form className={s.wrapper} onSubmit={handleSubmit}>
          <div className={s.itemsWrapper}>
            <div className={s.itemDiv}>
              <input
                className={s.itemInput}
                placeholder="Описание дохода"
                name="description"
                value={description}
                onChange={handleChange}
                required
              />
              <div className={s["dropdown"]}>
                <button
                  type="button"
                  className={s["dropbtn"]}
                  onClick={onClick}
                >
                  {value}
                  <svg
                    width="12"
                    height="20"
                    className={s["category-svg-down"]}
                  >
                    <use href={sprite + "#down"}></use>
                  </svg>
                  <svg width="12" height="20" className={s["category-svg-up"]}>
                    <use href={sprite + "#up"}></use>
                  </svg>
                </button>
                {showCategs && (
                  <ul className={s["dropdown-content"]}>
                    {incomeCategories.map((category) => (
                      <li
                        className={s["dropdown-content-a"]}
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
            <div className={s.amountDiv}>
              <input
                className={s.amountInput}
                placeholder="00.00 UAH"
                name="sum"
                value={sum}
                onChange={handleChange}
                type="number"
                required
              />

              <button className={s.calculatorBtn}>
                <svg width="20" height="20" className={s["report-svg"]}>
                  <use href={sprite + "#icon-calculator"}></use>
                </svg>
              </button>

              <ul className={s["dropdown-content"]}>
                {incomeCategories.map((category) => (
                  <li
                    className={s["dropdown-content-a"]}
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
          <div className={s.btnsDiv}>
            <button type="submit" className={s.enterBtn}>
              Ввод
            </button>
            <button type="button" className={s.clearBtn} onClick={clearBtn}>
              Очистить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
