import { NavLink, useNavigate } from 'react-router-dom';
export default function ReviewCourse(){
    const navigate = useNavigate();
    const handleTabClick = () => {
        navigate(`/navbar/course`);
      };
    return(
        <div>
            <div>     
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Course Information
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Course Data
                                </th>                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white md:w-[30%]">
                                    Course ID
                                </th>
                                <td class="px-6 py-4">
                                    CSC106
                                </td>                            
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Course Title
                                </th>
                                <td class="px-6 py-4">
                                    Cooking and Gardening 101
                                </td>                            
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Course Description
                                </th>
                                <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </td>                            
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Maximun Number of Students
                                </th>
                                <td class="px-6 py-4">
                                    30
                                </td>                            
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Lecturer
                                </th>
                                <td class="px-6 py-4">
                                    John Doe
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='sm:absolute relative bottom-0 w-screen'>
                    <hr class="h-[3px] mt-8 mb-4 bg-navbar border-0"/>
                    <div className="pb-4 pr-1 self-end">
                        <button onClick={handleTabClick} className="absolute left-1 underline text-navbar font-medium rounded-md px-5 py-2.5 mr-2 mb-2">CANCEL</button>
                            <div className='pb-3 pr-3 float-right'>
                                <button className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-3 py-2.5 mr-2 mb-2 focus:outline-none "><NavLink to='/navbar/course'><span>PROCESS</span></NavLink></button>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}