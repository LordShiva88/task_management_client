import toast from "react-hot-toast";
import logo from "../assets/logo.png";
import { IoMdAdd, IoMdNotificationsOutline } from "react-icons/io";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavbarTask = () => {
  const { logOut, user } = useAuth();

  const handleLogOut = () => {
    logOut().then((res) => {
      console.log(res);
      toast.success("Logout Successful");
    });
  };

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <img src={logo} alt="" className="w-16 md:hidden flex" />
      <div className="hidden md:flex">
        <Logo />
      </div>
      <div className="flex-none md:gap-5 gap-2 flex items-center">
        <Link
          to={"/taskBoard/addTask"}
          className="hidden md:flex items-center gap-1 btn btn-sm btn-outline"
        >
          Add Task <IoMdAdd className="text-2xl"></IoMdAdd>
        </Link>
        <div className="md:hidden">
          <Link
            to={"/taskBoard/addTask"}
            className="flex items-center gap-1 btn btn-sm btn-outline"
          >
            <IoMdAdd className="text-2xl"></IoMdAdd>
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="">
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  New message from{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  :
                </div>
                <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                  a few moments ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="User Avatar" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/taskBoard/profile"} className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTask;
