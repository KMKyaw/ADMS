import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from "react-router-dom";
export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return(
  <div>
    <nav className="bg-navbar border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
            <img src="./Logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-50">ADMS</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg bg- md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-navbar dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {/* <NavLink to="dashboard" className="block py-2 pl-3 pr-4 text-gray-50 bg-blue-400 rounded md:bg-transparent md:text-blue-400 md:p-0" aria-current="page">Dashboard</NavLink> */}
              <NavLink to="dashboard" className="block py-2 pl-3 pr-4 text-gray-50 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="course" className="block py-2 pl-3 pr-4 text-gray-50 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Course</NavLink>
            </li>
            <li>
              <NavLink to="student" className="block py-2 pl-3 pr-4 text-gray-50 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Student</NavLink>
            </li>
            <li>
              <a href="#" onClick={handleClick} className="text-red-400 block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <Outlet />
    </main>
</div>
  );
}