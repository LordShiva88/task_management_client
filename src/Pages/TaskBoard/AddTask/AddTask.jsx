import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AddTask = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Data contains all form field values
    const taskData = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      email: user.email,
    };

    axios
      .post("/tasks", taskData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Your Task Posted Successfully!");
        }
        navigate("/taskBoard/allTask");
        reset();
      })
      .catch((error) => console.log(error));

    console.log(taskData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: "Title is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter task title"
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter task description"
            rows="3"
          ></textarea>
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            {...register("deadline", { required: "Deadline is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
          {errors.deadline && (
            <span className="text-red-500">{errors.deadline.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            {...register("priority", { required: "Priority is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          >
            <option disabled value="low">
              Priority
            </option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <span className="text-red-500">{errors.priority.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
