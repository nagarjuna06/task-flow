declare namespace Express {
  export interface Request {
    userId: string;
    user: string | Object;
    params: {
      task_id: string;
    };
    query: {
      status: string;
    };
  }
}
