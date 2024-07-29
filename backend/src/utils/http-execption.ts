export enum statusCode {
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  PartialContent = 206,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  UnprocessableEntity = 422,
  TooManyRequests = 429,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

class HttpException extends Error {
  public status: number;
  public data: any;
  public success: boolean;
  constructor(
    status: number = 500,
    message: string = "Internal Server Error",
    data: any = undefined
  ) {
    super(message);
    this.status = status;
    this.data = data;
    this.success = status < 400;
  }
}

export default HttpException;
