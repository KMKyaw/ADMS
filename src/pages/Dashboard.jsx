import { React, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import CourseTable from "./Courses/CourseTable";
import StudentTable from "./Students/StudentTable";
import Footer from "./Footer";
import Axios from "axios";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function Dashboard() {
  const [studentData, setStudentData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [gpaData, setGpaData] = useState([]);
  const [studentL, setStudentL] = useState(0);
  const [courseL, setCourseL] = useState(0);
  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/student/getData");
      const courseResponse = await Axios.get(
        "http://localhost:5000/course/getData"
      );
      console.log("OK");
      setStudentData(response.data.data);
      setCourseData(courseResponse.data.data);
      return response;
    } catch (error) {
      console.error(error.message);
      console.error(error.response.status);
      throw error;
    }
  };

  useEffect(
    () => {
      setCourseL(courseData.length);
      setStudentL(studentData.length);
    },
    [studentData],
    [courseData]
  );
  useEffect(() => {
    changeDiagram();
    let temp = [];
    var gpa2 = 0;
    var gpa225 = 0;
    var gpa25 = 0;
    var gpa275 = 0;
    var gpa3 = 0;
    var gpa325 = 0;
    var gpa35 = 0;
    var gpa375 = 0;
    var gpa4 = 0;
    for (var i = 0; i < studentData.length; i++) {
      if (studentData[i].gpax <= 2.0) {
        gpa2++;
      } else if (studentData[i].gpax <= 2.25) {
        gpa225++;
      } else if (studentData[i].gpax <= 2.5) {
        gpa25++;
      } else if (studentData[i].gpax <= 2.75) {
        gpa275++;
      } else if (studentData[i].gpax <= 3.0) {
        gpa3++;
      } else if (studentData[i].gpax <= 3.25) {
        gpa325++;
      } else if (studentData[i].gpax <= 3.5) {
        gpa35++;
      } else if (studentData[i].gpax <= 3.75) {
        gpa375++;
      } else if (studentData[i].gpax <= 4.0) {
        gpa4++;
      }
    }
    temp[0] = gpa2;
    temp[1] = gpa225;
    temp[2] = gpa25;
    temp[3] = gpa275;
    temp[4] = gpa3;
    temp[5] = gpa325;
    temp[6] = gpa35;
    temp[7] = gpa375;
    temp[8] = gpa4;
    setGpaData(temp);
  }, [studentData]);

  const data = {
    labels: ["Course"],
    datasets: [
      {
        label: "# of Votes",
        data: [courseData.length, 30],
        backgroundColor: ["rgba(168,	210,	109, 0.5)", "rgba(252,	239,	233, 1)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const Bardata = {
    labels: [
      "2.0",
      "2.25 ",
      "2.5",
      "2.75",
      "3.0",
      "3.25",
      "3.5",
      "3.75",
      "4.0",
    ],
    datasets: [
      {
        data: gpaData,
        backgroundColor: "rgba(168,	210,	109, 0.5)",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const Studentdata = {
    labels: ["Studnt"],
    datasets: [
      {
        label: "# of Votes",
        data: [studentData.length, 50],
        backgroundColor: ["rgba(168,	210,	109, 0.5)", "rgba(252,	239,	233, 1)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
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

  const changeDiagram = () => {};

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = "bold " + fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var student = 4; // Example student count
        var total = 50; // Example total count
        var percentage = ((student / total) * 100).toFixed(2);
        var text = percentage + "%";
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height / 2.25;
        ctx.fillStyle = "#373B61";
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const Studentplugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = "bold " + fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var student = 1; // Example student count
        var total = 3; // Example total count
        var percentage = ((student / total) * 100).toFixed(2);
        var text = percentage + "%";
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height / 2.25;
        ctx.fillStyle = "#373B61";
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <div onLoad={getData}>
      <div className="py-7 px-8">
        <span className="md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">
          Dashboard
        </span>
      </div>
      <div className="md:grid md:grid-cols-2 grid-cols-1">
        <div className="px-2">
          <div className="flex justify-between">
            <div className="border-2 relative shadow-md w-[100%]">
              <div className="grid grid-cols-2">
                <div className="w-[100%] md:h-[280px] h-[180px]">
                  <Doughnut
                    className="p-5"
                    data={data}
                    options={options}
                    plugins={plugins}
                    responsive
                    maintainAspectRatio={false}
                    aspectRatio={1}
                  />
                </div>
                <div className="relative md:top-[33%] top-[25%]">
                  <p className="pb-3 md:text-3xl text-xl font-bold whitespace-nowrap text-navbar text-navbar">
                    {courseData.length}
                  </p>
                  <p className="md:text-2xl text-lg font-semibold whitespace-nowrap text-navbar">
                    Courses Registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 md:pt-0 pt-4">
          <div className="flex justify-between">
            <div className="border-2 relative shadow-md w-[100%]">
              <div className="grid grid-cols-2">
                <div className="w-[100%] md:h-[280px] h-[180px]">
                  <Doughnut
                    className="p-5"
                    data={Studentdata}
                    options={Studentoptions}
                    plugins={Studentplugins}
                    responsive
                    maintainAspectRatio={false}
                    aspectRatio={1}
                  />
                </div>
                <div className="relative md:top-[33%] top-[25%]">
                  <p className="pb-3 md:text-3xl text-xl font-bold whitespace-nowrap text-navbar">
                    {studentData.length}
                  </p>
                  <p className="md:text-2xl text-lg font-semibold whitespace-nowrap text-navbar">
                    Students Registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="border-2 relative shadow-md">
          <div className="p-5">
            <p className="md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">
              GPAX Distribution
            </p>
          </div>
          <div className="px-5 md:w-[100%] md:h-[350px] h-[100%] md:pb-2 pb-4">
            <Bar
              data={Bardata}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
              responsive
              maintainAspectRatio={false}
              aspectRatio={1}
            />
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="p-2 m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
          <div className="p-5">
            <p className="md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">
              Top Courses
            </p>
          </div>
          <div className="p-2">
            <CourseTable />
          </div>
        </div>
      </div>

      <div className="pt-3">
        <div className="p-2 m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
          <div className="p-5">
            <p className="md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">
              Top Students
            </p>
          </div>
          <div className="p-2">
            {studentData && <StudentTable data={studentData} />}
          </div>
        </div>
      </div>

      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}
