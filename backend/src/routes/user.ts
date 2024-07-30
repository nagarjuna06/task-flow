import { Router } from "express";

import { loginUserSchema, registerUserSchema } from "../utils/validations";
import { login, register, session } from "../controllers/user";
import { verifyToken } from "../middleware/jwt";
import validate, { validateKey } from "../middleware/validate";

const userRouter = Router();

userRouter.post(
  "/register",
  validate(registerUserSchema, validateKey.body),
  register
);

userRouter.post("/login", validate(loginUserSchema, validateKey.body), login);

userRouter.get("/session", verifyToken, session);

export default userRouter;
