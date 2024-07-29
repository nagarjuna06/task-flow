import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import HttpException from "../utils/http-execption";

const errorHandler: ErrorRequestHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, status, data, success } = err;
  return res.status(err.status).json({
    success,
    message,
    data,
  });
};

export default errorHandler;
