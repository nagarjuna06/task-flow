"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { ALLOW_ORIGIN, JWT_SECRET, MONGO_URI, PORT } = process.env;
const settings = {
    db_url: MONGO_URI,
    secret: JWT_SECRET,
    port: parseInt(PORT) || 4000,
    allow_origin: ALLOW_ORIGIN,
};
exports.default = settings;
