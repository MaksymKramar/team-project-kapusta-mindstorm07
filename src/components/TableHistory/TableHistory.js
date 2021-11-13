import styles from "./TableHistory.module.scss";
import sprite from "../../images/sprite.svg";

const columns = [
  { id: "date", label: "Дата" },
  { id: "description", label: "Описание" },
  { id: "category", label: "Категория" },
  { id: "amount", label: "Сумма" },
  { id: "trash", label: "   " },
];

function trashIcon() {
  return (
    <button type="button">
      <svg width="18px" height="18px">
        <use href={sprite + "#icon-delete-1"} />
      </svg>
    </button>
  );
}

function createData(date, description, category, amount) {
  return { date, description, category, amount, trashIcon };
}

const rows = [
  createData("05.09.2019", "Метро", "Транспорт", -30),
  createData("05.09.2019", "Бананы", "Продукты", -30),
  createData("Italy", "IT", 60483973, 301340),
  createData("United Sta", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];
export default function Table() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            {columns.map((column) => (
              <th key={column.id} className={styles.tableRowHead}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {rows.map((row) => {
            return (
              <tr key={row.date} className={styles.tableBodyRow}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <td key={column.label} className={styles.dataCell}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
