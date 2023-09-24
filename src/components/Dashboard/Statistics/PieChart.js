import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ type }) => {
  let data;

  switch (type) {
    case 'grievance':
      data = {
        labels: ['Hold', 'Pending', 'Resolved', 'Rejected'],
        datasets: [
          {
            label: 'Grievance Segregation',
            data: [10, 20, 30, 40], // Replace with actual data
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      };
      break;

    case 'department':
      data = {
        labels: [
          'Housing and Urban Affairs',
          'Finance',
          'Forest and Climate Change',
        ],
        datasets: [
          {
            label: 'Department Segregation',
            data: [50, 30, 20], // Replace with actual data
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(75, 192, 192)',
            ],
            hoverOffset: 4,
          },
        ],
      };
      break;

    default:
      data = {}; // Handle other cases or provide a default empty data object
      break;
  }

  return <Doughnut data={data} />;
};

export default DoughnutChart;
