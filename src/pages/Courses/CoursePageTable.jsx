import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function CoursePageTable({ data }) {
  const [isOpenMap, setIsOpenMap] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setIsOpenMap((prevIsOpenMap) => ({
      ...prevIsOpenMap,
      [index]: !prevIsOpenMap[index],
    }));

    setActiveIndex(index);
  };
  return (
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-navbar dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 text-gray-50">
              Course ID
            </th>
            <th scope="col" class="px-6 py-3 text-gray-50">
              Course Title
            </th>
            <th scope="col" class="px-6 py-3 text-gray-50">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.courseid}
              </th>
              <td class="px-6 py-4">{item.coursetitle}</td>
              <td class="px-6 py-4 font-extrabold	text-navbar text-lg">
                <button onClick={() => handleClick(index)}>...</button>
                {isOpenMap[index] && activeIndex === index && (
                  <div className="absolute right-[17%] border-2 bg-navbar">
                    <div className="grid grid-rows-3 text-gray-50 font-normal md:text-lg text-base">
                      <div className="border-b-2 px-5 py-1 border-gray-50">
                        <NavLink
                          to={`/navbar/course/update/${item.courseid}`}
                          className="hover:text-blue-400"
                        >
                          Update
                        </NavLink>
                      </div>
                      <div className="border-b-2 px-5 py-1 border-gray-50">
                        <NavLink
                          to={`/navbar/course/delete/${item.courseid}`}
                          className="hover:text-blue-400"
                        >
                          Delete
                        </NavLink>
                      </div>
                      <div className="border-b-2 px-5 py-1 border-gray-50">
                        <NavLink
                          to={`/navbar/course/view/${item.courseid}`}
                          className="hover:text-blue-400"
                        >
                          View
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
