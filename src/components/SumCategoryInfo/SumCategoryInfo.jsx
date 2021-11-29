import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getAllCategories } from "../../redux/operation/categories";
import { getFullTransInfo } from "../../redux/report";
import {
  getCategoriesIncomes,
  getCategoriesExpenses,
  getDescription,
} from "../../redux/report";
import CategoryInfo from "../CategoryInfo/CategoryInfo";
import Graph from "../Graph/Graph";
import GraphMobile from "../Graph/GraphMobile";
import sprite from "../../images/sprite.svg";
import s from "./SumCategoryInfo.module.scss";

export default function SumCategoryInfo({ month, year }) {
  const incomes = useSelector(getCategoriesIncomes);
  const [type, setType] = useState(false);
  const [btnType, setbtnType] = useState("expenses");
  // const [id, setId] = useState(0)

  const dispatch = useDispatch();
  useEffect(() => {
    const date = new Date();
    // const actualMonth = `${date.getMonth() + 1}.${date.getFullYear()}`;
    const actualMonth = `${month}.${year}`;

    console.log(actualMonth);
    if (type === false) {
      dispatch(getAllCategories());
      dispatch(getFullTransInfo({ type: type, date: `${month}.${year}` }));
    }
    if (type === true) {
      dispatch(getAllCategories());
      dispatch(getFullTransInfo({ type: type, date: actualMonth }));
    }
    // dispatch(getAllCategories());
  }, [dispatch, type, month, year]);

  const expenses = useSelector(getCategoriesExpenses);
  const categories = [...expenses, ...incomes];
  // console.log(categories)
  const [chartsCategoryId, setChartsCategoryId] = useState("");
  function handleClickGetChart(id) {
    setChartsCategoryId(id);
    // setType(type)
    // const result = categories.find(({ _id }) => _id === id);
    // const cattype = result.type;
    // setType(result.type.toString())
    // const date = "11.2021";
    // const string = true
    // dispatch(getFullTransInfo({ type: cattype, date }));
  }
  function handleClick() {
    if (btnType === "incomes") {
      setbtnType("expenses");
      setType(true);
      console.log(type);
    } else {
      setbtnType("incomes");
      setType(false);
    }
  }
  const viewPort = useWindowDimensions();
  const description = useSelector(getDescription);
  const [categoryId, setCategoryId] = useState("");

  // const getIdCategory = (valueId) => {
  //   console.log("valueId", valueId)
  //   setCategoryId(val)
  //   //console.log(e.target.value);
  //   // dispatch(getFullTransInfo({ data, type }));
  // };

  return (
    <div>
      <div className={`${s.container} ${type}`}>
        <div className={s.amountSection}>
          <button
            className={s.button}
            type="button"
            onClick={() => handleClick()}
          >
            <svg className={s.iconPrevious}>
              <use href={sprite + "#icon-previous"}></use>
            </svg>
          </button>
          {type === false ? (
            <p className={s.title}> Расходы </p>
          ) : (
            <p className={s.title}> Доходы </p>
          )}
          <button
            className={s.button}
            type="button"
            onClick={() => handleClick()}
          >
            <svg className={s.iconNext}>
              <use href={sprite + "#icon-next"}></use>
            </svg>
          </button>
        </div>

        {type === false ? (
          <CategoryInfo
            trans={expenses}
            type={type}
            handleClick={handleClickGetChart}
            onClick={setCategoryId}
          />
        ) : (
          <CategoryInfo
            trans={incomes}
            type={type}
            handleClick={handleClickGetChart}
            onClick={setCategoryId}
          />
        )}
      </div>

      <div className={`${s.container} ${type}`}>
        {viewPort.width < 768 && (
          <GraphMobile
            categoryId={categoryId}
            // transactions={filtredTransactions(type, chartsCategoryId)}
            chartsCategoryId={chartsCategoryId}
          />
        )}

        {viewPort.width >= 768 && (
          <Graph
            categoryId={categoryId}
            // transactions={filtredTransactions(type, chartsCategoryId)}
            chartsCategoryId={chartsCategoryId}
          />
        )}
      </div>
    </div>
  );
}
