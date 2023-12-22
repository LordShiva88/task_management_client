import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ProgressBar from "../../../Components/ProgressBar";
import useTasks from "../../../Hooks/useTasks";
import TaskCard from "./TaskCard";
import useAxios from "../../../Hooks/useAxios";
import { useState } from "react";

const AllTasks = () => {
  const [tasks, refetch] = useTasks();
  const [allTasks, setTasks] = useState([]);
  const axios = useAxios();

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
      <ProgressBar></ProgressBar>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="justify-around grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Droppable droppableId="todo">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
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
