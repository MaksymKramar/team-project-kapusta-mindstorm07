import React, { useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as operations from "../../redux/transactionAdd/transactionAdd-operations";
import {getCategoriesAll} from "../../redux/transactionAdd/transactionADD-selectors";
// import {transactionAdd, getGategories} from '../../redux/transactionAdd/transactionAdd-operations'
// import DatePicker from "react-datepicker";
// import ItemCategories from "../ItemsCategories/ItemsCategories";
import sprite from "../../images/sprite.svg";
import styles from "./AddExpense.module.css";

import "react-datepicker/dist/react-datepicker.css";
import DateCalendar from "../Date/Date";

export default function AddExpense() {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState()
  const [value, setValue] = useState('Категория товара');

  const dispatch = useDispatch();

  const date = `${startDate.getDate()}.${startDate.getMonth()+1}.${startDate.getFullYear()}`
  // console.log(date)
  // setDate(transDate)
  
  // console.log(date)
  // setTransactionDate(date)
  // console.log(transactionDate)
  
  const getCategoriesItem = () => {
    dispatch(operations.getGategories());
  }

  const categories = useSelector(getCategoriesAll)
  console.log(categories)
  // const catItem = categories.map(i=>i.title).reduce()
  const change = (e) => {
    categories.map(i => {
      if(i.title === e.target.textContent ) {
        setCategory(i._id)
        setType(i.type)
      }
     })
    
    // console.log(catItem)
    setValue(e.target.textContent)
    
  }
console.log(category)
  const handleChange = e => {
    switch (e.target.name) {
      case "description":
        return setDescription(e.target.value);
      case "sum":
        return setSum(e.target.value);
      default:
        return;
    }
  }


  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = {date, description, sum, type, category};
    dispatch(operations.transactionAdd(newTransaction))
  }

  const clearBtn = () => {
    setSum('');
    setDescription('');
    setCategory('');
  };


  return (
    <div className="container">
    <DateCalendar />
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.itemsWrapper}>
          <div className={styles.itemDiv}>
            <input 
            className={styles.itemInput} 
            placeholder="Описание товара"
            name="description"
            onChange={handleChange}/>
            {/* <ItemCategories /> */}
            {/* <div className={styles["dropdown"]}>
            <ul className={styles["dropdown-content"]} name="category" onClick={getCategoriesItem}>
                {categories.map(cat => (
                  <li className={styles["dropdown-content-a"]} key={cat._id} value={cat._id} onClick={()=>handleSelect}>{cat.title}</li>
                ))

                }
             </ul>
             </div> */}
            <div className={styles["dropdown"]}>
      <button className={styles["dropbtn"]} onClick={getCategoriesItem}>
        {value}
        <svg width="12" height="20" className={styles["category-svg-down"]}>
          <use href={sprite + "#down"}></use>
        </svg>
        <svg width="12" height="20" className={styles["category-svg-up"]}>
          <use href={sprite + "#up"}></use>
        </svg>
      </button>
      <ul className={styles["dropdown-content"]}>
        {categories.map(category => (
                  <li className={styles["dropdown-content-a"]} key={category._id} value={category._id} onClick={change}>{category.title}</li>
                ))}</ul>
    </div>
          </div>
          <div className={styles.amountDiv}>
            <input 
            className={styles.amountInput} 
            placeholder="00.00 UAH"
            name="sum"
            onChange={handleChange} />
            <button className={styles.calculatorBtn}>
              <svg width="20" height="20" className={styles["report-svg"]}>
                <use href={sprite + "#icon-calculator"}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.btnsDiv}>
          <button type="submit" className={styles.enterBtn}>Ввод</button>
          <button type="button" className={styles.clearBtn} onClick={clearBtn}>Очистить</button>
        </div>
      </form>
    </div>
  );
}
