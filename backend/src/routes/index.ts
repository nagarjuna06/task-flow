import express, { Response } from "express";

import userRouter from "./user";
import errorHandler from "../middleware/error";
import { verifyToken } from "../middleware/jwt";
import taskRouter from "./task";

const router = express.Router();

router.get("/api", (_: any, res: Response) => {
  return res.json({ msg: "api ready!" });
});

router.use("/auth", userRouter);

router.use("/task", verifyToken, taskRouter);

router.use(errorHandler);

export default router;
