import React from 'react';
export default function StudentTable({data}){
    console.log("this is data");
    console.log(data);
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
                    {data.map((item) => (
                        <tr key={item.id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500249
                            </th>
                            <td class="px-6 py-4">
                            Kaung Myat Kyaw
                            </td>
                            <td class="px-6 py-4">
                            3.75
                            </td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            {/* add other table cells as needed */}
                        </tr>
                    ))}
                    {/* <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500249
                        </th>
                        <td class="px-6 py-4">
                            Kaung Myat Kyaw
                        </td>
                        <td class="px-6 py-4">
                            3.75
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
);
}