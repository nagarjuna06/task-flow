import { generateLabel } from "@/lib/fields";
import { cn, filterTasksByStatus } from "@/lib/utils";
import { Task, TaskStatus } from "@/types/task";
import { ListFilter } from "lucide-react";
import React from "react";
import TaskCard from "./TaskCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import CreateTask from "./CreateTask";

type Props = {
  name: keyof typeof TaskStatus;
  tasks: Task[];
};
const TaskColumn = ({ name, tasks }: Props) => {
  const filteredTasks = filterTasksByStatus(tasks, name);
  return (
    <div className="p-2 h-full">
      <div className="flex items-center justify-between mb-5">
        <span>{generateLabel(name)}</span>
        <ListFilter size={25} />
      </div>
      <Droppable droppableId={name} type="tasks">
        {(provided, snapshot) => (
          <div
            className={cn("min-h-1 py-2 flex flex-col gap-3", {
              "bg-gray-200": snapshot.isDraggingOver,
            })}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredTasks.map((task, i) => (
              <Draggable draggableId={task.id} index={i} key={i}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    style={{ ...provided.draggableProps.style }}
                  >
                    <TaskCard {...task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <CreateTask btnType="btn2" status={name} />
    </div>
  );
};

export default TaskColumn;
