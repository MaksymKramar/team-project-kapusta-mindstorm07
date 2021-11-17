import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./TableHistory.module.scss";
import sprite from "../../images/sprite.svg";
import TableHistoryMobile from "../TabelHistoryMobile/TableHistoryMobile";

function TrashIcon() {
  return (
    <button
      type="button"
      style={{
        outline: "none",
        border: "0",
        background: "transparent",
        cursor: "pointer",
      }}
    >
      <svg width="18px" height="18px">
        <use href={sprite + "#icon-delete-1"} />
      </svg>
    </button>
  );
}
const rows = [
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
  {
    _id: "6193ce5a6e2ea10e99fb68f6",
    date: "14.09.2020",
    description: "aug",
    type: true,
    sum: 10000,
  },
];

export default function TableHistory() {
  const matches = useMediaQuery("(min-width:768px)");

  if (matches) {
    return (
      <div className={styles.TableHistoryContainer}>
        <ul className={styles.TableHistoryHeader}>
          <li className={styles.TableHistoryHeaderRow}>Дата</li>
          <li className={styles.TableHistoryHeaderRow}>Описание</li>
          <li className={styles.TableHistoryHeaderRow}>Категория</li>
          <li className={styles.TableHistoryHeaderRow}>Сумма</li>
          <li className={styles.TableHistoryHeaderRow}></li>
        </ul>
        <ul className={styles.TableHistoryBody}>
          {rows.map((row) => (
            <li key={row.sum} className={styles.TableHistoryRow}>
              <div className={styles.TableHistoryDate}>{row.date}</div>
              <div className={styles.TableHistoryDescription}>
                {row.description}
              </div>
              <div className={styles.TableHistoryCategory}>{row._id}</div>
              <div className={styles.TableHistoryAmount}>
                {row.sum + "грн."}{" "}
              </div>
              <TrashIcon />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <TableHistoryMobile />;
  }
}
