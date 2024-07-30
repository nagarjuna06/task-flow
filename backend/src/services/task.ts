import mongoose, { MongooseError } from "mongoose";
import db from "../models";
import { CreateTask, TaskStatus } from "../types/task";
import { Codes, Messages } from "../utils/codes-messages";
import HttpException, { statusCode } from "../utils/http-exception";

class taskService {
  // task creation
  static create_task(task: CreateTask, userId: string) {
    return db.task.create({ ...task, createdBy: userId });
  }
  // task update
  static async update_task(taskId: string, task: CreateTask, userId: string) {
    const updated_task = await db.task.findOneAndUpdate(
      { _id: taskId, createdBy: userId },
      task,
      { new: true }
    );
    if (!updated_task) {
      throw new HttpException(
        statusCode.NotFound,
        Codes.task_not_found,
        Messages.task_not_found
      );
    }
    return updated_task;
  }
  // update_task status
  static async update_task_status(
    taskId: string,
    status: TaskStatus,
    userId: string
  ) {
    const task = await db.task.findOneAndUpdate(
      { _id: taskId, createdBy: userId },
      { status },
      { new: true }
    );
    if (!task) {
      throw new HttpException(
        statusCode.NotFound,
        Codes.task_not_found,
        Messages.task_not_found
      );
    }
    return task;
  }

  // delete task
  static async delete_task(taskId: string, userId: string) {
    const deleted_task = await db.task.findOneAndDelete({
      _id: taskId,
      createdBy: userId,
    });
    if (!deleted_task) {
      throw new HttpException(
        statusCode.NotFound,
        Codes.task_not_found,
        Messages.task_not_found
      );
    }
    return deleted_task;
  }

  // task listing
  static get_tasks(userId: string) {
    return db.task.find({ createdBy: userId });
  }

  static async get_task_by_id(taskId: string, userId: string) {
    try {
      const task = await db.task.findOne({ _id: taskId, createdBy: userId });

      return task;
    } catch (error) {
      throw new HttpException(
        statusCode.BadRequest,
        Codes.invalid_task_id,
        Messages.invalid_task_id
      );
    }
  }
}

export default taskService;
