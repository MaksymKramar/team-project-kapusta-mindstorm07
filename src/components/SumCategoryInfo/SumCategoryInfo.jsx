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

export default function SumCategoryInfo({
  //  type,
  typeTrans,
  handleClickGetChart,
}) {
  const incomes = useSelector(getCategoriesIncomes);
  const [type, setType] = useState(false);
  const [id, seId] = useState(0);

  const expenses = useSelector(getCategoriesExpenses);
  const categories = [...expenses, ...incomes];
  console.log(categories);
  const [chartsCategoryId, setChartsCategoryId] = useState("");
  function handleClickGetChart(id) {
    setChartsCategoryId(id);
    categories.map((i) => {
      if (i._id === id) {
        console.log(i.type);
        setType(i.type);
      }
    });
    console.log(id);
  }

  console.log(expenses);
  console.log(incomes);

  const viewPort = useWindowDimensions();
  const description = useSelector(getDescription);
  const filtredTransactions = (transType, categoryId) => {
    return description
      .filter(
        (transaction) =>
          transaction.group.type === transType &&
          transaction.group.category === categoryId
      )
      .map((tr) => {
        return { description: tr.group.description, amount: tr.total_amounts };
      })
      .sort((a, b) => b.amount - a.amount);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <div className={`${s.container} ${typeTrans}`}>
        <div className={s.amountSection}>
          <svg className={s.iconPrevious}>
            <use href={sprite + "#icon-previous"}></use>
          </svg>

          {typeTrans === "expenses" ? (
            <p className={s.title}> Расходы </p>
          ) : (
            <p className={s.title}> Доходы </p>
          )}

          <svg className={s.iconNext}>
            <use href={sprite + "#icon-next"}></use>
          </svg>
        </div>

        {typeTrans === false ? (
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

      <div className={`${s.container} ${typeTrans}`}>
        {viewPort.width < 768 && (
          <GraphMobile
            transactions={filtredTransactions(type, chartsCategoryId)}
            chartsCategoryId={chartsCategoryId}
          />
        )}

        {viewPort.width >= 768 && (
          <Graph
            transactions={filtredTransactions(type, chartsCategoryId)}
            chartsCategoryId={chartsCategoryId}
          />
        )}
      </div>
    </div>
  );
}
