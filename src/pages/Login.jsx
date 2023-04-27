import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [activeTab, setActiveTab] = useState("home");
    const navigate = useNavigate();
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
      navigate(`/${tab}/dashboard`);
    };

    return(
        <div>
            <div className="bg-navbar h-screen">
                <div className="flex justify-center items-center">
                    <div class="grid grid-cols-1 gap-10 p-11">
                        <img src="../big_logo.png" style={{width:"180px"}} alt="Flowbite Logo" />

                        <form>
                        <div class="mb-6">
                            <label for="email" class="text-center text-xl font-semibold whitespace-nowrap text-gray-50">User ID</label>
                            <input id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3" placeholder="User ID" required/>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="text-center text-xl font-semibold whitespace-nowrap text-gray-50">Your password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <button onClick={() => handleTabClick("navbar")} type="submit" class="text-white bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full sm:w-auto px-5 py-2.5 text-center border">Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

