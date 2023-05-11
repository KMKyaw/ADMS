import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { NavLink } from "react-router-dom";
export default function CourseStudentViewTable(courseid) {
  const [studentData, setStudentData] = useState([]);
  const getData = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:5000/student/getData/specific/courseid",
        {
          courseid: courseid.courseid,
        }
      );
      console.log(response.data.studentdata);
      console.log("OKKOKOOKOKO");
      console.log(courseid.courseid);
      setStudentData(response.data.studentdata);
      console.log("Here");
      console.log(studentData);
      return response;
    } catch (error) {
      console.error(error.message);
      console.error(error.response.status);
      throw error;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-navbar dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 text-gray-50">
              Student ID
            </th>
            <th scope="col" class="px-6 py-3 text-gray-50">
              First Name
            </th>
            <th scope="col" class="px-6 py-3 text-gray-50">
              GPAX
            </th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((item, index) => (
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.studentid}
              </th>
              <td class="px-6 py-4">{item.firstname}</td>
              <td class="px-6 py-4">{item.gpax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
