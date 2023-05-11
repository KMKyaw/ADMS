import { NavLink, useNavigate,useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";
export default function ViewStudent(){
    const {studentid} = useParams();
    const [courseID, setCourseID] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDesc, setCourseDesc] = useState("");
    const [maxStudents, setMaxStudents] = useState(0);
    const [coures, setCourses] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const getData = async () => {
        try {
          const response = await Axios.post("http://localhost:5000/student/getData/specific", {
            studentId : studentid
          });
          console.log(studentid);
          setStudentData(response.data.studentdata);
          return response;
        } catch (error) {
          console.error(error.message);
          console.error(error.response.status);
          throw error;
        }
      };
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (studentData.length > 0) {
            setCourseID(studentData[0].firstname);
            setCourseTitle(studentData[0].lastname);
            setCourseDesc(studentData[0].studentid);
            setMaxStudents(studentData[0].gpax);
            const temp = [];
            for(var i=0;i<studentData.length;i++){
                temp[i] = studentData[i].course;
            }
            setCourses(temp);
            const dvalue = coures.map((course) => {
                return { label: course };
            });
          }
      }, [studentData]);
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
                                    {courseID}
                                </td>                            
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Last Name
                                </th>
                                <td class="px-6 py-4">
                                    {courseTitle}
                                </td>                            
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Student ID
                                </th>
                                <td class="px-6 py-4">
                                    {courseDesc}
                                </td>                            
                            </tr>
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    GPAX
                                </th>
                                <td class="px-6 py-4">
                                    {maxStudents}
                                </td>                            
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Courses
                                </th>
                                <td class="px-6 py-4">
                                    {coures.join(" , ")}
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