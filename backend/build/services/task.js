"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const codes_messages_1 = require("../utils/codes-messages");
const http_exception_1 = __importStar(require("../utils/http-exception"));
class taskService {
    // task creation
    static create_task(task, userId) {
        return models_1.default.task.create({ ...task, createdBy: userId });
    }
    // task update
    static async update_task(taskId, task, userId) {
        const updated_task = await models_1.default.task.findOneAndUpdate({ _id: taskId, createdBy: userId }, task, { new: true });
        if (!updated_task) {
            throw new http_exception_1.default(http_exception_1.statusCode.NotFound, codes_messages_1.Codes.task_not_found, codes_messages_1.Messages.task_not_found);
        }
        return updated_task;
    }
    // update_task status
    static async update_task_status(taskId, status, userId) {
        const task = await models_1.default.task.findOneAndUpdate({ _id: taskId, createdBy: userId }, { status }, { new: true });
        if (!task) {
            throw new http_exception_1.default(http_exception_1.statusCode.NotFound, codes_messages_1.Codes.task_not_found, codes_messages_1.Messages.task_not_found);
        }
        return task;
    }
    // delete task
    static async delete_task(taskId, userId) {
        const deleted_task = await models_1.default.task.findOneAndDelete({
            _id: taskId,
            createdBy: userId,
        });
        if (!deleted_task) {
            throw new http_exception_1.default(http_exception_1.statusCode.NotFound, codes_messages_1.Codes.task_not_found, codes_messages_1.Messages.task_not_found);
        }
        return deleted_task;
    }
    // task listing
    static get_tasks(userId) {
        return models_1.default.task.find({ createdBy: userId });
    }
    static async get_task_by_id(taskId, userId) {
        try {
            const task = await models_1.default.task.findOne({ _id: taskId, createdBy: userId });
            return task;
        }
        catch (error) {
            throw new http_exception_1.default(http_exception_1.statusCode.BadRequest, codes_messages_1.Codes.invalid_task_id, codes_messages_1.Messages.invalid_task_id);
        }
    }
}
exports.default = taskService;
