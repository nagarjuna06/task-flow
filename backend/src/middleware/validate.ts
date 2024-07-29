import { NextFunction, Request } from "express";
import HttpException, { statusCode } from "../utils/http-execption";
import { ValidationError } from "yup";

const validate =
  (schema: any) => async (req: Request, _: any, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (error) {
      if (error instanceof ValidationError) {
        const data = error.inner.map((each) => each.path);
        return next(
          new HttpException(statusCode.BadRequest, "PARAMS_MISSING", data)
        );
      }
    }
  };

export default validate;
