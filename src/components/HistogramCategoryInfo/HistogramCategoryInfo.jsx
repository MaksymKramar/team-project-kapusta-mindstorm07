import s from "./HistogramCategoryInfo.module.scss";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

export default function HistogramCategoryInfo() {
  const data = [
    { name: "Свинина", value: 5000 },
    { name: "Говядина", value: 4500 },
    { name: "Курица", value: 3200 },
    { name: "Рыба", value: 2100 },
    { name: "Панини", value: 400 },
    { name: "Кофе", value: 200 },
    { name: "Спагетти", value: 800 },
    { name: "Шоколад", value: 400 },
    { name: "Маслины", value: 500 },
    { name: "Зелень", value: 400 },
  ];

  const seriesLabels = {
    visible: true,
    font: "normal 12px Arial, sans-serif",
    position: "center",
  };

  return (
    <div className={s.container}>
      <BarChart
        className={s.BarChart}
        width={600}
        height={422}
        data={data}
        barSize={38}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 15 }} />
        <YAxis />
        <Tooltip />

        {/* <CartesianGrid strokeDasharray="9 9" /> */}
        <Bar
          dataKey="value"
          fill="var(--light-orange-color)"
          background={{ fill: "none" }}
          style={{ cursor: "pointer" }}
        />
      </BarChart>
    </div>
  );
}
