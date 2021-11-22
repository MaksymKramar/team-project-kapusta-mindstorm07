import React, { useState } from "react";
import DatePicker from "react-datepicker";
import sprite from "../../images/sprite.svg";
import styles from "./Date.module.css";

import { addDate } from "../../redux/transactionAdd/transactionAdd-slice";
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

export default function DateCalendar() {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const updateDate = (date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    dispatch(addDate({ month, day, year }));
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    updateDate(date);
  };

  const date = `${startDate.getDate()}.${
    startDate.getMonth() + 1
  }.${startDate.getFullYear()}`;

  return (
    <div className={styles.dateWrapper}>
      <svg width="20" height="20" className={styles.calendarSvg}>
        <use href={sprite + "#icon-calendar"}></use>
      </svg>
      <DatePicker
        selected={startDate}
        //onChange={(date) => setStartDate(date)}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        className={styles.dateFormat}
      />
    </div>
  );
}
