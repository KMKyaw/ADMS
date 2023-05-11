import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
import Axios from "axios";

export default function AddCourse() {
  const [formValid, setFormValid] = useState(false);
  const [courseID, setCourseID] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [maxStudents, setMaxStudents] = useState(0);
  const [lecturer, setLecturer] = useState("");
  const handleInputChange = () => {
    console.log("MOVE");
    if (courseID && courseTitle && courseDesc && maxStudents && lecturer) {
      setFormValid(true);
      console.log("OKOK");
    } else {
      setFormValid(false);
      console.log("NONO");
    }
    setCourseID(document.getElementById("course_id").value);
    setCourseTitle(document.getElementById("course_title").value);
    setCourseDesc(document.getElementById("course_desc").value);
    setMaxStudents(document.getElementById("max_students").value);
    setLecturer(document.getElementById("lecturer").value);
  };
  useEffect(() => {
    setCourseID(document.getElementById("course_id").value);
    setCourseTitle(document.getElementById("course_title").value);
    setCourseDesc(document.getElementById("course_desc").value);
    setMaxStudents(document.getElementById("max_students").value);
    setLecturer(document.getElementById("lecturer").value);
    console.log(courseID);
    console.log(courseTitle);
    console.log(courseDesc);
    console.log(maxStudents);
    console.log(lecturer);
    if (courseID && courseTitle && courseDesc && maxStudents && lecturer) {
      setFormValid(true);
      console.log("Form Valid");
    } else {
      setFormValid(false);
      console.log("Form Invalid");
    }
  }, [courseID, courseTitle, courseDesc, maxStudents, lecturer]);

  const handleReviewTabClickAdd = () => {
    if (formValid == true) {
      navigate(
        `/navbar/course/addreview/${courseID}/${courseTitle}/${courseDesc}/${maxStudents}/${lecturer} `
      );
    } else {
      window.alert("Please fill the Course field");
    }
  };
  const navigate = useNavigate();
  const handleTabClick = () => {
    navigate(`/navbar/student`);
  };
  return (
    <div className="pt-7 px-4">
      <span className="p-2 md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">
        Add Course
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
                  onChange={handleInputChange}
                  type="text"
                  id="course_id"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="CSC/GEN..."
                  required
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
                  onChange={handleInputChange}
                  type="text"
                  id="course_title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Title..."
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
                  onChange={handleInputChange}
                  type="text"
                  id="course_desc"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Description..."
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
                  onChange={handleInputChange}
                  type="number"
                  id="max_students"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Number"
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
                  onChange={handleInputChange}
                  type="text"
                  id="lecturer"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name..."
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
                  onClick={handleReviewTabClickAdd}
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
