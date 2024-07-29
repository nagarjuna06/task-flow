import { Response } from "express";

export default function HttpResponse(
  res: Response,
  status: number,
  message: any = undefined,
  data: any = undefined
) {
  return res.status(status).json({ success: status < 400, data, message });
}
