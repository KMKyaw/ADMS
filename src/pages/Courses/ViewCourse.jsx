import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import CourseStudentViewTable from "./CourseStudentViewTable";
export default function ViewCourse() {
  const { courseid } = useParams();
  const [courseID, setCourseID] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [maxStudents, setMaxStudents] = useState(0);
  const [lecturer, setLecturer] = useState("");
  const [studentData, setStudentData] = useState([]);
  const getData = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:5000/course/getData/specific",
        {
          courseid: courseid,
        }
      );
      console.log(response.data.studentdata);
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

  useEffect(() => {
    console.log("Updated studentData:", studentData[0]);
  }, [studentData]);
  useEffect(() => {
    if (studentData.length > 0) {
      setCourseID(studentData[0].courseid);
      setCourseTitle(studentData[0].coursetitle);
      setCourseDesc(studentData[0].coursedes);
      setMaxStudents(studentData[0].max);
      setLecturer(studentData[0].lecturer);
    }
  }, [studentData]);
  const navigate = useNavigate();
  const handleTabClick = () => {
    navigate(`/navbar/course`);
  };
  return (
    <div>
      <div>
        <div className="p-5 pb-8">
          <span className=" md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">
            View Courses
          </span>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="md:text-lg text-base px-6 py-3">
                  Course Information
                </th>
                <th scope="col" class="md:text-lg text-base px-6 py-3">
                  Course Data
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white md:w-[30%]"
                >
                  Course ID
                </th>
                <td class="px-6 py-4">{courseID}</td>
              </tr>
              <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Course Title
                </th>
                <td class="px-6 py-4">{courseTitle}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Course Description
                </th>
                <td class="px-6 py-4">
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  */}
                  {courseDesc}
                </td>
              </tr>
              <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maximun Number of Students
                </th>
                <td class="px-6 py-4">{maxStudents}</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lecturer
                </th>
                <td class="px-6 py-4">{lecturer}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="py-7 px-4">
          <div className="pt-4">
            <div className="m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
              <div className="pt-4">
                <div className="grid grid-cols-2">
                  <div>
                    <p className="p-4 pt-3 md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">
                      Enrolled Students
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <CourseStudentViewTable courseid={courseid} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bottom-10 w-screen pb-2">
          <hr class="h-[3px] mt-8 mb-4 bg-navbar border-0" />
          <div className="pb-4">
            <button
              onClick={handleTabClick}
              className="absolute left-1 underline text-navbar font-medium rounded-md px-5 py-2.5 mr-2 mb-2"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
