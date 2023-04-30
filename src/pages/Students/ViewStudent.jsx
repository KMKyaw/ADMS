import { NavLink, useNavigate } from 'react-router-dom';
export default function ViewStudent(){
    const navigate = useNavigate();
    const handleTabClick = () => {
        navigate(`/navbar/student`);
      };
    return(
        <div>
            <div>
            <div className='p-5 pb-8'>
                    <span className=" md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">View Student</span> 
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="md:text-lg text-base px-6 py-3">
                                    Student Information
                                </th>
                                <th scope="col" class="md:text-lg text-base px-6 py-3">
                                    Student Data
                                </th>                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white md:w-[30%]">
                                    First Name
                                </th>
                                <td class="px-6 py-4">
                                    John Doe
                                </td>                            
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Last Name
                                </th>
                                <td class="px-6 py-4">
                                    Bush
                                </td>                            
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Student ID
                                </th>
                                <td class="px-6 py-4">
                                    65130500249
                                </td>                            
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    GPAX
                                </th>
                                <td class="px-6 py-4">
                                    3.91
                                </td>                            
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Courses
                                </th>
                                <td class="px-6 py-4">
                                    CSC105 - Introduction to Web Development <br/>CSC102 - Introduction to Programming
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='absolute bottom-11 w-screen pb-2'>
                    <hr class="h-[3px] mt-8 mb-4 bg-navbar border-0"/>
                    <div className="pb-4">
                        <button onClick={handleTabClick} className="absolute left-1 underline text-navbar font-medium rounded-md px-5 py-2.5 mr-2 mb-2">CANCEL</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}