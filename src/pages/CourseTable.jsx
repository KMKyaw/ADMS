import React from 'react';
export default function CourseTable(){
    return(
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
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            CSC105
                        </th>
                        <td class="px-6 py-4">
                            Introduction to Web Development
                        </td>
                        <td class="px-6 py-4">
                            46
                        </td>
                    </tr>
                    <tr class="bg-[#EDEFFE] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            GEN111
                        </th>
                        <td class="px-6 py-4">
                            Beauty of Life
                        </td>
                        <td class="px-6 py-4">
                            60
                        </td>
                    </tr>
                    <tr class="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            CSC102
                        </th>
                        <td class="px-6 py-4">
                            Introduction to Programming
                        </td>
                        <td class="px-6 py-4">
                            55
                        </td>
                    </tr>
                    <tr class="border-b bg-[#EDEFFE] dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            CSC103
                        </th>
                        <td class="px-6 py-4">
                            Networking and Data Communication
                        </td>
                        <td class="px-6 py-4">
                            40
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            GEN101
                        </th>
                        <td class="px-6 py-4">
                            Physical Education
                        </td>
                        <td class="px-6 py-4">
                            50
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
);
}