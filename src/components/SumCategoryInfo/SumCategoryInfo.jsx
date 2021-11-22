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
import * as selectors from "../../redux/transactionAdd/transactionADD-selectors";
import CategoryInfo from "../CategoryInfo/CategoryInfo";
import Graph from "../Graph/Graph";
import GraphMobile from "../Graph/GraphMobile";
import sprite from "../../images/sprite.svg";
import s from "./SumCategoryInfo.module.scss";

export default function SumCategoryInfo() {
  // {
  //  type,
  //   // typeTrans,
  //   // handleClickGetChart,
  // },
  const incomes = useSelector(getCategoriesIncomes);
  const [type, setType] = useState(false);
  const [btnType, setbtnType] = useState("expenses");
  // const [id, setId] = useState(0)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const expenses = useSelector(getCategoriesExpenses);
  const categories = [...expenses, ...incomes];
  // console.log(categories)
  const [chartsCategoryId, setChartsCategoryId] = useState("");
  function handleClickGetChart(id) {
    setChartsCategoryId(id);
    // setType(type)
    console.log(categories);
    const result = categories.find(({ _id }) => _id === id);

    console.log(result.type);
    const cattype = result.type;
    // setType(result.type.toString())
    const date = "11.2021";
    // const string = true
    dispatch(getFullTransInfo({ type: cattype, date }));
    console.log(id);
    // console.log(type)
  }
  function handleClick() {
    if (btnType === "incomes") {
      setbtnType("expenses");
      setType(false);
    } else {
      setbtnType("incomes");
      setType(true);
    }
  }
  // function handleClick() {
  //   if (btnType === 'expenses') {
  //     setbtnType('incomes')
  //     setType(true)
  //   }
  // }
  // console.log(expenses)
  // console.log(incomes)
  // setType(true)
  const viewPort = useWindowDimensions();
  const description = useSelector(getDescription);

  return (
    <div>
      <div className={`${s.container} ${type}`}>
        <div className={s.amountSection}>
          {/* <svg className={s.iconPrevious}>
            <use href={sprite + '#icon-previous'}></use>
          </svg> */}
          <button type="button" onClick={() => handleClick()}>
            <svg className={s.iconPrevious}>
              <use href={sprite + "#icon-previous"}></use>
            </svg>
          </button>
          {type === false ? (
            <p className={s.title}> Расходы </p>
          ) : (
            <p className={s.title}> Доходы </p>
          )}
          <button type="button" onClick={() => handleClick()}>
            <svg className={s.iconNext}>
              <use href={sprite + "#icon-next"}></use>
            </svg>
          </button>

          {/* <svg className={s.iconNext}>
            <use href={sprite + '#icon-next'}></use>
          </svg> */}
        </div>

        {type === true ? (
          <CategoryInfo
            trans={expenses}
            type={type}
            handleClick={handleClickGetChart}
          />
        ) : (
          <CategoryInfo
            trans={incomes}
            type={type}
            handleClick={handleClickGetChart}
          />
        )}
      </div>

      <div className={`${s.container} ${type}`}>
        {viewPort.width < 768 && (
          <GraphMobile
            // transactions={filtredTransactions(type, chartsCategoryId)}
            chartsCategoryId={chartsCategoryId}
          />
        )}

        {viewPort.width >= 768 && (
          <Graph
            // transactions={filtredTransactions(type, chartsCategoryId)}
            chartsCategoryId={chartsCategoryId}
          />
        )}
      </div>
    </div>
  );
}
