import { NextFunction, Request, Response } from "express";
import settings from "../config";
import JWT from "jsonwebtoken";
import HttpException, { statusCode } from "../utils/http-exception";
import { User } from "../types/user";
import { Codes, Messages } from "../utils/codes-messages";

export const createToken = (user: User, expires: number = 60 * 60) => {
  const { email, id } = user;

  return JWT.sign({ email, id }, settings.secret, { expiresIn: expires });
};

// token verify
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(
        new HttpException(
          statusCode.Forbidden,
          Codes.no_token_provided,
          Messages.no_token_provided
        )
      );
    }
    const token = authHeader.split(" ")[1];

    const payload = JWT.verify(token, settings.secret) as User;

    //payload
    req.userId = payload.id;
    req.user = payload;
    return next();
  } catch (error) {
    //token expire
    if (error instanceof JWT.TokenExpiredError) {
      return next(
        new HttpException(
          statusCode.Unauthorized,
          Codes.token_expired,
          Messages.token_expired
        )
      );
      //token error
    } else if (error instanceof JWT.JsonWebTokenError) {
      return next(
        new HttpException(
          statusCode.Unauthorized,
          Codes.token_invalid,
          Messages.token_invalid
        )
      );
    }
  }
};
