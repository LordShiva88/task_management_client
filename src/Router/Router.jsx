import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TaskBoard from "../Pages/TaskBoard/TaskBoard";
import Dashboard from "../Layout/Dashboard";


const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
  {
    path: '/taskBoard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '',
        element: <TaskBoard></TaskBoard>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
])

export default Router;