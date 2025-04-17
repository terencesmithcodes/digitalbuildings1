import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

import { useSelector, useDispatch } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EnergyLineChart = () => {
  const { trackRecords, energyData } = useSelector((state) => state.energy);
  
  // Default monthly labels
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  // Use mock data for monthly costs
  const monthlyCosts = energyData?.monthlyCost || [7500, 7800, 8200, 8100, 7900, 8600, 9200, 9400, 8800, 8100, 7800, 7600];

  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Energy Cost ($)",
        data: monthlyCosts,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
};

export default EnergyLineChart;
