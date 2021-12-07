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
  const viewPort = useWindowDimensions();
  const dispatch = useDispatch();

  const incomes = useSelector(getCategoriesIncomes);
  const expenses = useSelector(getCategoriesExpenses);

  const [type, setType] = useState(false);
  // const [btnType, setbtnType] = useState("expenses");
  const [categoryId, setCategoryId] = useState("");
  const [chartsCategoryId, setChartsCategoryId] = useState("");

  useEffect(() => {
    const actualMonth = `${month}.${year}`;

    dispatch(getAllCategories());
    dispatch(getFullTransInfo({ type: type, date: actualMonth }));

    // if (type === false) {
    //   dispatch(getAllCategories());
    //   dispatch(getFullTransInfo({ type: type, date: actualMonth }));
    // }
    // if (type === true) {
    //   dispatch(getAllCategories());
    //   dispatch(getFullTransInfo({ type: type, date: actualMonth }));
    // }
  }, [dispatch, type, month, year]);

  // const categories = [...expenses, ...incomes];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [isLoading]);

  function HandleClickGetChart(id) {
    setChartsCategoryId(id);

    setIsLoading(true);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, );
  }

  function handleClick() {
    if (type) {
      setType(false);
      setIsLoading(true);
    } else {
      setType(true);
      setIsLoading(true);
    }

    // if (btnType === "incomes") {
    //   setbtnType("expenses");
    //   setType(true);
    // setIsLoading(true);

    // } else {
    //   setbtnType("incomes");
    //   setType(false);
    // setIsLoading(true);

    // }
  }
  // const description = useSelector(getDescription);

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
            handleClick={HandleClickGetChart}
            onClick={setCategoryId}
          />
        ) : (
          <CategoryInfo
            trans={incomes}
            type={type}
            handleClick={HandleClickGetChart}
            onClick={setCategoryId}
          />
        )}
      </div>

      <div className={`${s.container} ${type}`}>
        {viewPort.width < 768 ? (
          <>
            {isLoading ? (
              "loading"
            ) : (
              <GraphMobile
                categoryId={categoryId}
                chartsCategoryId={chartsCategoryId}
              />
            )}
          </>
        ) : (
          <>
            {console.log("isLoading:", isLoading)}
            {isLoading ? (
              "loading"
            ) : (
              <Graph
                categoryId={categoryId}
                chartsCategoryId={chartsCategoryId}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
