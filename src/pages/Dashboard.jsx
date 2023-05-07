import {React,useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import CourseTable from './Courses/CourseTable';
import StudentTable from './Students/StudentTable';
import Footer from './Footer';
import Axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);



export default function Dashboard() {
  const [studentData, setStudentData] = useState([]);
const getData = async () => {
  try {
    const response = await Axios.get("http://localhost:5000/student/getData");
    console.log("OK");
    setStudentData(response.data.data);
    console.log(response.data.data);
    return response;
  } catch (error) {
    console.error(error.message);
    console.error(error.response.status);
    throw error;
  }
};
useEffect(() => {
  console.log(studentData);
}, [studentData]);

 const data = {
  labels: ['Course'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(168,	210,	109, 0.5)',
        'rgba(252,	239,	233, 1)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


 const Bardata = {
  labels: ['2.0', '2.25 ', '2.5', '2.75', '3.0', '3.25', '3.5', '3.75', '4.0'],
  datasets: [
    {
      data: [3, 9, 7, 11, 19, 13, 15, 13, 10],
      backgroundColor: 'rgba(168,	210,	109, 0.5)',
      borderColor: 'black',
      borderWidth: 1,
    }
  ]
}
 const Studentdata = {
  labels: ['Studnt'],
  datasets: [
    {
      label: '# of Votes',
      data: [45, 14],
      backgroundColor: [
        'rgba(168,	210,	109, 0.5)',
        'rgba(252,	239,	233, 1)',
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

const Studentoptions = {
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
       ctx.font = "bold " + fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       var text = "24%",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2.25;
       ctx.fillStyle = "#373B61";
       ctx.fillText(text, textX, textY);
       ctx.save();
  } 
}]

const Studentplugins = [{
  beforeDraw: function(chart) {
   var width = chart.width,
       height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       var fontSize = (height / 160).toFixed(2);
       ctx.font = "bold " + fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       var text = "76%",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2.25;
       ctx.fillStyle = "#373B61";
       ctx.fillText(text, textX, textY);
       ctx.save();
  } 
}]


  return (
    <div onLoad={getData}>
      <div className='py-7 px-8'>
      <span className="md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">Dashboard</span>
      </div>
        <div className='md:grid md:grid-cols-2 grid-cols-1'>
          <div className='px-2'>
            <div className='flex justify-between'>
              <div className='border-2 relative shadow-md w-[100%]'>
                <div className="grid grid-cols-2">
                  <div className='w-[100%] md:h-[280px] h-[180px]'>
                    <Doughnut className='p-5' data={data} options={options} plugins={plugins} responsive maintainAspectRatio={false} aspectRatio={1}/>
                  </div>
                  <div className='relative md:top-[33%] top-[25%]'>
                    <p className="pb-3 md:text-3xl text-xl font-bold whitespace-nowrap text-navbar text-navbar">5</p>
                    <p className="md:text-2xl text-lg font-semibold whitespace-nowrap text-navbar">Courses Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='px-2 md:pt-0 pt-4'>
            <div className='flex justify-between'>
              <div className='border-2 relative shadow-md w-[100%]'>
                <div className="grid grid-cols-2">
                  <div className='w-[100%] md:h-[280px] h-[180px]'>
                    <Doughnut className='p-5' data={Studentdata} options={Studentoptions} plugins={Studentplugins} responsive maintainAspectRatio={false} aspectRatio={1}/>
                  </div>
                  <div className='relative md:top-[33%] top-[25%]'>
                    <p className="pb-3 md:text-3xl text-xl font-bold whitespace-nowrap text-navbar">87</p>
                    <p className="md:text-2xl text-lg font-semibold whitespace-nowrap text-navbar">Students Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='p-2'>
          <div className='border-2 relative shadow-md'>
            <div className='p-5'>
              <p className="md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">GPAX Distribution</p>
            </div>
            <div className='px-5 md:w-[100%] md:h-[350px] h-[100%] md:pb-2 pb-4'>
              <Bar
                data={Bardata} 
                options={{
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }} 
                responsive 
                maintainAspectRatio={false} 
                aspectRatio={1}
              />
            </div>
          </div>
        </div>
        
        <div className='pt-2'>
          <div className="p-2 m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
              <div className='p-5'>
                <p className="md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">Top Courses</p>
              </div>
              <div className="p-2">
              <CourseTable/>
              </div>
          </div>
        </div>

        <div className='pt-3'>
          <div className="p-2 m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
              <div className='p-5'>
                <p className="md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">Top Students</p>
              </div>
              <div className="p-2">
              {studentData && <StudentTable data={studentData} />}
              </div>
          </div>
        </div>

        <div className='pt-8'>
          <Footer/>
        </div>
      </div>
  );
}