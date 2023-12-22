import { HiPencil, HiTrash } from "react-icons/hi";


const Table = () => {
  return (
    <div>
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
    </div>
  );
};

export default Table;