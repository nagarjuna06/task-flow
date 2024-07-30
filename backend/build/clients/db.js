"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
let connected = false;
const connectDB = async () => {
    try {
        if (connected)
            return;
        await mongoose_1.default.connect(config_1.default.db_url);
        connected = true;
        console.log("DB connected!");
    }
    catch (error) {
        if (error instanceof Error)
            console.log("DB connection Error", error.message);
    }
};
exports.default = connectDB;
