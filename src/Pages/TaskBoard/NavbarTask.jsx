import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";

const NavbarTask = () => {
  const { user } = useAuth();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center gap-2">
        <img src={logo} alt="" className="w-10" />
        <p className="text-xl font-bold text-red-400">Task Magnet</p>
      </div>

      <div className="flex-none">
        <button className="flex items-center gap-1 btn btn-sm btn-outline">
          {" "}
          <MdAdd className="text-2xl"></MdAdd> Add Task
        </button>
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
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTask;
