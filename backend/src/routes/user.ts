import express from "express";
import validate from "../middleware/validate";
import { userSchema } from "../utils/validations";
import { register } from "../controllers/user";
const userRouter = express.Router();

userRouter.post("/register", validate(userSchema), register);

export default userRouter;
