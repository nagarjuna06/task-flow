"use client";
import {
  createTaskApi,
  deleteTaskApi,
  getTasksApi,
  updateTaskApi,
  updateTaskStatusApi,
} from "@/apis/task";
import { CreateTask, Task, TaskStatus } from "@/types/task";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type TaskContextProps = {
  tasks: Task[];
  loading: boolean;
  addTask: () => void;
  editTask: (taskId: string) => void;
  removeTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  autoSaveTask: (task: CreateTask) => void;
  // sortTasks: (sortBy: string, order: string) => void,
};
const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  loading: false,
  addTask: () => {},
  editTask: (taskId) => {},
  removeTask: (taskId) => {},
  updateTaskStatus: (taskId, status) => {},
  autoSaveTask: (task) => {},
  // sortTasks: (sortBy: string, order: string) => {},
});

const TaskProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tmpTask, setTempTask] = useState<CreateTask>();
  const [loading, setLoading] = useState<boolean>(true);
  const [modify, setModify] = useState<boolean>(false);

  const addTask = async () => {
    if (modify) {
      const res = await createTaskApi(tmpTask);
      if (res.data) {
        toast.success(res.message);
        setTasks((prevTasks) => [res.data, ...prevTasks]);
        setModify(false);
      }
    }
    setTempTask(undefined);
  };
  const editTask = async (taskId: string) => {
    if (modify) {
      const res = await updateTaskApi(taskId, tmpTask);
      if (res.data) {
        toast.success(res.message);
        setModify(false);
        const index = tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          const updatedTasks = [...tasks];
          updatedTasks.splice(index, 1);
          updatedTasks.unshift(res.data);
          setTasks(updatedTasks);
        }
      }
    }
    setTempTask(undefined);
  };
  const removeTask = async (taskId: string) => {
    const res = await deleteTaskApi(taskId);
    if (res.success) {
      toast.success(res.message);
      const index = tasks.findIndex((task) => task.id === taskId);
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };
  const updateTaskStatus = async (taskId: string, status: TaskStatus) => {
    const res = await updateTaskStatusApi(taskId, status);
    if (res.data) {
      toast.success(res.message);
      const updatedTasks = [...tasks];
      const index = tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        updatedTasks.splice(index, 1);
        updatedTasks.unshift(res.data);
        setTasks(updatedTasks);
      }
    }
  };
  const autoSaveTask = (task: CreateTask) => {
    setTempTask(task);
    setModify(true);
  };
  const fetchTasks = useCallback(async () => {
    const res = await getTasksApi();
    if (res.data) {
      setTasks(res.data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        addTask,
        editTask,
        removeTask,
        updateTaskStatus,
        autoSaveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTask = (): TaskContextProps => {
  return useContext(TaskContext);
};
