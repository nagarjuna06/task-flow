import { NextFunction, Request, Response } from "express";
import userService from "../services/user";
import HttpResponse from "../utils/http-response";
import { statusCode } from "../utils/http-exception";
import { Codes, Messages } from "../utils/codes-messages";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userService.register(req.body);
    return HttpResponse(
      res,
      Codes.register_success,
      Messages.register_success,
      undefined,
      statusCode.Created
    );
  } catch (error) {
    return next(error);
  }
};

//login
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await userService.login(req.body);
    return HttpResponse(res, Codes.login_success, Messages.login_success, {
      token,
    });
  } catch (error) {
    return next(error);
  }
};

export const session = async (req: Request, res: Response) => {
  const user = await userService.session(req.userId);
  return HttpResponse(res, "USER", undefined, user);
};
