import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useTasks from "../../../Hooks/useTasks";
import moment from "moment";
import { HiPencil, HiTrash } from "react-icons/hi";

const Details = () => {
  const { user } = useAuth();
  const [tasks, refetch, isPending] = useTasks();

  if (isPending) {
    return <div>Loading...</div>;
  }

  const myTasks = tasks.filter((task) => task.email === user?.email);

  const handleDelete = (taskId) => {
    // Add logic for deleting task
    console.log(`Deleting task with ID: ${taskId}`);
  };

  const handleUpdate = (taskId) => {
    // Add logic for updating task
    console.log(`Updating task with ID: ${taskId}`);
  };

  // Helper function to get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "moderate":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
    }
  };

  // Helper function to get status color
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
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white border border-collapse shadow-md">
          {/* Table Head */}
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Deadline</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {myTasks.map((task, index) => (
              <tr
                key={task._id}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="">
                  <p className="py-3 font-bold text-blue-600">{task.title}</p>
                  {task.description.slice(0, 50)}...
                </td>

                <td className="py-3 px-4">
                  Post: {moment(task.date).format("MM-D-YY, h:mm")}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-bold ${getPriorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority.charAt(0).toUpperCase() +
                      task.priority.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-bold ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleUpdate(task._id)}
                    className="text-blue-500 hover:underline mx-2"
                  >
                    <HiPencil />
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-red-500 hover:underline"
                  >
                    <HiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;