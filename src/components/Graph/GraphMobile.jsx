import React from "react";

import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import s from "./Graph.module.scss";
import { useSelector } from "react-redux";
import { getDescription, getCategoriesExpenses } from "../../redux/report";

Chart.register(ChartDataLabels);
function ChartReportMobile({ categoryId }) {
  const description = useSelector(getDescription);
  const currentCategory = useSelector(getCategoriesExpenses)[0];

  const sortDescription = description.filter(
    (desc) => desc.group.category === categoryId
  );
  console.log(sortDescription);

  function ExpSort() {
    if (sortDescription) {
      /// Сумма
      return getExp();
    }
  }

  function getExp() {
    const res = [...sortDescription];
    return res.sort((a, b) => b.total - a.total);
  }

  function IncSort() {
    if (sortDescription) {
      return getInc();
    }
  }
  function getInc() {
    const res = [...sortDescription];
    return res.sort((a, b) => b.total - a.total);
  }

  const dataIncomings = {
    datasets: [
      {
        data: IncSort(),
        maxBarThickness: 15,
        borderRadius: 20,
        minBarLength: 100,
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            return (
              context.chart.data.datasets[0].data[context.dataIndex].nested
                .value + "грн"
            );
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
        maxBarThickness: 15,
        borderRadius: 20,
        minBarLength: 100,
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            return (
              context.chart.data.datasets[0].data[context.dataIndex].nested
                .value + "грн"
            );
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
    indexAxis: "y",

    layout: {
      padding: {
        left: 15,
        right: 30,
        top: 25,
      },
    },
    parsing: {
      xAxisKey: "nested.value",
      yAxisKey: "id",
      key: "data.nested.value",
    },

    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 1,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "white",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          borderColor: "white",
        },
        ticks: {
          align: "start",
          mirror: true,
          labelOffset: -19,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        // position: 'top',
      },
    },
  };

  return (
    <div className={s.charterReport}>
      {currentCategory?.type === true && (
        <Bar data={dataIncomings} options={options} height={400} width={320} />
      )}
      {currentCategory?.type === false && (
        <Bar data={dataExpenses} options={options} height={300} width={320} />
      )}
    </div>
  );
}

export default ChartReportMobile;
