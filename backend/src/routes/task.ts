import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
  updateTaskStatus,
} from "../controllers/task";
import { taskSchema, taskStatusSchema } from "../utils/validations";
import validate, { validateKey } from "../middleware/validate";

const taskRouter = Router();

taskRouter.post("", validate(taskSchema, validateKey.body), createTask);

taskRouter.get("/all", getTasks);

taskRouter.get("/:task_id", getTaskById);

taskRouter.put("/:task_id", validate(taskSchema, validateKey.body), updateTask);

taskRouter.patch(
  "/:task_id",
  validate(taskStatusSchema, validateKey.query),
  updateTaskStatus
);

taskRouter.delete("/:task_id", deleteTask);

export default taskRouter;
