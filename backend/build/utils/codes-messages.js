"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = exports.Codes = void 0;
var Codes;
(function (Codes) {
    //register
    Codes["account_exist"] = "ACCOUNT_EXIST";
    Codes["register_success"] = "REGISTER_SUCCESS";
    //login
    Codes["account_not_found"] = "ACCOUNT_NOT_FOUND";
    Codes["password_incorrect"] = "PASSWORD_INCORRECT";
    Codes["login_success"] = "LOGIN_SUCCESS";
    //token
    Codes["no_token_provided"] = "NO_TOKEN_PROVIDED";
    Codes["token_expired"] = "TOKEN_EXPIRED";
    Codes["token_invalid"] = "TOKEN_INVALID";
    //session
    Codes["session"] = "USER";
    //task
    Codes["tasks"] = "TASKS";
    Codes["task"] = "TASK";
    Codes["task_created"] = "TASK_CREATED";
    Codes["task_updated"] = "TASK_UPDATED";
    Codes["task_not_found"] = "TASK_NOT_FOUND";
    Codes["task_deleted"] = "TASK_DELETED";
    Codes["invalid_task_id"] = "INVALID_TASK_ID";
})(Codes || (exports.Codes = Codes = {}));
var Messages;
(function (Messages) {
    //register
    Messages["account_exist"] = "This email address is already associated with another account. Try with another email.";
    Messages["register_success"] = "Register successfully";
    //login
    Messages["account_not_found"] = "Sorry, we don't recognize that Email.You can create new Account";
    Messages["password_incorrect"] = "Sorry, we don't recognize that Password. You can try again or Forgot your password";
    Messages["login_success"] = "Login Successfully";
    //token
    Messages["no_token_provided"] = "No token provided. Please provide a valid token.";
    Messages["token_expired"] = "Token has expired. Please log in again.";
    Messages["token_invalid"] = "Invalid token. Please log in again.";
    //task
    Messages["task_not_found"] = "Sorry,task not found. Please create a new task";
    Messages["task_created"] = "Task created successfully";
    Messages["task_updated"] = "Task updated successfully";
    Messages["task_deleted"] = "Task deleted successfully";
    Messages["invalid_task_id"] = "invalid task id,please provide a  valid task id";
})(Messages || (exports.Messages = Messages = {}));
