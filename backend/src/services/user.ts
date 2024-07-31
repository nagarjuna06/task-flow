import { createToken } from "../middleware/jwt";
import db from "../models";
import { CreateUser } from "../types/user";
import HttpException, { statusCode } from "../utils/http-exception";
import bcrypt from "bcrypt";
import { Codes, Messages } from "../utils/codes-messages";

class userService {
  // password hashing
  private static hashPwd(pwd: string) {
    return bcrypt.hash(pwd, 10);
  }

  //password comparing
  private static comparePwd(pwd: string, hashPwd: string) {
    return bcrypt.compare(pwd, hashPwd);
  }

  //register user
  static async register(user: CreateUser) {
    const existedUser = await db.user.findOne({ email: user.email });
    if (existedUser) {
      throw new HttpException(
        statusCode.BadRequest,
        Codes.account_exist,
        Messages.account_exist,
        undefined,
        {
          email: Messages.account_exist,
        }
      );
    }
    const hashPwd = await userService.hashPwd(user.password);
    return await db.user.create({ ...user, password: hashPwd });
  }

  //login
  static async login(user: CreateUser) {
    const data = await db.user.findOne({ email: user.email });
    if (!data) {
      throw new HttpException(
        statusCode.NotFound,
        Codes.account_not_found,
        Messages.account_not_found,
        undefined,
        {
          email: Messages.account_not_found,
        }
      );
    }

    const isCorrectPassword = await userService.comparePwd(
      user.password,
      data.password
    );

    //check password
    if (!isCorrectPassword) {
      throw new HttpException(
        statusCode.BadRequest,
        Codes.password_incorrect,
        Messages.password_incorrect,
        undefined,
        {
          password: Messages.password_incorrect,
        }
      );
    }
    //token
    return createToken(data.toJSON());
  }

  //session
  static session(userId: string) {
    return db.user.findOne({ _id: userId });
  }
}

export default userService;
