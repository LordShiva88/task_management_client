import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaClipboardList, FaHome, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Dashboard = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/taskBoard/home" className="flex items-center px-4 py-2 ">
          <FaHome className="mr-2" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/taskBoard/allTask"
          className="flex items-center px-4 py-2 "
        >
          <FaUser className="mr-2" />
          All Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/taskBoard/manageTask"
          className="flex items-center px-4 py-2 "
        >
          <FaClipboardList className="mr-2" />
          My Tasks
        </NavLink>
      </li>
      <div className="divider"></div>
    </>
  );
  return (
    <div>
      {/* Mobile navigation */}
      <div className="drawer md:hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-w-fit flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none navbar-start">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <FaBars></FaBars>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 navbar-end">
              <img src={logo} alt="" className="w-10" />
              <h1>SURVEY SIFT</h1>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-gray-500 h-screen fixed z-10 px-5 text-white space-y-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="w-10" />
              <p className="text-xl font-bold text-red-400">Survey Sift</p>
            </div>
            {navLink}
          </ul>
        </div>
      </div>
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-5">
        <div className="">
          <ul className="menu bg-gray-500 h-screen px-5 text-white space-y-3 w-52 fixed">
            {navLink}
          </ul>
        </div>
        <div className="w-full ml-52">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
