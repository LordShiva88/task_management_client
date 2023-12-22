import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/login", text: "Login" },
    { to: "/register", text: "Register" },
  ];

  return (
    <div className="navbar fixed top-0 z-10 text-golden font-bold opacity shadow-md bg-gradient-to-b from-gray-800 to-gray-700 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="hidden md:flex items-center">
          <img src={logo} alt="Logo" className="w-20" />
          <span
            style={{
              color: "#ff0000",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            TaskMagnet
          </span>
        </div>
        <div className="">
          <div className="drawer md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn drawer-button">
                <FaBars className="text-xl"></FaBars>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-gray-500 h-screen px-5 text-white space-y-3 w-60 fixed">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-10" />
                    <span
                      style={{
                        color: "#ff0000",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      TaskMagnet
                    </span>
                  </div>
                </div>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive
                          ? "border-0 border-b-4 border-blue-500 rounded-lg p-2 space-y-4"
                          : "hover:text-blue-500 transition duration-300 border-0 hover:border-b-4 hover:border-blue-500 rounded-lg p-2 space-y-4"
                      }
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="px-1 flex gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "border-0 border-b-4 border-blue-500 rounded-lg p-2"
                      : "hover:text-blue-500 transition duration-300 border-0 hover:border-b-4 hover:border-blue-500 rounded-lg p-2"
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
