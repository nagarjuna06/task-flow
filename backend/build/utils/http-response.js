"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HttpResponse;
function HttpResponse(res, code = undefined, message = undefined, data = undefined, status = 200) {
    return res
        .status(status)
        .json({ status, code, success: status < 400, message, data });
}
