import s from "./SumCategoryInfo.module.scss";
import CategoryInfo from "../CategoryInfo/CategoryInfo";
import sprite from "../../images/sprite.svg";
import Graph from "../Graph/Graph";
import GraphMobile from "../Graph/GraphMobile";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { getAllCategories } from "../../redux/operation/categories";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const typeTrans = "expenses";

const expenses = [
  { _id: 1, category: "Продукты", value: 0.0, isActive: false },
  { _id: 2, category: "Алкоголь", value: 0.0, isActive: false },
  { _id: 3, category: "Развлечения", value: 0.0, isActive: false },
  { _id: 4, category: "Здоровье", value: 0.0, isActive: false },
  { _id: 5, category: "Транспорт", value: 0.0, isActive: false },
  { _id: 6, category: "Всё для дома", value: 0.0, isActive: false },
  { _id: 8, category: "Коммуналка, связь", value: 0.0, isActive: false },
  { _id: 7, category: "Техника", value: 0.0, isActive: false },
  { _id: 9, category: "Спорт, хобби", value: 0.0, isActive: false },
  { _id: 10, category: "Образование", value: 0.0, isActive: false },
  { _id: 11, category: "Прочее", value: 0.0, isActive: false },
];

const incomes = [
  { _id: 12, category: "ЗП", value: 0.0, isActive: false },
  { _id: 14, category: "Доп. доход", value: 0.0, isActive: false },
];

export default function SumCategoryInfo({ type }) {
  const viewPort = useWindowDimensions();

  const [expenses, setExpenses] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  // const expenses = useSelector(getAllCategories)
  // console.log(expenses)

  return (
    <div>
      <div className={`${s.container} ${typeTrans}`}>
        <div className={s.amountSection}>
          <svg
            className={s.iconPrevious}
            // onClick={onHandleChangeType}
          >
            <use href={sprite + "#icon-previous"}></use>
          </svg>

          {typeTrans === "expenses" ? (
            <p className={s.title}> Расходы </p>
          ) : (
            <p className={s.title}> Доходы </p>
          )}

          <svg
            className={s.iconNext}
            // onClick={onHandleChangeType}
          >
            <use href={sprite + "#icon-next"}></use>
          </svg>
        </div>

        {typeTrans === "expenses" ? (
          <CategoryInfo
            trans={expenses}
            //   onClick={handleClickExpenses}
          />
        ) : (
          <CategoryInfo
            trans={incomes}
            //   onClick={handleClickIncomes}
          />
        )}
      </div>

      <div className={`${s.container} ${typeTrans}`}>
        {viewPort.width < 768 && <GraphMobile type={type} />}
        {viewPort.width >= 768 && <Graph type={type} />}
      </div>
    </div>
  );
}
