import express, { Response } from "express";

import userRouter from "./user";

const router = express.Router();

// router.use(errorHandler);

router.use("/auth", userRouter);

router.get("/api", (_: any, res: Response) => {
  return res.json({ msg: "api ready!" });
});

export default router;
