import React from 'react';
import './GrievanceCircleChart.css';

const GrievanceCircleChart = () => {
  const stateData = [
    { name: 'Tamil Nadu', percentage: 220, color: '#E3FBD6' },
    { name: 'Kerala', percentage: 120, color: '#DBD6FE' },
    { name: 'Delhi', percentage: 200, color: '#FEE4D3' },
    { name: 'Maharashtra', percentage: 120, color: '#F3C3D9' },
    { name: 'Others', percentage: 140, color: '#CCF8FE' },
  ];

  return (
    <div className="grievance-circle-chart">
      {stateData.map((state, index) => (
        <div className="grievance-circle" key={index}>
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill={state.color}
              stroke={state.color}
              strokeWidth="10"
              strokeDasharray={`${state.percentage} 100`}
            />
          </svg>
          <span>{state.name}</span>
        </div>
      ))}
    </div>
  );
};

export default GrievanceCircleChart;
