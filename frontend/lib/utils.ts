import { Task, TaskStatus } from "@/types/task";
import { type ClassValue, clsx } from "clsx";
import { formatDate, formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const token_cookie_name = "__token";

export const filterTasksByStatus = (
  tasks: Task[],
  status: keyof typeof TaskStatus
) => {
  return tasks.filter((task) => task.status === status);
};

export const getDate = (date?: string) => {
  if (!date) return undefined;
  return formatDate(date, "yyyy-MM-dd");
};

export const getDateDistance = (date: string) => {
  const distance = formatDistanceToNow(new Date(date), { addSuffix: true });
  return distance
    .replace("about ", "")
    .replace(" hours", " hrs")
    .replace(" hour", " hr")
    .replace(" minutes", " mins")
    .replace(" minute", " min")
    .replace(" seconds", " secs")
    .replace(" second", " sec");
};
