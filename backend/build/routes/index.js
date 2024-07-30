"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const error_1 = __importDefault(require("../middleware/error"));
const jwt_1 = require("../middleware/jwt");
const task_1 = __importDefault(require("./task"));
const router = express_1.default.Router();
router.get("/api", (_, res) => {
    return res.json({ msg: "api ready!" });
});
router.use("/auth", user_1.default);
router.use("/task", jwt_1.verifyToken, task_1.default);
router.use(error_1.default);
exports.default = router;
