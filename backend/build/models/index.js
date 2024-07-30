"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("./task"));
const user_1 = __importDefault(require("./user"));
const db = {
    user: user_1.default,
    task: task_1.default,
};
exports.default = db;
