import styles from "./TableHistoryMobile.module.scss";
import sprite from "../../images/sprite.svg";

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
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: "-30",
  },
  {
    date: "05.09.2019",
    description: "Бананы",
    category: "Продукты",
    amount: "-30",
  },
  {
    date: "05.09.2019",
    description: "Телефон",
    category: "Техника",
    amount: "-50",
  },
  {
    date: "05.09.2019",
    description: "Водка",
    category: "Алкоголь",
    amount: "-60",
  },
  {
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: "-30",
  },
  {
    date: "05.09.2019",
    description: "Клуб",
    category: "Развлечения",
    amount: "-70",
  },
  {
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: "-30",
  },
  {
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: "-80",
  },
  {
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: "-40",
  },
  {
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: "-35",
  },
  {
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: "-15",
  },
];
export default function TableHistoryMobile() {
  return (
    <div className={styles.tableContainer}>
      <ul className={styles.table}>
        {rows.map((row) => (
          <li key={row.date} className={styles.tableRow}>
            <div className={styles.tableCollapseColumn}>
              <span className={styles.tableDate}>{row.date}</span>
              <span className={styles.tableDescription}>{row.description}</span>
            </div>

            <div className={styles.tableCategory}>{row.category}</div>
            <div className={styles.tableAmount}>{row.amount + "грн."} </div>
            <TrashIcon />
          </li>
        ))}
      </ul>
    </div>
  );
}
