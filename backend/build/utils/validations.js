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
exports.taskStatusSchema = exports.taskSchema = exports.loginUserSchema = exports.registerUserSchema = void 0;
const yup = __importStar(require("yup"));
const task_1 = require("../types/task");
const email = yup.string().email();
const password = yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character (@$!%*?&#)");
exports.registerUserSchema = yup.object({
    name: yup.string().required(),
    email,
    password,
});
exports.loginUserSchema = yup.object({
    email,
    password,
});
const status = yup
    .mixed()
    .oneOf(Object.values(task_1.TaskStatus))
    .required();
exports.taskSchema = yup.object({
    title: yup.string().required().min(3).max(20),
    description: yup.string().min(5).max(500),
    priority: yup.mixed().oneOf(Object.values(task_1.TaskPriority)),
    status,
    deadline: yup.string().required(),
});
exports.taskStatusSchema = yup.object({
    status,
});
