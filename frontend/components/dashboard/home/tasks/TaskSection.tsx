"use client";
import { TaskStatus } from "@/types/task";
import React from "react";
import TaskColumn from "./TaskColumn";
import { useTask } from "@/context/taskContext";
import Loading from "../../Loading";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const TaskSection = () => {
  const taskStatus = Object.values(TaskStatus);
  const { tasks, loading, updateTaskStatus } = useTask();
  const handleDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;
    updateTaskStatus(draggableId, destination.droppableId as TaskStatus);
  };
  if (loading) return <Loading />;
  return (
    <div className="grid grid-cols-4 mt-5 shadow rounded-md p-2 bg-white">
      <DragDropContext onDragEnd={handleDragEnd}>
        {taskStatus.map((each, i) => (
          <TaskColumn name={each} key={i} tasks={tasks} />
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskSection;
