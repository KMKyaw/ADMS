import { useState, useEffect } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import Select from "react-select";
import Axios from "axios";

export default function AddStudent(){
    const [formValid, setFormValid] = useState(false);
    const [courseID, setCourseID] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDesc, setCourseDesc] = useState("");
    const [maxStudents, setMaxStudents] = useState(0);
    const [courses, setCourses] = useState([]);
    const [coursesData, setCoursesData] = useState([]);
    const [defaultValue, setdefaultValue] = useState([]);
    const [selectCourses, setSelectedCourses] = useState([]);
    const getData = async () => {
        try {
          const response = await Axios.get("http://localhost:5000/course/getData");
          console.log(response);
          setCoursesData(response.data.data);
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
        console.log("THIS IS IT");
        console.log(coursesData);
        if (coursesData.length > 0) {
            const temp = [];
            for(var i=0;i<coursesData.length;i++){
                temp[i] = coursesData[i].courseid + " - " + coursesData[i].coursetitle;
            }
            setCourses(temp);
            var i = 0;
            const dvalue = courses.map((course) => {
                i++;
                return { value: i, label: course };
            });
            setdefaultValue(dvalue);
            console.log(courses);
            console.log(dvalue); 
          }
      }, [coursesData]);
      
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
    const [selected, setSelected] = useState(false);
    const handleChange = (selectedOption) => {
        
        const arr = [selectedOption.length];
        console.log(selectedOption.length);
        for(var i=0;i<selectedOption.length;i++){
            arr[i] = selectedOption[i].label;
        }
        for(var i=0;i<selectedOption.length;i++){
            console.log(arr[i]);
        }
        setSelectedCourses(arr);
        const isSelected = Array.isArray(selectedOption) ? selectedOption.length > 0 : Boolean(selectedOption);
        console.log("The select box is select : " + isSelected);
        setSelected(isSelected);
    };

    useEffect(() => {
    setCourseID(document.getElementById("course_id").value);
    setCourseTitle(document.getElementById("course_title").value);
    setCourseDesc(document.getElementById("course_desc").value);
    setMaxStudents(document.getElementById("max_students").value);
    if (courseID && courseTitle && courseDesc && maxStudents && selected) {
        setFormValid(true);
        console.log("Form Valid");
    } else {
        setFormValid(false);
        console.log("Form Invalid");
    }
    console.log(courseID);
    console.log(courseTitle);
    console.log(courseDesc);
    console.log(maxStudents);
    console.log(selected);
    }, [courseID, courseTitle, courseDesc, maxStudents, selected]);

    const handleReviewTabClickAdd = () =>{
        if(formValid == true){
            console.log("YOU HAVE SELECTED" + selectCourses);
            navigate(`/navbar/student/addreview/${courseID}/${courseTitle}/${courseDesc}/${maxStudents}/${selectCourses.join(" , ")}/${selectCourses.length}`);
        }else{
            window.alert("Please fill the Course field")
        }

    }
    const navigate = useNavigate();
    const handleTabClick = () => {
        navigate(`/navbar/student`);
      };
    return(
        <div className='pt-7 px-4'>
            <span className="p-2 md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">Add Student</span>
            <div className="pt-4">
                <div className="m-auto md:w-[99%] w-[96%] border-2 relative shadow-md">
                    <form className="flex flex-col">
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div className="px-4 pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">First Name</label>
                                <input type="text" id="course_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" required/>
                            </div>
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Last Name</label>
                                <input type="text" id="course_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Last Name" required/>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Student ID</label>
                                <input type="text" id="course_desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter 11-digits ID" required/>
                            </div>
                        </div> 
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">GPAX</label>
                                <input step="any" type="number" id="max_students" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter GPAX" required/>
                            </div>
                        </div>  
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Courses</label>
                                <Select onChange={handleChange} id="lecturer" options={defaultValue} autoFocus={true} isMulti styles={customStyles} placeholder="Select Courses"/>
                            </div>
                        </div>
                        <hr class="h-[3px] mt-8 mb-4 bg-navbar border-0"/>
                        <div className="pb-3 pr-1 self-end">
                            <button onClick={handleTabClick} className="absolute left-1 underline text-navbar font-medium rounded-md px-5 py-2.5 mr-2 mb-2">CANCEL</button>
                            <div>
                            <button type="reset" className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 focus:outline-none "><span>RESET</span></button>
                            <button onClick={handleReviewTabClickAdd} type="submit" className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-3 py-2.5 mr-2 mb-2 focus:outline-none "><span>REVIEW</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}