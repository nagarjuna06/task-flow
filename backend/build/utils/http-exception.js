"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCode = void 0;
var statusCode;
(function (statusCode) {
    statusCode[statusCode["Ok"] = 200] = "Ok";
    statusCode[statusCode["Created"] = 201] = "Created";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["NoContent"] = 204] = "NoContent";
    statusCode[statusCode["PartialContent"] = 206] = "PartialContent";
    statusCode[statusCode["MultipleChoices"] = 300] = "MultipleChoices";
    statusCode[statusCode["MovedPermanently"] = 301] = "MovedPermanently";
    statusCode[statusCode["Found"] = 302] = "Found";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
    statusCode[statusCode["Unauthorized"] = 401] = "Unauthorized";
    statusCode[statusCode["PaymentRequired"] = 402] = "PaymentRequired";
    statusCode[statusCode["Forbidden"] = 403] = "Forbidden";
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    statusCode[statusCode["RequestTimeout"] = 408] = "RequestTimeout";
    statusCode[statusCode["Conflict"] = 409] = "Conflict";
    statusCode[statusCode["Gone"] = 410] = "Gone";
    statusCode[statusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    statusCode[statusCode["TooManyRequests"] = 429] = "TooManyRequests";
    statusCode[statusCode["InternalServerError"] = 500] = "InternalServerError";
    statusCode[statusCode["NotImplemented"] = 501] = "NotImplemented";
    statusCode[statusCode["BadGateway"] = 502] = "BadGateway";
    statusCode[statusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    statusCode[statusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
})(statusCode || (exports.statusCode = statusCode = {}));
class HttpException extends Error {
    constructor(status = 500, code = "INTERNAL_SERVER_ERROR", message = "Internal Server Error", data = undefined) {
        super(message);
        this.status = status;
        this.code = code;
        this.data = data;
        this.success = status < 400;
    }
}
exports.default = HttpException;
