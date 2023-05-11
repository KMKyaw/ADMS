import React, { useState, useEffect } from "react";
import CoursePageTable from "./StudentPageTable.jsx";
import { NavLink } from "react-router-dom";
import Footer from "../Footer.jsx";
import Axios from "axios";
export default function Student() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
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

  return (
    <div onLoad={getData}>
      <div className="py-7 px-4">
        <span className="p-2 md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">
          Manage Student
        </span>
        <div className="pt-4">
          <div className="m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
            <div className="pt-4">
              <div className="grid grid-cols-2">
                <div>
                  <p className="p-4 pt-7 md:text-2xl text-xl font-bold whitespace-nowrap text-navbar">
                    List of Students
                  </p>
                </div>
                <div className="pr-4 pt-4">
                  <button
                    type="button"
                    onClick={handleClick}
                    class="rounded-md shadow-md border-2 float-right text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2 mr-2 mb-2 focus:outline-none md:h-[48px] h-[52.5px]"
                  >
                    <div className="flex justify-center">
                      <svg
                        aria-hidden="true"
                        class="content-center w-5 h-5 text-gray-50"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <button
                    type="button"
                    class="shadow-md border-2 float-right text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  >
                    <NavLink to="add">
                      <span className="md:hidden block text-xl">+</span>
                      <span className="md:block hidden">+ ADD</span>
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className={`w-full ${isOpen ? "block" : "hidden"}`}>
                <div className="px-4 md:py-6 py-4">
                  <form>
                    <label
                      for="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div class="relative">
                      <input
                        type="search"
                        id="default-search"
                        class="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Student ID"
                        required
                      />
                      <button
                        type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="p-4">
                {studentData && <CoursePageTable data={studentData} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <Footer />
      </div>
    </div>
  );
}
