import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Course'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(168,	210,	109, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
export default function Dashboard() {
  return (
    <div>
      <span className="p-10 text-4xl font-semibold whitespace-nowrap text-navbar">Dashboard</span>
      <div style={{ width: '50%', height: '400px' }}>
        <Doughnut className="p-10" data={data} options={options} responsive maintainAspectRatio={false} aspectRatio={1}/>
      </div>
    </div>
  );
}