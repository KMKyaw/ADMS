import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
export default function StudentPageTable(){
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
      }
    return(
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
                        <th scope="col" class="px-6 py-3 text-gray-50">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500249
                        </th>
                        <td class="px-6 py-4">
                            John
                        </td>
                        <td class="px-6 py-4">
                            3.75
                        </td>
                        <td class="px-6 py-4 font-extrabold	text-navbar text-lg">
                            <button onClick={handleClick}>...</button>
                            <div className={`${isOpen ? "block" : "hidden"}`}>
                                <div className='absolute right-[10%] border-2 bg-navbar'>
                                    <div className='grid grid-rows-3 text-gray-50 font-normal md:text-lg text-base'>
                                        <div className='border-b-2 px-5 py-1 border-gray-50'>
                                            <NavLink to="update" className='hover:text-blue-400'>Update</NavLink>
                                        </div>
                                        <div className='border-b-2 px-5 py-1 border-gray-50'>
                                            <NavLink to="delete" className='hover:text-blue-400'>Delete</NavLink>
                                        </div>
                                        <div className='border-b-2 px-5 py-1 border-gray-50'>
                                            <NavLink to="view" className='hover:text-blue-400'>View</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-[#EDEFFE] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130600342
                        </th>
                        <td class="px-6 py-4">
                            William
                        </td>
                        <td class="px-6 py-4">
                            3.91
                        </td>
                        <td class="px-6 py-4 font-extrabold	text-navbar text-lg">
                            ...
                        </td>
                    </tr>
                    <tr class="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            64130500924
                        </th>
                        <td class="px-6 py-4">
                            Mira
                        </td>
                        <td class="px-6 py-4">
                            2.75
                        </td>
                        <td class="px-6 py-4 font-extrabold	text-navbar text-lg">
                            ...
                        </td>
                    </tr>
                    <tr class="border-b bg-[#EDEFFE] dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            64130600342
                        </th>
                        <td class="px-6 py-4">
                            Roti
                        </td>
                        <td class="px-6 py-4">
                            3.43
                        </td>
                        <td class="px-6 py-4 font-extrabold	text-navbar text-lg">
                            ...
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500298
                        </th>
                        <td class="px-6 py-4">
                            Tchaikovsky
                        </td>
                        <td class="px-6 py-4">
                            2.5
                        </td>
                        <td class="px-6 py-4 font-extrabold	text-navbar text-lg">
                            ...
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
);
}