import NavbarTask from "../../../Components/NavbarTask";
import ProgressBar from "../../../Components/ProgressBar";
import useTasks from "../../../Hooks/useTasks";
import TaskCard from "./TaskCard";

const AllTasks = () => {
  const [tasks] = useTasks();
  const Todo = tasks.filter((task) => task.status === "to-do");
  const completed = tasks.filter((task) => task.status === "completed");
  const ongoing = tasks.filter((task) => task.status === "ongoing");

  return (
    <div>
      <NavbarTask></NavbarTask>
      <ProgressBar></ProgressBar>
      <div className="justify-around grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          {Todo.map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
        </div>
        <div>
          {ongoing.map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
        </div>
        <div>
          {completed.map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
