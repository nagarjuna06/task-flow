import { CreateTask, Task } from "@/types/task";
import { Clock3, Trash2 } from "lucide-react";
import PriorityBadge from "./PriorityBadge";
import TaskDialog from "./TaskDialog";
import { useState } from "react";
import { getDate, getDateDistance } from "@/lib/utils";
import { useTask } from "@/context/taskContext";

const TaskCard = (task: Task) => {
  const [open, setOpen] = useState<boolean>(false);
  const { autoSaveTask, editTask, removeTask } = useTask();

  const onClose = (val: boolean) => {
    if (!val) {
      editTask(task.id);
    }
    setOpen(val);
  };
  const values: CreateTask = {
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    deadline: getDate(task.deadline),
  };
  return (
    <TaskDialog
      onOpenChange={onClose}
      onSubmit={autoSaveTask}
      open={open}
      values={values}
    >
      <div className="border border-gray-300 p-2 rounded-lg flex flex-col gap-2 bg-gray-100 select-none group">
        <div>
          <h3 className="">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>
        </div>
        <PriorityBadge priority={task.priority} />
        {task.deadline && (
          <div className="icon-btn text-sm w-fit">
            <Clock3 size={18} />
            <span>{getDate(task.deadline)}</span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 w-fit">
            {getDateDistance(task.updatedAt)}
          </p>
          <Trash2
            size={18}
            className="group-hover:block hidden text-red-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              removeTask(task.id);
            }}
          />
        </div>
      </div>
    </TaskDialog>
  );
};

export default TaskCard;
