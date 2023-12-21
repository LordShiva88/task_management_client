import React from "react";
import {
  AiOutlineClockCircle,
  AiFillCheckCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

const TaskCard = ({ task }) => {
  const getPriorityStyles = () => {
    switch (task.priority) {
      case "high":
        return { badgeColor: "bg-red-100", textColor: "text-red-500" };
      case "moderate":
        return { badgeColor: "bg-yellow-100", textColor: "text-yellow-500" };
      case "low":
        return { badgeColor: "bg-green-100", textColor: "text-green-500" };
      default:
        return { badgeColor: "bg-gray-100", textColor: "text-gray-500" };
    }
  };

  const { badgeColor, textColor } = getPriorityStyles();

  return (
    <div
      className={`max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md m-4 transition duration-300 transform hover:scale-105 border border-blue-500`}
    >
      <div className={`p-4 flex justify-between items-center ${textColor}`}>
        <span className={`font-bold rounded-full px-2 py-1 ${badgeColor}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}{" "}
          Priority
        </span>
        <div>
          {task.status === "to-do" && (
            <span className="text-red-500 font-bold bg-red-100 rounded-full px-2 py-1 flex items-center">
              <AiOutlineClockCircle className="mr-1" />
              To-Do
            </span>
          )}
          {task.status === "ongoing" && (
            <span className="text-blue-500 font-bold bg-blue-100 rounded-full px-2 py-1 flex items-center">
              <AiOutlineLoading3Quarters className="mr-1" />
              Ongoing
            </span>
          )}
          {task.status === "completed" && (
            <span className="text-green-500 font-bold bg-green-100 rounded-full px-2 py-1 flex items-center">
              <AiFillCheckCircle className="mr-1" />
              Completed
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{task.title}</h3>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <AiOutlineClockCircle className="mr-1" />
            Deadline: {task.deadline}
          </div>
          <span className="text-sm text-gray-500">
            Assigned to: {task.email}
          </span>
        </div>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <button className="text-indigo-500 hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
