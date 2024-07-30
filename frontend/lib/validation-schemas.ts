import * as yup from "yup";
import { TaskPriority, TaskStatus } from "../types/task";

const email = yup.string().email().required();

const password = yup
  .string()
  .required()
  .min(8, "Password must be at least 8 characters")
  .max(20, "Password cannot exceed 20 characters")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(
    /[@$!%*?&#]/,
    "Password must contain at least one special character (@$!%*?&#)"
  );
export const registerUserSchema = yup.object({
  name: yup.string().required(),
  email,
  password,
});

export const loginUserSchema = yup.object({
  email,
  password,
});

const status = yup
  .mixed<TaskStatus>()
  .oneOf(Object.values(TaskStatus))
  .required();
export const taskSchema = yup.object({
  title: yup.string().required().min(3).max(20),
  description: yup.string().min(5).max(500),
  priority: yup.mixed<TaskPriority>().oneOf(Object.values(TaskPriority)),
  status,
  deadline: yup.string().required(),
});

export const taskStatusSchema = yup.object({
  status,
});
