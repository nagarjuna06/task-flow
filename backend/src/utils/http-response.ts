import { Response } from "express";

export default function HttpResponse(
  res: Response,
  code: any = undefined,
  message: any = undefined,
  data: any = undefined,
  status: number = 200
) {
  return res
    .status(status)
    .json({ code, success: status < 400, message, data });
}
