import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);


const BarChart = () => {
  const langNames = {
    1: 'English',
    2: 'Marathi',
    3: 'Hindi',
    4: 'Tamil',
    5: 'Telugu',
    6: 'Gujarati',
    7: 'Bengali',
  }

  const langData = [4,5,6,7,8,9,10]
  const languagesData = [4,5,6,7,8,9,10]
  const chartData = {
    labels: langData,
    datasets: [
      {
        label: 'Language',
        data: languagesData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color for sensor accidents
        borderColor: 'rgba(75, 192, 192, 1)', // Border color for sensor accidents
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
