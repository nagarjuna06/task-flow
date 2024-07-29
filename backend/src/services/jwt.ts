import { NextFunction, Request, Response } from "express";
import settings from "../config";
import { User } from "./user";
import JWT from "jsonwebtoken";

const createToken = (user: User, expires: number) => {
  return JWT.sign(user, settings.secret, { expiresIn: expires });
};

const verifyToken = (req:Request,res:Response,next:NextFunction)=>{
    try {
        const payload = JWT.verify(token,settings.secret)
    } catch (error) {
        if(error instanceof JWT.TokenExpiredError){
            return
        }
        
    }
}
