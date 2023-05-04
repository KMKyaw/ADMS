import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTabClick = async (event) => {
    event.preventDefault();
    try {
      const response = await getData();
      console.log(response.data.success);
      if (response.data.success) {
        navigate(`/loading`);
        setTimeout(() => {
          navigate(`/navbar/dashboard`);
        }, 2000);
      } else {
        window.alert("Password is wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const response = await Axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.message);
      console.error(error.response.status);
      throw error;
    }
  };

  return (
    <div>
      <div class="h-screen bg-gradient-to-r from-gray-900 via-navbar to-gray-900">
        <div className="flex justify-center items-center">
          <div class="grid grid-cols-1 gap-10 p-11">
            <img
              src="../big_logo.png"
              style={{ width: "180px" }}
              alt="Flowbite Logo"
            />

            <form>
              <div class="mb-6">
                <label
                  for="name"
                  class="text-center text-xl font-semibold whitespace-nowrap text-gray-50"
                >
                  User ID
                </label>
                <input
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="User ID"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="text-center text-xl font-semibold whitespace-nowrap text-gray-50"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                onClick={handleTabClick}
                class="text-white bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full w-auto px-5 py-2.5 text-center border"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
