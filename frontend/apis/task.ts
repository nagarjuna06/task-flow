import { TaskStatus } from "@/types/task";
import axios, { ResponseStyle } from "./axios";
import { Routes } from "./routes";

export const getTasksApi = async () => {
  return (await axios.get(Routes.tasks)) as ResponseStyle;
};

export const createTaskApi = async (task: any) => {
  return (await axios.post(Routes.task, task)) as ResponseStyle;
};

export const updateTaskApi = async (taskId: string, task: any) => {
  return (await axios.put(`${Routes.task}/${taskId}`, task)) as ResponseStyle;
};

export const deleteTaskApi = async (taskId: string) => {
  return (await axios.delete(`${Routes.task}/${taskId}`)) as ResponseStyle;
};

export const updateTaskStatusApi = async (
  taskId: string,
  status: TaskStatus
) => {
  return (await axios.patch(`${Routes.task}/${taskId}`, {
    status,
  })) as ResponseStyle;
};
