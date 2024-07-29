import { NextFunction, Request, Response } from "express";
import userService, { User } from "../services/user";
import HttpResponse from "../utils/http-response";
import { statusCode } from "../utils/http-execption";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userService.register(req.body as User);
    return HttpResponse(res, statusCode.Created, "Register successful");
  } catch (error) {
    return next(error);
  }
};
