"use client";
import { CreateTask, Task } from "@/types/task";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type TaskContextProps = {
  tasks: Task[];
  addTask: (task: CreateTask) => void;
  editTask: (taskId: string, task: Task) => void;
  removeTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string) => void;
  // sortTasks: (sortBy: string, order: string) => void,
};
const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: (task) => {},
  editTask: (taskId, task) => {},
  removeTask: (taskId) => {},
  updateTaskStatus: (taskId) => {},
  // sortTasks: (sortBy: string, order: string) => {},
});

const TaskProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const addTask = (task: CreateTask) => {};
  const editTask = (taskId: string, task: CreateTask) => {};
  const removeTask = (taskId: string) => {};
  const updateTaskStatus = (taskId: string) => {};

  const fetchTasks = useCallback(async () => {}, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, editTask, removeTask, updateTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTask = (): TaskContextProps => {
  const context = useContext(TaskContext);
  return context;
};
