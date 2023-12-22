import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import TaskHome from "../Pages/TaskBoard/Home/Home";
import AllTasks from "../Pages/TaskBoard/AllTasks/AllTasks";
import ManageTask from "../Pages/TaskBoard/ManageTask/ManageTask";
import AddTask from "../Pages/TaskBoard/AddTask/AddTask";
import Update from "../Pages/TaskBoard/Update/Update";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/taskBoard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/taskBoard/home",
        element: <TaskHome></TaskHome>,
      },
      {
        path: "/taskBoard/allTask",
        element: <AllTasks></AllTasks>,
      },
      {
        path: "/taskBoard/manageTask",
        element: <ManageTask></ManageTask>,
      },
      {
        path: "/taskBoard/addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/taskBoard/update/:id",
        element: <Update></Update>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Router;
