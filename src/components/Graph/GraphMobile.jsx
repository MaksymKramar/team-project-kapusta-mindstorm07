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

  // const sortDescription = description.filter(
  //   (desc) => desc.group.category === categoryId
  // );

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
            return `${
              context.chart.data.datasets[0].data[context.dataIndex].total
            } грн`;
          },
          color: "#52555F",
          anchor: "end",
          // align: "bottom",
        },
        plugins: [ChartDataLabels],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    parsing: {
      xAxisKey: "total", /// Сумма 5000 4500 ...
      yAxisKey: "group.description", ///Свинина Говядина ....
      key: "data.category",
    },
    layout: {
      autoPadding: "true",
      // padding: {
      //   // left: 15,
      //   right: 30,
      //   top:25,
      // },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    // maintainAspectRatio: true,
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
          align: "top",
          mirror: true,
          labelOffset: -11, ////висота надпису
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={`${s.charterReport} ${s.scrollBar}`}>
      {console.log("currentCategory?.type:", currentCategory?.type)}
      {currentCategory?.type ? (
        <>
          <Bar data={dataIncomings} options={options} />
        </>
      ) : (
        <>
          <Bar
            data={dataExpenses}
            options={options}
            // height={400}
            // width={320}
          />
        </>
      )}
    </div>
  );
}

export default ChartReportMobile;
