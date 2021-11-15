import React, { useState } from "react";
import DatePicker from "react-datepicker";
import sprite from "../../images/sprite.svg";
import styles from "./Date.module.css";

import "react-datepicker/dist/react-datepicker.css";

export default function DateCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.dateWrapper}>
      <svg width="20" height="20" className={styles.calendarSvg}>
        <use href={sprite + "#icon-calendar"}></use>
      </svg>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        className={styles.dateFormat}
      />
    </div>
  );
}
