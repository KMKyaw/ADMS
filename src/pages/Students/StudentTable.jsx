import React from 'react';
export default function StudentTable({data}){
    console.log("this is data");
    console.log(data);
    const sortedData = [...data].sort((a, b) => b.gpax - a.gpax);
    return(
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-navbar dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-gray-50">
                            Student ID
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-50">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-50">
                            GPAX
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.slice(0, 5).map((item) => (
                    <tr key={item.gpax} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.studentid}
                        </th>
                        <td class="px-6 py-4">
                        {item.firstname}
                        </td>
                        <td class="px-6 py-4">
                        {item.gpax}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
);
}