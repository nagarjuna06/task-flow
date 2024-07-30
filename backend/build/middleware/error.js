"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    const { code, data, message, status, success } = err;
    return res.status(err.status).json({
        status,
        code,
        success,
        message,
        data,
    });
};
exports.default = errorHandler;
