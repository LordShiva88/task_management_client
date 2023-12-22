import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { SiProgress } from "react-icons/si";
import useTasks from "../Hooks/useTasks";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FcOk } from "react-icons/fc";

const Profile = () => {
  const [tasks] = useTasks();
  const { user } = useAuth();

  const myTasks = tasks.filter((task) => task.email === user?.email);

  const Todo = myTasks.filter((task) => task.status === "todo");
  const completed = myTasks.filter((task) => task.status === "completed");
  const ongoing = myTasks.filter((task) => task.status === "ongoing");

  return (
    <div className="flex justify-center mt-20">
      <section className="bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg md:w-96 space-y-8">
        <div className="mt-6 w-fit mx-auto">
          <img
            src={user?.photoURL}
            className="rounded-full w-28 "
            alt="profile picture"
          />
        </div>
        <div className="items-center text-center">
          <div className="text-center">
            <h2 className="text-white font-bold text-4xl tracking-wide ">
              {user?.displayName}
            </h2>
            <p className="text-emerald-400 font-semibold mt-2">{user.email}</p>
          </div>
        </div>
        <div className="h-1 w-full bg-black rounded-full">
          <div className="h-1 rounded-full bg-yellow-500 "></div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="flex items-center gap-2 text-red-500">
            <IoIosCheckboxOutline className="text-xl" />
            TO DO
            <span className="btn btn-sm rounded-full bg-red-500 text-white">
              {Todo.length}
            </span>
          </span>
          <span className="flex items-center gap-2 text-yellow-500">
            <SiProgress className="text-xl" />
            IN PROGRESS{" "}
            <span className="btn btn-sm rounded-full bg-yellow-500 text-white">
              {ongoing.length}
            </span>
          </span>

          <span className="flex items-center gap-2 text-green-500">
            <FcOk className="text-xl" />
            COMPLETE{" "}
            <span className="btn btn-sm rounded-full bg-green-500 text-white">
              {completed.length}
            </span>
          </span>
        </div>
        <button className="btn btn-outline w-full bg-blue-500 uppercase ">
          Contact Me
        </button>
      </section>
    </div>
  );
};

export default Profile;
