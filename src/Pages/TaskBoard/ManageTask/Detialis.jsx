import { HiPencil, HiTrash } from "react-icons/hi";
import useAuth from "../../../Hooks/useAuth";
import useTasks from "../../../Hooks/useTasks";
import moment from "moment";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Details = () => {
  const { user } = useAuth();
  const [tasks, refetch] = useTasks();
  const axios = useAxios();
  const myTasks = tasks.filter((task) => task.email === user?.email);

  const handleDelete = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`tasks/${taskId}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "moderate":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "to-do":
        return "text-red-500";
      case "ongoing":
        return "text-blue-500";
      case "completed":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">All Tasks</h1>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-md overflow-x-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table Head */}
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-3 px-4 hidden sm:table-cell"> # </th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4 hidden sm:table-cell"> Deadline </th>
                  <th className="py-3 px-4 hidden sm:table-cell"> Priority </th>
                  <th className="py-3 px-4 hidden sm:table-cell"> Status </th>
                  <th className="py-3 px-4"> Actions </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {myTasks.map((task, index) => (
                  <tr
                    key={task._id}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="py-3 px-4 hidden sm:table-cell">
                      {index + 1}
                    </td>
                    <td className="">
                      <p className="py-3 font-bold text-blue-600">
                        {task.title}
                      </p>
                      {task.description.slice(0, 50)}...
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                      Post: {moment(task.date).format("MM-D-YY, h:mm")}
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                      <span
                        className={`text-sm font-bold ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority.charAt(0).toUpperCase() +
                          task.priority.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                      <span
                        className={`text-sm font-bold ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status.charAt(0).toUpperCase() +
                          task.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex">
                      <Link
                        to={`/taskBoard/update/${task._id}`}
                        className="text-blue-500 hover:underline mx-2"
                      >
                        <HiPencil className="text-2xl" />
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="text-red-500 hover:underline"
                      >
                        <HiTrash className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
