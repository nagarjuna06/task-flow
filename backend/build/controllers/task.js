"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.getTasks = exports.deleteTask = exports.updateTaskStatus = exports.updateTask = exports.createTask = void 0;
const task_1 = __importDefault(require("../services/task"));
const http_response_1 = __importDefault(require("../utils/http-response"));
const codes_messages_1 = require("../utils/codes-messages");
const createTask = async (req, res, next) => {
    try {
        const task = await task_1.default.create_task(req.body, req.userId);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.task_created, codes_messages_1.Messages.task_created, {
            id: task.id,
        });
    }
    catch (error) {
        return next(error);
    }
};
exports.createTask = createTask;
const updateTask = async (req, res, next) => {
    try {
        const updated_task = await task_1.default.update_task(req.params.task_id, req.body, req.userId);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.task_updated, codes_messages_1.Messages.task_updated, updated_task);
    }
    catch (error) {
        return next(error);
    }
};
exports.updateTask = updateTask;
// update the task status
const updateTaskStatus = async (req, res, next) => {
    try {
        const updated_task = await task_1.default.update_task_status(req.params.task_id, req.query.status, req.userId);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.task_updated, codes_messages_1.Messages.task_updated, updated_task);
    }
    catch (error) {
        return next(error);
    }
};
exports.updateTaskStatus = updateTaskStatus;
// delete the task
const deleteTask = async (req, res, next) => {
    try {
        await task_1.default.delete_task(req.params.task_id, req.userId);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.task_deleted, codes_messages_1.Messages.task_deleted);
    }
    catch (error) {
        return next(error);
    }
};
exports.deleteTask = deleteTask;
// get all tasks created by user
const getTasks = async (req, res, next) => {
    try {
        const tasks = await task_1.default.get_tasks(req.userId);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.tasks, undefined, tasks);
    }
    catch (error) {
        return next(error);
    }
};
exports.getTasks = getTasks;
// get task by id
const getTaskById = async (req, res, next) => {
    try {
        const task = await task_1.default.get_task_by_id(req.params.task_id, req.userId);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.task, undefined, task);
    }
    catch (error) {
        return next(error);
    }
};
exports.getTaskById = getTaskById;
