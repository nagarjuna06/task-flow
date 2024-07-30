"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.session = exports.login = exports.register = void 0;
const user_1 = __importDefault(require("../services/user"));
const http_response_1 = __importDefault(require("../utils/http-response"));
const http_exception_1 = require("../utils/http-exception");
const codes_messages_1 = require("../utils/codes-messages");
const register = async (req, res, next) => {
    try {
        await user_1.default.register(req.body);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.register_success, codes_messages_1.Messages.register_success, undefined, http_exception_1.statusCode.Created);
    }
    catch (error) {
        return next(error);
    }
};
exports.register = register;
//login
const login = async (req, res, next) => {
    try {
        const token = await user_1.default.login(req.body);
        return (0, http_response_1.default)(res, codes_messages_1.Codes.login_success, codes_messages_1.Messages.login_success, {
            token,
        });
    }
    catch (error) {
        return next(error);
    }
};
exports.login = login;
const session = async (req, res) => {
    const user = await user_1.default.session(req.userId);
    return (0, http_response_1.default)(res, "USER", undefined, user);
};
exports.session = session;
