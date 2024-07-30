export enum Codes {
  //register
  account_exist = "ACCOUNT_EXIST",
  register_success = "REGISTER_SUCCESS",
  //login
  account_not_found = "ACCOUNT_NOT_FOUND",
  password_incorrect = "PASSWORD_INCORRECT",
  login_success = "LOGIN_SUCCESS",
  //token
  no_token_provided = "NO_TOKEN_PROVIDED",
  token_expired = "TOKEN_EXPIRED",
  token_invalid = "TOKEN_INVALID",
  //session
  session = "USER",

  //task
  tasks = "TASKS",
  task = "TASK",
  task_created = "TASK_CREATED",
  task_updated = "TASK_UPDATED",
  task_not_found = "TASK_NOT_FOUND",
  task_deleted = "TASK_DELETED",
  invalid_task_id = "INVALID_TASK_ID",
}

export enum Messages {
  //register
  account_exist = "This email address is already associated with another account. Try with another email.",
  register_success = "Register successfully",
  //login
  account_not_found = "Sorry, we don't recognize that Email.You can create new Account",
  password_incorrect = "Sorry, we don't recognize that Password. You can try again or Forgot your password",
  login_success = "Login Successfully",
  //token
  no_token_provided = "No token provided. Please provide a valid token.",
  token_expired = "Token has expired. Please log in again.",
  token_invalid = "Invalid token. Please log in again.",

  //task
  task_not_found = "Sorry,task not found. Please create a new task",
  task_created = "Task created successfully",
  task_updated = "Task updated successfully",
  task_deleted = "Task deleted successfully",
  invalid_task_id = "invalid task id,please provide a  valid task id",
}
