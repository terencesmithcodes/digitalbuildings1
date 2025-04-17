import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

import { useSelector } from "react-redux";

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const CoolHeatChart = () => {
  const { energyData } = useSelector((state) => state.energy);
  
  // Extract HVAC breakdown or use defaults
  const hvacBreakdown = energyData?.hvacBreakdown || { cooling: 42, heating: 58 };
  
  const data = {
    labels: ['Heating', 'Cooling'],
    datasets: [
      {
        label: 'HVAC Energy Distribution (%)',
        data: [hvacBreakdown.heating, hvacBreakdown.cooling],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'HVAC Energy Distribution',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default CoolHeatChart;
