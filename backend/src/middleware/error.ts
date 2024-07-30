import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import HttpException from "../utils/http-exception";

const errorHandler: ErrorRequestHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { code, data, message, status, success } = err;
  return res.status(err.status).json({
    status,
    code,
    success,
    message,
    data,
  });
};

export default errorHandler;
