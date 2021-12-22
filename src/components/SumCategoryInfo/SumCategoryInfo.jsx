import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getAllCategories } from "../../redux/operation/categories";
import { getFullTransInfo } from "../../redux/report";
import {
  getCategoriesIncomes,
  getCategoriesExpenses,
} from "../../redux/report";
import CategoryInfo from "../CategoryInfo/CategoryInfo";
import Graph from "../Graph/Graph";
import GraphMobile from "../Graph/GraphMobile";
import sprite from "../../images/sprite.svg";
import s from "./SumCategoryInfo.module.scss";
import Spinner from "../Spinner/Spinner";

export default function SumCategoryInfo({ month, year }) {
  const viewPort = useWindowDimensions();
  const dispatch = useDispatch();

  const incomes = useSelector(getCategoriesIncomes);
  const expenses = useSelector(getCategoriesExpenses);

  const [type, setType] = useState(false);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    const actualMonth = `${month}.${year}`;

    dispatch(getAllCategories());
    dispatch(getFullTransInfo({ type: type, date: actualMonth }));
  }, [dispatch, type, month, year]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [isLoading]);

  function HandleClickSetCategoryId(id) {
    setCategoryId(id);
    setIsLoading(true);
  }

  function handleClick() {
    if (type) {
      setType(false);
      setIsLoading(true);
    } else {
      setType(true);
      setIsLoading(true);
    }
  }

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
            handleClick={HandleClickSetCategoryId}
          />
        ) : (
          <CategoryInfo
            trans={incomes}
            type={type}
            handleClick={HandleClickSetCategoryId}
          />
        )}
      </div>

      <div className={`${s.container} ${type}`}>
        {viewPort.width < 768 ? (
          <>
            {isLoading ? (
              <div className={s.spinner}>
                <Spinner
                  width="40px"
                  height="40px"
                  color="#ff751d"
                  type="Oval"
                />
              </div>
            ) : (
              <GraphMobile categoryId={categoryId} />
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <div className={s.spinner}>
                <Spinner
                  width="40px"
                  height="40px"
                  color="#ff751d"
                  type="Oval"
                />
              </div>
            ) : (
              <Graph categoryId={categoryId} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
