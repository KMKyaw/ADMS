import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  Navigate
} from 'react-router-dom'
import React from 'react'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Course from "./pages/Courses/Course"
import Navbar from './layouts/Navbar'
import UpdateCoures from './pages/Courses/UpdateCourse'
import AddCourse from './pages/Courses/AddCourse'
import ReviewCourse from './pages/Courses/ReviewCourse'
import DeleteCourse from './pages/Courses/DeleteCourse'
import ViewCourse from './pages/Courses/ViewCourse'
import Student from './pages/Students/Student'
import AddStudent from './pages/Students/AddStudent'
import UpdateStudent from './pages/Students/UpdateStudent'
import ReviewStudent from './pages/Students/ReviewStudent'
import DeleteStudent from './pages/Students/DeleteStudent'
import ViewStudent from './pages/Students/ViewStudent'
import Loading from './pages/Loading'
import AddReviewStudent from './pages/Students/AddReviewStudent'
const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path='login'element={<Login/>} index/>
      <Route path='loading' element={<Loading/>}/>
      <Route path='navbar' element={<Navbar/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='course'>
          <Route index element={<Course/>}/>
          <Route path='update' element={<UpdateCoures/>}/>
          <Route path='add' element={<AddCourse/>}/>
          <Route path='review' element={<ReviewCourse/>}/>
          <Route path='delete' element={<DeleteCourse/>}/>
          <Route path='view' element={<ViewCourse/>}/>
        </Route>
        <Route path='student'>
          <Route index element={<Student/>}/>
          <Route path='add' element={<AddStudent/>}/>
          <Route path='/navbar/student/update/:studentid' element={<UpdateStudent />} />
          <Route path='review/:courseID/:courseTitle/:courseDesc/:maxStudents/:coures' element={<ReviewStudent/>}/>
          <Route path='/navbar/student/delete/:studentid' element={<DeleteStudent/>}/>
          <Route path='addreview/:courseID/:courseTitle/:courseDesc/:maxStudents/:selectCourses/:coursesCount' element={<AddReviewStudent/>}/>
          <Route path='view' element={<ViewStudent/>}/>
        </Route>
      </Route>
      <Route path='/' element={<Navigate to='/login' replace />} />
    </React.Fragment>
  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
