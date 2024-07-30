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
exports.verifyToken = exports.createToken = void 0;
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_exception_1 = __importStar(require("../utils/http-exception"));
const codes_messages_1 = require("../utils/codes-messages");
const createToken = (user, expires = 24 * 60 * 60) => {
    const { email, id } = user;
    return jsonwebtoken_1.default.sign({ email, id }, config_1.default.secret, { expiresIn: expires });
};
exports.createToken = createToken;
// token verify
const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers?.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return next(new http_exception_1.default(http_exception_1.statusCode.Forbidden, codes_messages_1.Codes.no_token_provided, codes_messages_1.Messages.no_token_provided));
        }
        const token = authHeader.split(" ")[1];
        const payload = jsonwebtoken_1.default.verify(token, config_1.default.secret);
        //payload
        req.userId = payload.id;
        req.user = payload;
        return next();
    }
    catch (error) {
        //token expire
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return next(new http_exception_1.default(http_exception_1.statusCode.Unauthorized, codes_messages_1.Codes.token_expired, codes_messages_1.Messages.token_expired));
            //token error
        }
        else if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return next(new http_exception_1.default(http_exception_1.statusCode.Unauthorized, codes_messages_1.Codes.token_invalid, codes_messages_1.Messages.token_invalid));
        }
    }
};
exports.verifyToken = verifyToken;
