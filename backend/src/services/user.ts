import db from "../models";
import HttpException, { statusCode } from "../utils/http-execption";
import bcrypt from "bcrypt";
export type User = {
  name?: string;
  email: string;
  password: string;
};

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
  static async register(user: User) {
    const existedUser = await db.user.findOne({ email: user.email });
    if (existedUser) {
      throw new HttpException(
        statusCode.BadRequest,
        "This email address is already associated with another account. Try with another email."
      );
    }
    const hashPwd = await userService.hashPwd(user.password);
    return await db.user.create({ ...user, password: hashPwd });
  }

  //login
  static async login(user: User) {
    const data = await db.user.findOne({ email: user.email });
    if (!data) {
      throw new HttpException(
        statusCode.NotFound,
        "Sorry, we don't recognize that Email.You can create new Account"
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
        "Sorry, we don't recognize that Password. You can try again or Forgot your password"
      );
    }
  }
}

export default userService;
