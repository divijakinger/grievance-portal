import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Replace these with your actual data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const grievanceCounts = [10, 15, 12, 20, 18, 25, 22, 30, 28, 35, 32, 40];

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Grievance Statistics',
        data: grievanceCounts,
        fill: true, // To fill the area under the line
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        borderWidth: 2, // Line width
        pointRadius: 4, // Point radius
        tension: 0.4, // Use a cubic bezier curve for smoother flow
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Disable the x-axis grid lines
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
        ticks: {
          stepSize: 5, // Customize the step size of y-axis ticks
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
