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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controllers/task");
const validations_1 = require("../utils/validations");
const validate_1 = __importStar(require("../middleware/validate"));
const taskRouter = (0, express_1.Router)();
taskRouter.post("", (0, validate_1.default)(validations_1.taskSchema, validate_1.validateKey.body), task_1.createTask);
taskRouter.get("/all", task_1.getTasks);
taskRouter.get("/:task_id", task_1.getTaskById);
taskRouter.put("/:task_id", (0, validate_1.default)(validations_1.taskSchema, validate_1.validateKey.body), task_1.updateTask);
taskRouter.patch("/:task_id", (0, validate_1.default)(validations_1.taskStatusSchema, validate_1.validateKey.query), task_1.updateTaskStatus);
taskRouter.delete("/:task_id", task_1.deleteTask);
exports.default = taskRouter;
