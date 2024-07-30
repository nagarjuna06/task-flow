"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    status: {
        type: String,
        enum: ["TO_DO", "IN_PROGRESS", "UNDER_REVIEW", "FINISHED"],
        default: "TO_DO",
    },
    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
        default: "MEDIUM",
    },
    deadline: Date,
    description: {
        type: String,
        minLength: 10,
        maxLength: 500,
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
    },
}, {
    timestamps: true,
});
taskSchema.set("toJSON", {
    transform: (doc, ret) => {
        const id = ret._id;
        delete ret._id;
        delete ret.__v;
        return { id, ...ret };
    },
});
const Task = (0, mongoose_1.model)("tasks", taskSchema);
exports.default = Task;
