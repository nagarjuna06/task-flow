import { NextFunction, Request } from "express";
import HttpException, { statusCode } from "../utils/http-exception";
import { ValidationError, Schema } from "yup";

export enum validateKey {
  body = "body",
  params = "params",
  query = "query",
}

const validate =
  (schema: Schema, key: validateKey) =>
  async (req: Request, _: any, next: NextFunction) => {
    try {
      await schema.validate(req[key], { abortEarly: false });
      return next();
    } catch (error) {
      if (error instanceof ValidationError) {
        const data = {
          path: error.inner[0].path,
          message: error.inner[0].message,
        };
        return next(
          new HttpException(
            statusCode.UnprocessableEntity,
            "VALIDATION_ERROR",
            "Validation error",
            data
          )
        );
      }
    }
  };

export default validate;
