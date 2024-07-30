"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = __importDefault(require("./config"));
const db_1 = __importDefault(require("./clients/db"));
const cors_1 = __importDefault(require("cors"));
const initServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: config_1.default.allow_origin,
    }));
    (0, db_1.default)();
    app.use(routes_1.default);
    app.listen(config_1.default.port, () => console.log(`Server started at http://localhost:${config_1.default.port}`));
};
initServer();
