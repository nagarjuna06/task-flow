"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (user, expires) => {
    return jsonwebtoken_1.default.sign(user, config_1.default.secret, { expiresIn: expires });
};
const verifyToken = (req, res, next) => {
    try {
        const payload = jsonwebtoken_1.default.verify(token, config_1.default.secret);
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return;
        }
    }
};
