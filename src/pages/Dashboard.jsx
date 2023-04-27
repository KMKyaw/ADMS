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

const plugins = [{
  beforeDraw: function(chart) {
   var width = chart.width,
       height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       var fontSize = (height / 160).toFixed(2);
       ctx.font = fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       var text = "24%",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2.25;
       ctx.fillText(text, textX, textY);
       ctx.save();
  } 
}]

export default function Dashboard() {
  return (
    <div>
      <div className='py-7 px-8'>
      <span className="md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">Dashboard</span>
      </div>
      <div className='px-4'>
        <div className='flex justify-between'>
          <div className='border-2 relative shadow-md w-[600px]'>
            <div className="grid grid-cols-2">
              <div className='w-[100%] md:h-[280px] h-[200px]'>
                <Doughnut className='p-5' data={data} options={options} plugins={plugins} responsive maintainAspectRatio={false} aspectRatio={1}/>
              </div>
              <div className='relative top-[33%]'>
                <p className="pb-3 md:text-3xl text-xl font-semibold whitespace-nowrap text-navbar">5</p>
                <p className="md:text-2xl text-xl font-semibold whitespace-nowrap text-navbar">Courses Registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}