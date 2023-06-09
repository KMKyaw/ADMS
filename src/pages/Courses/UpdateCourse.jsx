import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import Axios from "axios";
export default function UpdateCoures() {
  const [courseID, setCourseID] = useState("");
  const [courseTitle, setCourseTitle] = useState("Doe");
  const [courseDesc, setCourseDesc] = useState("65130500249");
  const [maxStudents, setMaxStudents] = useState(3.91);
  const { courseid } = useParams();
  const [studentData, setStudentData] = useState([]);
  const [lecturer, setLecturer] = useState("");
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

  const handleReviewTabClick = () => {
    if (
      courseID !== studentData[0].courseid ||
      courseTitle !== studentData[0].coursetitle ||
      courseDesc !== studentData[0].coursedes ||
      maxStudents !== studentData[0].max ||
      lecturer !== studentData[0].lecturer
    ) {
      navigate(
        `/navbar/course/review/${courseID}/${courseTitle}/${courseDesc}/${maxStudents}/${lecturer}`
      );
    } else {
      window.alert("No changes detected.");
    }
  };

  const navigate = useNavigate();
  const handleTabClick = () => {
    navigate(`/navbar/course`);
  };
  return (
    <div className="pt-7 px-4">
      <span className="p-2 md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">
        Update Course
      </span>
      <div className="pt-4">
        <div className="m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
          <form className="flex flex-col">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div className="px-4 pt-4">
                <label
                  for="first_name"
                  class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar"
                >
                  Course ID
                </label>
                <input
                  onChange={(e) => setCourseID(e.target.value)}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="CSC/GEN..."
                  defaultValue={
                    studentData.length ? studentData[0].courseid : ""
                  }
                />
              </div>
              <div className="px-4 md:pt-4">
                <label
                  for="first_name"
                  class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar"
                >
                  Course Title
                </label>
                <input
                  onChange={(e) => setCourseTitle(e.target.value)}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Title..."
                  defaultValue={
                    studentData.length ? studentData[0].coursetitle : ""
                  }
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <div className="px-4 md:pt-4">
                <label
                  for="first_name"
                  class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar"
                >
                  Course Description
                </label>
                <input
                  onChange={(e) => setCourseDesc(e.target.value)}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Description..."
                  defaultValue={
                    studentData.length ? studentData[0].coursedes : ""
                  }
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <div className="px-4 md:pt-4">
                <label
                  for="first_name"
                  class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar"
                >
                  Maximum Number of Student
                </label>
                <input
                  onChange={(e) => setMaxStudents(e.target.value)}
                  type="number"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Number"
                  defaultValue={studentData.length ? studentData[0].max : ""}
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <div className="px-4 md:pt-4">
                <label
                  for="first_name"
                  class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar"
                >
                  Lecturer
                </label>
                <input
                  onChange={(e) => setLecturer(e.target.value)}
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name..."
                  defaultValue={
                    studentData.length ? studentData[0].lecturer : ""
                  }
                  required
                />
              </div>
            </div>
            <hr class="h-[3px] mt-8 mb-4 bg-navbar border-0" />
            <div className="pb-3 pr-1 self-end">
              <button
                onClick={handleTabClick}
                className="absolute left-1 underline text-navbar font-medium rounded-md px-5 py-2.5 mr-2 mb-2"
              >
                CANCEL
              </button>
              <div>
                <button
                  type="reset"
                  className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                >
                  <span>RESET</span>
                </button>
                <button
                  onClick={handleReviewTabClick}
                  type="submit"
                  className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-3 py-2.5 mr-2 mb-2 focus:outline-none "
                >
                  <span>REVIEW</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
