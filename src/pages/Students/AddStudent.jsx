import { useState, useEffect } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import Select from "react-select";

export default function AddStudent(){
    const [formValid, setFormValid] = useState(false);
    const options = [
        { value: "CSC102", label: "CSC102 - Introduction to Programming" },
        { value: "CSC105", label: "CSC105 - Introduction to Web Development" },
        { value: "GEN111", label: "GEN111 - Physical Education" },
      ];

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
    const isSelected = Array.isArray(selectedOption) ? selectedOption.length > 0 : Boolean(selectedOption);
    console.log(isSelected);
    setSelected(isSelected);
    };

    useEffect(() => {
    const courseID = document.getElementById("course_id").value;
    const courseTitle = document.getElementById("course_title").value;
    const courseDesc = document.getElementById("course_desc").value;
    const maxStudents = document.getElementById("max_students").value;

    if (courseID && courseTitle && courseDesc && maxStudents && selected) {
        setFormValid(true);
        console.log("Form Valid");
    } else {
        setFormValid(false);
        console.log("Form Invalid");
    }
    }, [selected]);

    const handleReviewTabClickAdd = () =>{
        if(formValid == true){
            navigate(`/navbar/student/review`);
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
                                <input type="text" id="course_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CSC/GEN..." required/>
                            </div>
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Last Name</label>
                                <input type="text" id="course_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." required/>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Student ID</label>
                                <input type="text" id="course_desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..." required/>
                            </div>
                        </div> 
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">GPAX</label>
                                <input step="any" type="number" id="max_students" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Number" required/>
                            </div>
                        </div>  
                        <div class="mb-6">
                            <div className="px-4 md:pt-4">
                                <label for="first_name" class="block mb-2 text-[20px] font-medium whitespace-nowrap text-navbar">Courses</label>
                                <Select onChange={handleChange} id="lecturer" options={options} autoFocus={true} isMulti styles={customStyles} placeholder="Enter Number"/>
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