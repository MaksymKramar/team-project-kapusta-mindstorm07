import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import s from "./Graph.module.scss";

Chart.register(ChartDataLabels);

export default function GraphMobile({ type }) {
  const expensesOpt = [
    { id: "Свинина", nested: { value: 5000 } },
    { id: "Говядина", nested: { value: 4500 } },
    { id: "Курица", nested: { value: 3200 } },
  ];

  const incomesOpt = [
    { id: "ЗП", nested: { value: 25000 } },
    { id: "Доп.доход", nested: { value: 20000 } },
  ];

  const optArr = type === "expenses" ? incomesOpt : expensesOpt;
  const aspect = type === "expenses" ? 0.5 : 2;

  const data = {
    datasets: [
      {
        data: optArr.sort((a, b) => {
          return b.nested.value - a.nested.value;
        }),
        maxBarThickness: 15,
        borderRadius: 10,
        minBarLength: 80,
        backgroundColor: ["#ff751d", "#ffdac0", "#ffdac0"],
        datalabels: {
          formatter: function (value, context) {
            return (
              context.chart.data.datasets[0].data[context.dataIndex].nested
                .value + " грн"
            );
          },
          color: "#52555f",
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
        left: 0,
        right: 30,
        top: 0,
      },
    },
    parsing: {
      xAxisKey: "nested.value",
      yAxisKey: "id",
      // key: 'data.nested.value',
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: ["rgba(0, 0, 0, 0)"],
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          borderColor: ["rgba(0, 0, 0, 0)"],
        },
        ticks: {
          align: "start",
          mirror: true,
          labelOffset: -21,
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
    <div className={s.container}>
      <Bar data={data} options={options} />
    </div>
  );
}

// import { Chart } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import s from "./Graph.module.scss";

// Chart.register(ChartDataLabels);

// export default function GraphMobile({
//   transactions,
//   categories,
//   chartsCategoryId,
// }) {
//   const data = chartsCategoryId ? transactions : categories;

//   const graphInfo = {
//     datasets: [
//       {
//         data: data,
//         maxBarThickness: 15,
//         borderRadius: 10,
//         minBarLength: 80,
//         backgroundColor: ["#ff751d", "#ffdac0", "#ffdac0"],
//         datalabels: {
//           formatter: function (value, context) {
//             return (
//               context.chart.data.datasets[0].data[context.dataIndex].nested
//                 .value + " грн"
//             );
//           },
//           color: "#52555f",
//           anchor: "end",
//           align: "top",
//         },
//         plugins: [ChartDataLabels],
//       },
//     ],
//   };

//   const options = {
//     indexAxis: "y",
//     layout: {
//       padding: {
//         left: 0,
//         right: 30,
//         top: 0,
//       },
//     },
//     parsing: {
//       xAxisKey: "nested.value",
//       yAxisKey: "id",
//       key: "data.nested.value",
//     },
//     maintainAspectRatio: false,
//     responsive: true,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//           borderColor: ["rgba(0, 0, 0, 0)"],
//         },
//         ticks: {
//           display: false,
//         },
//       },
//       y: {
//         grid: {
//           display: false,
//           borderColor: ["rgba(0, 0, 0, 0)"],
//         },
//         ticks: {
//           align: "start",
//           mirror: true,
//           labelOffset: -21,
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <div className={s.container}>
//       <Bar data={graphInfo} options={options} height={300} width={320} />
//     </div>
//   );
// }
