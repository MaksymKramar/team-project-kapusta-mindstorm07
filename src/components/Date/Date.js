import React, { useState } from "react";
import DatePicker from "react-datepicker";
import sprite from "../../images/sprite.svg";
import styles from "./Date.module.scss";

import { addDate } from "../../redux/transactionAdd/transactionAdd-slice";
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

export default function DateCalendar() {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const updateDate = (date) => {
    const allDate = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;
    dispatch(addDate(allDate));
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    updateDate(date);
  };

  // const date = `${startDate.getDate()}.${
  //   startDate.getMonth() + 1
  // }.${startDate.getFullYear()}`;

  return (
    <div className={styles.dateWrapper}>
      <svg width="20" height="20" className={styles.calendarSvg}>
        <use href={sprite + "#icon-calendar"}></use>
      </svg>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        maxDate={new Date()}
        className={styles.dateFormat}
      />
    </div>
  );
}
