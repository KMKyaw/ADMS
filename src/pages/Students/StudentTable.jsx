import React from 'react';
export default function StudentTable(){
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
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500249
                        </th>
                        <td class="px-6 py-4">
                            Kaung Myat Kyaw
                        </td>
                        <td class="px-6 py-4">
                            3.75
                        </td>
                    </tr>
                    <tr class="bg-[#EDEFFE] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500247
                        </th>
                        <td class="px-6 py-4">
                            Putu Andhika Restu Kurnia
                        </td>
                        <td class="px-6 py-4">
                            4.0
                        </td>
                    </tr>
                    <tr class="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500245
                        </th>
                        <td class="px-6 py-4">
                            Dyan Mac Vyes
                        </td>
                        <td class="px-6 py-4">
                            3.91
                        </td>
                    </tr>
                    <tr class="border-b bg-[#EDEFFE] dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            65130500131
                        </th>
                        <td class="px-6 py-4">
                            John Doe
                        </td>
                        <td class="px-6 py-4">
                            2.5
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            64105300345
                        </th>
                        <td class="px-6 py-4">
                            Tchaikovsky
                        </td>
                        <td class="px-6 py-4">
                            3.0
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
);
}