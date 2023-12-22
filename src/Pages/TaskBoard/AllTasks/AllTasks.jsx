import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useTasks from "../../../Hooks/useTasks";
import TaskCard from "./TaskCard";
import useAxios from "../../../Hooks/useAxios";
import { useState } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { SiProgress } from "react-icons/si";
import { FcOk } from "react-icons/fc";

const AllTasks = () => {
  const [tasks, refetch] = useTasks();
  const [allTasks, setTasks] = useState([]);
  const axios = useAxios();

  const Todo = tasks.filter((task) => task.status === "todo");
  const completed = tasks.filter((task) => task.status === "completed");
  const ongoing = tasks.filter((task) => task.status === "ongoing");

  const updateTaskStatusInMongoDB = async (taskId, newStatus) => {
    await axios.put(`/tasks/status/${taskId}`, {
      status: newStatus,
    });
  };

  const onDragEnd = async (result) => {
    if (!result.destination) {
      return;
    }

    const sourceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;

    const taskId = result.draggableId;
    const updatedTasks = Array.from(tasks);

    if (sourceId === destinationId) {
      const [movedTask] = updatedTasks.splice(result.source.index, 1);
      updatedTasks.splice(result.destination.index, 0, movedTask);
    } else {
      const [movedTask] = updatedTasks.splice(result.source.index, 1);
      movedTask.status = destinationId;
      updatedTasks.splice(result.destination.index, 0, movedTask);

      await updateTaskStatusInMongoDB(taskId, destinationId);
      refetch();
    }

    setTasks(updatedTasks);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="justify-around grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Droppable droppableId="todo">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <span className="flex items-center gap-2 text-red-500">
                  <IoIosCheckboxOutline className="text-xl" />
                  TO DO
                  <span className="btn btn-sm rounded-full bg-red-500 text-white">
                    {Todo.length}
                  </span>
                </span>
                <div className="h-1 w-full bg-black rounded-full my-3">
                  <div className="h-1 rounded-full bg-red-500 "></div>
                </div>

                {tasks.map((task, index) => {
                  return task.status === "todo" ? (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard key={task._id} task={task}></TaskCard>
                        </div>
                      )}
                    </Draggable>
                  ) : null;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="ongoing">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <span className="flex items-center gap-2 text-yellow-500">
                  <SiProgress className="text-xl" />
                  IN PROGRESS{" "}
                  <span className="btn btn-sm rounded-full bg-yellow-500 text-white">
                    {ongoing.length}
                  </span>
                </span>
                <div className="h-1 w-full bg-black rounded-full my-3">
                  <div className="h-1 rounded-full bg-yellow-500 "></div>
                </div>

                {tasks.map((task, index) => {
                  return task.status === "ongoing" ? (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard key={task._id} task={task}></TaskCard>
                        </div>
                      )}
                    </Draggable>
                  ) : null;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="completed">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <span className="flex items-center gap-2 text-green-500">
                  <FcOk className="text-xl" />
                  COMPLETE{" "}
                  <span className="btn btn-sm rounded-full bg-green-500 text-white">
                    {completed.length}
                  </span>
                </span>
                <div className="h-1 w-full bg-black rounded-full my-3">
                  <div className="h-1 rounded-full bg-green-500 "></div>
                </div>

                {tasks.map((task, index) => {
                  return task.status === "completed" ? (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard key={task._id} task={task}></TaskCard>
                        </div>
                      )}
                    </Draggable>
                  ) : null;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default AllTasks;
