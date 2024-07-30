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
const validations_1 = require("../utils/validations");
const user_1 = require("../controllers/user");
const jwt_1 = require("../middleware/jwt");
const validate_1 = __importStar(require("../middleware/validate"));
const userRouter = (0, express_1.Router)();
userRouter.post("/register", (0, validate_1.default)(validations_1.registerUserSchema, validate_1.validateKey.body), user_1.register);
userRouter.post("/login", (0, validate_1.default)(validations_1.loginUserSchema, validate_1.validateKey.body), user_1.login);
userRouter.get("/session", jwt_1.verifyToken, user_1.session);
exports.default = userRouter;
