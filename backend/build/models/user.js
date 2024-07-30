"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
userSchema.set("toJSON", {
    transform: (doc, ret) => {
        const id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        return { id, ...ret };
    },
});
const User = (0, mongoose_1.model)("users", userSchema);
exports.default = User;
