import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();
    const handleDashboard = () => {
        navigate(`/navbar/dashboard`);
    }
    const handleCourse = () => {
        navigate(`/navbar/course`);
    }
    const handleStudent = () => {
        navigate(`/navbar/student`);
    }
    return(
        
    <footer class="bg-navbar shadow dark:bg-gray-900">
        <div class="w-full mx-auto p-6 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center md:pb-0 pb-4">
                    <img src="../Logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-50">ADMS</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-50 sm:mb-0 dark:text-gray-400">
                    <li>
                        <button onClick={handleDashboard} class="mr-4 hover:underline md:mr-6 ">Dashboard</button>
                    </li>
                    <li>
                        <button onClick={handleCourse} class="mr-4 hover:underline md:mr-6 ">Course</button>
                    </li>
                    <li>
                        <button onClick={handleStudent} class="mr-4 hover:underline md:mr-6 ">Student</button>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="text-sm text-gray-50 sm:text-center">© 2023 <span class="hover:underline">Adminstration Data Management System&trade;</span></span>
        </div>
    </footer>

    );
}