import s from "./Graph.module.scss";
import { Chart } from "react-google-charts";

export default function Graph() {
  return (
    <div className={s.container}>
      <Chart
        width={"100%"}
        height={"100%"}
        color={"var(--light-orange-color)"}
        chartType="BarChart"
        loader={<div>Загрузка отчета</div>}
        data={[
          ["Category", "Цена"],
          ["Говядина", 4500],
          ["Курица", 3200],
          ["Рыба", 2100],
          ["Панини", 400],
          ["Кофе", 200],
          ["Спагетти", 800],
          ["Шоколад", 400],
          ["Маслины", 500],
          ["Зелень", 400],
        ]}
        rootProps={{ "data-testid": "6" }}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "StringFilter",
            options: {
              filterColumnIndex: 0,
              matchType: "any", // 'prefix' | 'exact',
              ui: {
                label: "Поиск по названию",
              },
              chart: {
                colors: ["#FB7A21"],
                backgroundColor: "#FF751D",
              },
            },
          },
        ]}
      />
    </div>
  );
}

// import s from "./Graph.module.scss";
// import VerticalBarGraph from '@chartiful/react-vertical-bar-graph'

// export default function Graph() {
//   return (
//     <div className={s.container}>
//       <VerticalBarGraph
//         data={[20, 45, 28, 80, 99, 43, 50]}
//         labels={['Свинина', 'Говядина', 'Курица', 'Рыба', 'Зелень', 'Кофе', 'Спагетти']}
//         width={600}
//         height={300}
//         barRadius={10}
//         barColor={"var(--light-orange-color)"}
//         barWidthPercentage={0.60}
//         baseConfig={{
//           // hasXAxisBackgroundLines: false,
//           xAxisLabelStyle: {
//             rotation: 0,
//             fontSize: 12,
//             width: 60,
//             xOffset: 4,
//             xOffset: 12
//           }
//         }}
//         // style={{
//         //   paddingVertical: 10,
//         // }}
//       />
//     </div>
// );
// }

// import s from "./Graph.module.scss";
// import {
//   Tooltip,
//   BarChart,
//   XAxis,
//   YAxis,
//   Legend,
//   CartesianGrid,
//   Bar,
// } from "recharts";

// export default function Graph() {
//   const data = [
//     { name: "Свинина", value: 5000 },
//     { name: "Говядина", value: 4500 },
//     { name: "Курица", value: 3200 },
//     { name: "Рыба", value: 2100 },
//     { name: "Панини", value: 400 },
//     { name: "Кофе", value: 200 },
//     { name: "Спагетти", value: 800 },
//     { name: "Шоколад", value: 400 },
//     { name: "Маслины", value: 500 },
//     { name: "Зелень", value: 400 },
//   ];

//   const seriesLabels = {
//     visible: true,
//     font: "normal 12px Arial, sans-serif",
//     position: "center",
//   };

//   return (
//     <div className={s.container}>
//       <BarChart
//         className={s.BarChart}
//         width={600}
//         height={422}
//         data={data}
//         barSize={38}
//       >
//         <XAxis
//           dataKey="name"
//           scale="point"
//           padding={{ left: 20, right: 15 }}
//         />

//         <Tooltip />
//         <YAxis />
//         {/* <CartesianGrid strokeDasharray="9 9" /> */}

//         <Bar
//           dataKey="value"
//           fill="var(--light-orange-color)"
//           style={{ cursor: "pointer" }}
//         />
//       </BarChart>
//     </div>
//   );
// }
