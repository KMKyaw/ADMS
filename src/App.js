import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Course from "./pages/Courses/Course"
import Student from './pages/Student'
import Navbar from './layouts/Navbar'
import UpdateCoures from './pages/Courses/UpdateCourse'
import AddCourse from './pages/Courses/AddCourse'
import ReviewCourse from './pages/Courses/ReviewCourse'
import DeleteCourse from './pages/Courses/DeleteCourse'
import ViewCourse from './pages/Courses/ViewCourse'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login/>}/>
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
        <Route path='student' element={<Student/>}/>
      </Route>
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
