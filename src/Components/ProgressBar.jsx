import { SiProgress } from "react-icons/si";
import { FcOk } from "react-icons/fc";
import { IoIosCheckboxOutline } from "react-icons/io";
import useTasks from "../Hooks/useTasks";

const ProgressBar = () => {
  const [tasks] = useTasks();
  const Todo = tasks.filter((task) => task.status === "todo");
  const completed = tasks.filter((task) => task.status === "completed");
  const ongoing = tasks.filter((task) => task.status === "ongoing");

  return (
    <div>
      <div className="flex justify-around font-bold p-4">
        <span className="flex items-center gap-2 text-blue-500">
          <IoIosCheckboxOutline className="text-xl" />
          TO DO
          <span className="btn btn-sm rounded-full bg-indigo-500 text-white">
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
    </div>
  );
};

export default ProgressBar;
