import { useState, useEffect } from "react";
import { NavLink, useNavigate,useParams} from "react-router-dom";
import Select from "react-select";
import Axios from "axios";

export default function UpdateStudent(){
    const [courseID, setCourseID] = useState("");
    const [courseTitle, setCourseTitle] = useState("Doe");
    const [courseDesc, setCourseDesc] = useState("65130500249");
    const [maxStudents, setMaxStudents] = useState(3.91);
    const [coures, setCourses] = useState([]);
    const {studentid} = useParams();
    const [studentData, setStudentData] = useState([]);
    const [defaultValue, setdefaultValue] = useState([]);
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
            setdefaultValue(dvalue);
            console.log(coures);
            console.log(dvalue); 
          }
      }, [studentData]);
      
    const handleReviewTabClick = () => {
        if(
        courseID !== studentData[0].firstname ||
        courseTitle !== studentData[0].lastname ||
        courseDesc !== studentData[0].studentid ||
        maxStudents !== studentData[0].gpax
        ){
            navigate(`/navbar/student/review/${courseID}/${courseTitle}/${courseDesc}/${maxStudents}/${coures.join(" , ")}`);
        }else{
            window.alert("No changes detected.")
        }
    };
    const customStyles = {
        control: (provided) => ({
          ...provided,
          backgroundColor: "rgb(249 250 251)",
          fontSize: "0.875rem",
          padding: "2.5px",
          borderRadius: "0.5rem",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: "rgb(249 250 251)",
            fontSize: "0.875rem",
            padding: "2.5px",
            color:  "rgb(55 65 81)",
            '&:hover': {
                backgroundColor: "#e5e7eb",
            },
        })
    };

    const navigate = useNavigate();
    const handleTabClick = () => {
        navigate(`/navbar/student`);
      };
    return(
        <div>
        <div className='pt-7 px-4'>
            <span className="p-2 md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">Update Student</span>
            <div className="pt-4">
                <div className="m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
                    <form className="flex flex-col">
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div className="px-4 pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">First Name</label>
                                <input onChange={(e) => setCourseID(e.target.value)} defaultValue={studentData.length ? studentData[0].firstname : ''} type="text" id="course_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CSC/GEN..." required/>
                            </div>
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Last Name</label>
                                <input onChange={(e) => setCourseTitle(e.target.value)} defaultValue={studentData.length ? studentData[0].lastname : ''} type="text" id="course_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." required/>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Student ID</label>
                                <input onChange={(e) => setCourseDesc(e.target.value)} defaultValue={studentData.length ? studentData[0].studentid : ''} type="text" id="course_desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..." required/>
                            </div>
                        </div> 
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">GPAX</label>
                                <input onChange={(e) => setMaxStudents(e.target.value)} defaultValue={studentData.length ? studentData[0].gpax : ''} step="any" type="number" id="max_students" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Number" required/>
                            </div>
                        </div>  
                        <div class="mb-6">
                        {defaultValue.length > 0 &&
                            <div class="mb-6">
                                <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Courses <span className="text-red-500 text-sm">(not allowed to change)</span></label>
                                <Select isDisabled={true} defaultValue={defaultValue} id="lecturer" autoFocus={true} isMulti styles={customStyles} placeholder="Enter Number"/>
                                </div>
                            </div>
                            }
                        </div>
                        <hr class="h-[3px] mt-8 mb-4 bg-navbar border-0"/>
                        <div className="pb-3 pr-1 self-end">
                            <button onClick={handleTabClick} className="absolute left-1 underline text-navbar font-medium rounded-md px-5 py-2.5 mr-2 mb-2">CANCEL</button>
                            <div>
                            <button type="reset" className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 focus:outline-none "><span>RESET</span></button>
                            <button onClick={handleReviewTabClick} type="submit" className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-3 py-2.5 mr-2 mb-2 focus:outline-none "><span>REVIEW</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}