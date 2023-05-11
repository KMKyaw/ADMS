import { NavLink, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
export default function AddCourseReview() {
  const { courseID, courseTitle, courseDesc, maxStudents, lecturer } =
    useParams();
  const navigate = useNavigate();
  const handleTabClick = () => {
    navigate(`/navbar/course`);
  };

  const handleExitDelete = () => {
    document.getElementById("id02").style.display = "block";
  };

  const handleClickDelete = async () => {
    console.log("CourseId is");
    try {
      const response = await Axios.post(
        "http://localhost:5000/course/addData",
        {
          courseid: courseID,
          coursetitle: courseTitle,
          coursedes: courseDesc,
          max: maxStudents,
          lecturer: lecturer,
        }
      );
      console.log(response);
      console.log("DONE");
      navigate("/navbar/course");
    } catch (error) {
      console.error(error.message);
      console.error(error.response.status);
      throw error;
    }
  };

  const handleCloseExitDelete = () => {
    document.getElementById("id02").style.display = "none";
  };
  return (
    <div>
      <div>
        <div className="p-5 pb-8">
          <span className=" md:text-4xl text-2xl font-semibold whitespace-nowrap text-navbar">
            Review Course
          </span>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="md:text-lg text-base px-6 py-3">
                  Course Information
                </th>
                <th scope="col" class="md:text-lg text-base px-6 py-3">
                  Course Data
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white md:w-[30%]"
                >
                  Course ID
                </th>
                <td class="px-6 py-4">{courseID}</td>
              </tr>
              <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Course Title
                </th>
                <td class="px-6 py-4">{courseTitle}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Course Description
                </th>
                <td class="px-6 py-4">{courseDesc}</td>
              </tr>
              <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maximun Number of Students
                </th>
                <td class="px-6 py-4">{maxStudents}</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lecturer
                </th>
                <td class="px-6 py-4">{lecturer}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sm:absolute relative bottom-0 w-screen">
          <hr class="h-[3px] mt-8 mb-4 bg-navbar border-0" />
          <div className="pb-4 pr-1 self-end">
            <button
              onClick={handleTabClick}
              className="absolute left-1 underline text-navbar font-medium rounded-md px-5 py-2.5 mr-2 mb-2"
            >
              CANCEL
            </button>
            <div className="pb-3 pr-3 float-right">
              <button
                onClick={handleExitDelete}
                className="shadow-md border-2 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-3 py-2.5 mr-2 mb-2 focus:outline-none "
              >
                <span>PROCESS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="id02"
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        style={{ display: "none" }}
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      class="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      ARE YOU SURE YOU WANT TO MAKE CHANGES?
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Please click continue to proceed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={handleClickDelete}
                  class="inline-flex w-full justify-center rounded-md bg-navbar px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 sm:ml-3 sm:w-auto"
                >
                  Continue
                </button>
                <button
                  type="button"
                  onClick={handleCloseExitDelete}
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
