import React from "react";
export default function CourseTable({ data }) {
  console.log("this is course");
  console.log(data);
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
              Max Students
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.courseid}
                </th>
                <td class="px-6 py-4">{item.coursetitle}</td>
                <td class="px-6 py-4">{item.max}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
