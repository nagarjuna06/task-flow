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
const jwt_1 = require("../middleware/jwt");
const models_1 = __importDefault(require("../models"));
const http_exception_1 = __importStar(require("../utils/http-exception"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const codes_messages_1 = require("../utils/codes-messages");
class userService {
    // password hashing
    static hashPwd(pwd) {
        return bcrypt_1.default.hash(pwd, 10);
    }
    //password comparing
    static comparePwd(pwd, hashPwd) {
        return bcrypt_1.default.compare(pwd, hashPwd);
    }
    //register user
    static async register(user) {
        const existedUser = await models_1.default.user.findOne({ email: user.email });
        if (existedUser) {
            throw new http_exception_1.default(http_exception_1.statusCode.BadRequest, codes_messages_1.Codes.account_exist, codes_messages_1.Messages.account_exist);
        }
        const hashPwd = await userService.hashPwd(user.password);
        return await models_1.default.user.create({ ...user, password: hashPwd });
    }
    //login
    static async login(user) {
        const data = await models_1.default.user.findOne({ email: user.email });
        if (!data) {
            throw new http_exception_1.default(http_exception_1.statusCode.NotFound, codes_messages_1.Codes.account_not_found, codes_messages_1.Messages.account_not_found);
        }
        const isCorrectPassword = await userService.comparePwd(user.password, data.password);
        //check password
        if (!isCorrectPassword) {
            throw new http_exception_1.default(http_exception_1.statusCode.BadRequest, codes_messages_1.Codes.password_incorrect, codes_messages_1.Messages.password_incorrect);
        }
        //token
        return (0, jwt_1.createToken)(data.toJSON());
    }
    //session
    static session(userId) {
        return models_1.default.user.findOne({ _id: userId });
    }
}
exports.default = userService;
