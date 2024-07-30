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
exports.validateKey = void 0;
const http_exception_1 = __importStar(require("../utils/http-exception"));
const yup_1 = require("yup");
var validateKey;
(function (validateKey) {
    validateKey["body"] = "body";
    validateKey["params"] = "params";
    validateKey["query"] = "query";
})(validateKey || (exports.validateKey = validateKey = {}));
const validate = (schema, key) => async (req, _, next) => {
    try {
        await schema.validate(req[key], { abortEarly: false });
        return next();
    }
    catch (error) {
        if (error instanceof yup_1.ValidationError) {
            const data = {
                path: error.inner[0].path,
                message: error.inner[0].message,
            };
            return next(new http_exception_1.default(http_exception_1.statusCode.UnprocessableEntity, "VALIDATION_ERROR", "Validation error", data));
        }
    }
};
exports.default = validate;
