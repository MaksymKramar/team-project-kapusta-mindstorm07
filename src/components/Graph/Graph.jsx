import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

export default function Graph({ transactions, categories, chartsCategoryId }) {
  const data = chartsCategoryId ? transactions : categories;

  const graphInfo = {
    datasets: [
      {
        data: data,
        maxBarThickness: 38,
        borderRadius: 10,
        minBarLength: 2,
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
    parsing: {
      xAxisKey: "id",
      yAxisKey: "nested.value",
      key: "data.nested.value",
    },
    responsive: true,
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 40,
      },
    },
    aspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderColor: ["rgba(0, 0, 0, 0)"],
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
    <div>
      <Bar data={graphInfo} options={options} />
    </div>
  );
}
