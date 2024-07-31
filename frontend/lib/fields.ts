import { TaskPriority, TaskStatus } from "@/types/task";
import {
  Calendar,
  Loader,
  LucideIcon,
  Pencil,
  ShieldAlert,
} from "lucide-react";

export type Field = {
  name: string;
  type: "text" | "password" | "email" | "select" | "date";
  placeholder: string;
  Icon?: LucideIcon;
  options?: { label: string; value: string }[];
};

export const loginFields: Field[] = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];

export const loginDefaultValues = {
  email: "",
  password: "",
};

export const registerFields: Field[] = [
  {
    name: "name",
    placeholder: "Name",
    type: "text",
  },
  ...loginFields,
];

export const registerDefaultValues = {
  name: "",
  ...loginDefaultValues,
};

export const generateLabel = (val: string) => {
  return val
    .split("_")
    .map(
      (each) =>
        `${each.charAt(0).toUpperCase()}${each.substring(1).toLowerCase()}`
    )
    .join(" ");
};

const statusList = Object.values(TaskStatus).map((each) => ({
  label: generateLabel(each),
  value: each,
}));

const priorityList = Object.values(TaskPriority).map((each) => ({
  label: generateLabel(each),
  value: each,
}));

// task form fields
export const taskFields: Field[] = [
  {
    name: "title",
    placeholder: "Title",
    type: "text",
  },
  {
    name: "status",
    placeholder: "Status",
    type: "select",
    Icon: Loader,
    options: statusList,
  },
  {
    name: "priority",
    placeholder: "Prority",
    type: "select",
    Icon: ShieldAlert,
    options: priorityList,
  },
  {
    name: "deadline",
    placeholder: "Deadline",
    type: "date",
    Icon: Calendar,
  },
  {
    name: "description",
    placeholder: "Description",
    type: "text",
    Icon: Pencil,
  },
];

export const taskDefaultValues = {
  title: "",
  status: "",
};
