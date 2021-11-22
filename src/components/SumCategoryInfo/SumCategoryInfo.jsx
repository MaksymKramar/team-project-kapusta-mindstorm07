import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getAllCategories } from "../../redux/operation/categories";
import {
  getCategoriesIncomes,
  getCategoriesExpenses,
} from "../../redux/report";
// import { getTransactionsSum } from "../../redux/transactions/transactionsSelectors";
// import { getTransactions } from "../../redux/transactions/transactionsSelectors";
import CategoryInfo from "../CategoryInfo/CategoryInfo";
import Graph from "../Graph/Graph";
import GraphMobile from "../Graph/GraphMobile";
import sprite from "../../images/sprite.svg";
import s from "./SumCategoryInfo.module.scss";

// const typeTrans = "expenses";

export default function SumCategoryInfo({
  type,
  typeTrans,
  handleClickGetChart,
}) {
  const [chartsCategoryId, setChartsCategoryId] = useState("");
  function handleClickGetChart(id) {
    setChartsCategoryId(id);
  }
  const viewPort = useWindowDimensions();
  // const transactions = useSelector(getTransactionsSum);
  // const categories = useSelector(getTransactions);
  // const categoriesWithSumms = Object.values(
  //   transactions.reduce((acc, { group, total_amounts }) => {
  //     const category = categories.find((i) => i._id === group.category);
  //     if (!acc[category.name]) {
  //       acc[category.name] = { category, total_amounts: 0 };
  //     }
  //     acc[category.name].total_amounts += total_amounts;
  //     return acc;
  //   }, {})
  // );
  // const filtredTransactions = (transType, categoryId) => {
  //   return transactions
  //     .filter(
  //       (transaction) =>
  //         transaction.group.type === transType &&
  //         transaction.group.category === categoryId
  //     )
  //     .map((tr) => {
  //       return { description: tr.group.description, amount: tr.total_amounts };
  //     })
  //     .sort((a, b) => b.amount - a.amount);
  // };
  // const filtredCategories = (transType) => {
  //   return categoriesWithSumms
  //     .filter((transaction) => transaction.category.type === transType)
  //     .sort((a, b) => b.total_amounts - a.total_amounts);
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const expenses = useSelector(getCategoriesExpenses);
  const incomes = useSelector(getCategoriesIncomes);
  console.log(expenses);
  console.log(incomes);

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
          <CategoryInfo trans={expenses} handleClick={handleClickGetChart} />
        ) : (
          <CategoryInfo trans={incomes} handleClick={handleClickGetChart} />
        )}
      </div>

      <div className={`${s.container} ${typeTrans}`}>
        {viewPort.width < 768 && (
          <GraphMobile
            // transactions={filtredTransactions(type, chartsCategoryId)}
            // categories={filtredCategories(type)}
            chartsCategoryId={chartsCategoryId}
          />
        )}

        {viewPort.width >= 768 && (
          <Graph
            // transactions={filtredTransactions(type, chartsCategoryId)}
            // categories={filtredCategories(type)}
            chartsCategoryId={chartsCategoryId}
          />
        )}
      </div>
    </div>
  );
}
