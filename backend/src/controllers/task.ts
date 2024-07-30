import { NextFunction, Request, Response } from "express";
import taskService from "../services/task";
import HttpResponse from "../utils/http-response";
import { Codes, Messages } from "../utils/codes-messages";
import { TaskStatus } from "../types/task";

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.create_task(req.body, req.userId);
    return HttpResponse(res, Codes.task_created, Messages.task_created, {
      id: task.id,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updated_task = await taskService.update_task(
      req.params.task_id,
      req.body,
      req.userId
    );
    return HttpResponse(
      res,
      Codes.task_updated,
      Messages.task_updated,
      updated_task
    );
  } catch (error) {
    return next(error);
  }
};

// update the task status
export const updateTaskStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updated_task = await taskService.update_task_status(
      req.params.task_id,
      req.query.status as TaskStatus,
      req.userId
    );
    return HttpResponse(
      res,
      Codes.task_updated,
      Messages.task_updated,
      updated_task
    );
  } catch (error) {
    return next(error);
  }
};

// delete the task
export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await taskService.delete_task(req.params.task_id, req.userId);
    return HttpResponse(res, Codes.task_deleted, Messages.task_deleted);
  } catch (error) {
    return next(error);
  }
};

// get all tasks created by user
export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.get_tasks(req.userId);
    return HttpResponse(res, Codes.tasks, undefined, tasks);
  } catch (error) {
    return next(error);
  }
};

// get task by id
export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.get_task_by_id(
      req.params.task_id,
      req.userId
    );

    return HttpResponse(res, Codes.task, undefined, task);
  } catch (error) {
    return next(error);
  }
};
