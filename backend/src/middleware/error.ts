import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import HttpException from "../utils/http-exception";

const errorHandler: ErrorRequestHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { code, data, message, status, success, form } = err;
  return res.status(err.status).json({
    code,
    success,
    message,
    data,
    form,
  });
};

export default errorHandler;
