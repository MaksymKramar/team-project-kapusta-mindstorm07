import React from "react";
import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import s from "./Graph.module.scss";
import { useSelector } from "react-redux";
import { getDescription, getCategoriesExpenses } from "../../redux/report";

Chart.register(ChartDataLabels);
// ======================
// https://www.youtube.com/channel/UCojXvfr41NqDxaPb9amu8-A/featured
// ======================
export default function Graph({ categoryId }) {
  const description = useSelector(getDescription);
  const currentCategory = useSelector(getCategoriesExpenses)[0];

  function ExpSort() {
    if (description) {
      /// Сумма
      return getExp();
    }
  }

  function getExp() {
    const res = description.filter(
      (desc) => desc.group.category === categoryId
    );
    return res.sort((a, b) => b.total - a.total);
  }

  function IncSort() {
    if (description) {
      return getInc();
    }
  }
  function getInc() {
    const res = description.filter(
      (desc) => desc.group.category === categoryId
    );
    return res.sort((a, b) => b.total - a.total);
  }

  const aspect = currentCategory?.type === "false" ? 3 : 3;

  const dataIncomings = {
    datasets: [
      {
        data: IncSort(),
        maxBarThickness: 38,
        borderRadius: 10,
        minBarLength: 2,
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            return `${
              context.chart.data.datasets[0].data[context.dataIndex].total
            } грн`;
          },
          color: "#52555F",
          anchor: "end",
          align: "top",
        },
        plugins: [ChartDataLabels],
      },
    ],
  };

  const dataExpenses = {
    datasets: [
      {
        data: ExpSort(),
        maxBarThickness: 38,
        borderRadius: 10,
        minBarLength: 2,
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            console.log(context.chart.data.datasets);

            return `${
              context.chart.data.datasets[0].data[context.dataIndex].total
            } грн`;
          },
          color: "#52555F",
          anchor: "end",
          align: "top",
        },
        plugins: [ChartDataLabels],
      },
    ],
  };
  const options = {
    parsing: {
      xAxisKey: "group.description", ///Свинина Говядина ....
      yAxisKey: "total", /// Сумма 5000 4500 ...
      key: "data.category",
    },
    responsive: true,
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 40,
        // bottom: 20,
      },
    },
    aspectRatio: aspect,
    scales: {
      x: {
        grid: {
          display: false,
        },
        grace: "5%",
      },
      y: {
        grid: {
          borderColor: ["rgba(0, 0, 0, 0)"],
        },
        ticks: {
          display: false,
        },
        grace: "5%",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={s.charterReport}>
      {currentCategory?.type ? (
        <>
          <Bar data={dataIncomings} options={options} />
        </>
      ) : (
        <>
          <Bar data={dataExpenses} options={options} height={400} width={320} />
        </>
      )}
    </div>
  );
}
