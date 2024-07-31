import { useTask } from "@/context/taskContext";
import React, { useState } from "react";
import TaskDialog from "./TaskDialog";
import { Button } from "@/components/ui/button";
import { CirclePlus, Plus } from "lucide-react";
import { TaskStatus } from "@/types/task";
import { taskDefaultValues } from "@/lib/fields";

type Props = {
  btnType?: "btn1" | "btn2";
  status?: keyof typeof TaskStatus;
};
const CreateTask = ({ btnType = "btn1", status }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const { autoSaveTask, addTask } = useTask();

  const onClose = (val: boolean) => {
    if (!val) {
      addTask();
    }
    setOpen(val);
  };
  const renderBtn = () => {
    switch (btnType) {
      case "btn1":
        return (
          <Button className="icon-btn w-full" variant="gradient">
            <span>Create New Task</span>
            <CirclePlus size={25} />
          </Button>
        );
      case "btn2":
        return (
          <div className="bg-gradient-to-t from-black to-slate-800  text-white flex items-center justify-between rounded-lg w-full p-2 cursor-pointer">
            <span>Add new</span>
            <Plus size={20} />
          </div>
        );
    }
  };
  return (
    <div>
      <TaskDialog
        open={open}
        onOpenChange={onClose}
        onSubmit={autoSaveTask}
        values={{ ...taskDefaultValues, status }}
      >
        {renderBtn()}
      </TaskDialog>
    </div>
  );
};

export default CreateTask;
