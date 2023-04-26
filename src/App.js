import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Course from "./pages/Course"
import Student from './pages/Student'
import Navbar from './layouts/Navbar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login/>}/>
      <Route path='navbar' element={<Navbar/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='course' element={<Course/>}/>
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
