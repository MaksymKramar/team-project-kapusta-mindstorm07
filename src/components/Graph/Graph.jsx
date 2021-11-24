import React from "react";
import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import s from "./Graph.module.scss";
// import { expensesOpt, incomesOpt } from '../../data/optionsChart';
// import { expensesOpt } from '../../pages/ReportsView/index';
import { useSelector } from "react-redux";
import {} from "../../redux/transactions";
import { getDescription, getCategoriesExpenses } from "../../redux/report";

Chart.register(ChartDataLabels);

export default function Graph({ categoryId }) {
  // const sumExp = useSelector(getFilteredCategExp);
  // const sumInc = useSelector(getFilteredCategInc);

  const description = useSelector(getDescription);
  const currentCategory = useSelector(getCategoriesExpenses);

  // description.map(desc=>desc.group.category)

  const sortDescription = description.filter((desc) =>
    console.log(desc.group.category === categoryId)
  );
  // console.log(sortDescription);

  function ExpSort() {
    if (description) {
      /// Сумма
      return getExp();
    }
  }

  function getExp() {
    const res = [...description];
    return res.sort((a, b) => b.total - a.total);
  }

  function IncSort() {
    if (description) {
      return getInc();
    }
  }
  function getInc() {
    const res = [...description];
    return res.sort((a, b) => b.total - a.total);
  }

  const aspect = currentCategory === "expenses" ? 3 : 3;

  const dataIncomings = {
    datasets: [
      {
        data: IncSort(),

        maxBarThickness: 38,
        borderRadius: 20,
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
        borderRadius: 20,
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
  const options = {
    parsing: {
      xAxisKey: "group.description", ///Свинина Говядина ....
      yAxisKey: "total", /// Сумма 5000 4500 ...
      key: "data.total",
    },
    responsive: true,
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 30,
        // bottom: 20,
      },
    },
    aspectRatio: aspect,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "white",
        },
      },
      y: {
        grid: {
          borderColor: "white",
        },
        ticks: {
          display: false,
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
    <div className={s.charterReport}>
      {<Bar data={dataExpenses} options={options} />}
      {currentCategory === "incomings" && (
        <Bar data={dataIncomings} options={options} />
      )}
    </div>
  );
}

// import { Chart } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { useSelector } from "react-redux";
// import { getDescription } from "../../redux/report";
// Chart.register(ChartDataLabels);

// export default function Graph({ type }) {
//   const description = useSelector(getDescription);
//   // description.map((i) => {
//   //   console.log(i.total)
//   // })
//   const items = [...description];
//   // console.log(des)
//   // function sortDesc() {
//   //   const items = [...description]
//   //   return items.sort((a, b) => {
//   //     return b.total - a.total
//   //   })
//   // }
//   // console.log(sortDesc())
//   // const items = description.sort((a, b) => {
//   //   return b.total - a.total
//   // })
//   // console.log(items)
//   const expensesOpt = [
//     { id: "Свинина", nested: { value: 5000 } },
//     { id: "Говядина", nested: { value: 4500 } },
//     { id: "Курица", nested: { value: 3200 } },
//     { id: "Рыба", nested: { value: 2100 } },
//   ];

//   const incomesOpt = [
//     { id: "ЗП", nested: { value: 25000 } },
//     { id: "Доп.доход", nested: { value: 20000 } },
//   ];

//   const optArr = type === "expenses" ? incomesOpt : expensesOpt;

// const aspect = type === 'expenses' ? 3 : 3

//   console.log(
//     optArr.sort((a, b) => {
//       return b.nested.value - a.nested.value;
//     })
//   );
//   console.log(
//     items.sort((a, b) => {
//       return b.total - a.total;
//     })
//   );
//   const data = {
//     datasets: [
//       {
//         // data: optArr.sort((a, b) => {
//         //   return b.nested.value - a.nested.value
//         // }),

//         // {
//         data: items.sort((a, b) => {
//           return b.total - a.total;
//         }),

//         maxBarThickness: 38,
//         borderRadius: 10,
//         minBarLength: 2,
//         backgroundColor: ["#ff751d", "#ffdac0", "#ffdac0"],

//         // datalabels: {
//         //   formatter: function (value, context) {
//         //     return (
//         //       context.chart.data.datasets[0].data[context.dataIndex].value +
//         //       ' грн'
//         //     )
//         //   },
//         //   color: '#52555f',
//         //   anchor: 'end',
//         //   align: 'top',
//         // },
//         plugins: [ChartDataLabels],
//       },
//     ],
//   };
//   const options = {
//     parsing: {
//       xAxisKey: "id",
//       yAxisKey: "nested.value",
//       // key: 'data.nested.value',
//     },
//     responsive: true,
//     layout: {
//       padding: {
//         left: 5,
//         right: 5,
//         top: 40,
//       },
//     },
//     aspectRatio: 3,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         grid: {
//           borderColor: ["rgba(0, 0, 0, 0)"],
//         },
//         ticks: {
//           display: false,
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
//     <div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }

// import { Chart } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.register(ChartDataLabels);

// export default function Graph({ transactions, categories, chartsCategoryId }) {
//   const data = chartsCategoryId ? transactions : categories;

//   const graphInfo = {
//     datasets: [
//       {
//         data: data,
//         maxBarThickness: 38,
//         borderRadius: 10,
//         minBarLength: 2,
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
//     parsing: {
//       xAxisKey: "id",
//       yAxisKey: "nested.value",
//       key: "data.nested.value",
//     },
//     responsive: true,
//     layout: {
//       padding: {
//         left: 5,
//         right: 5,
//         top: 40,
//       },
//     },
//     aspectRatio: false,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         grid: {
//           borderColor: ["rgba(0, 0, 0, 0)"],
//         },
//         ticks: {
//           display: false,
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
//     <div>
//       <Bar data={graphInfo} options={options} />
//     </div>
//   );
// }
