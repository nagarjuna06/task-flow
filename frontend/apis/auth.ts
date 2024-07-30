import axios from "@/apis/axios";
import { RegisterUser, User } from "@/types/user";
import { Routes } from "./routes";
import { Dispatch, SetStateAction } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

type ResponseStyle = {
  code: string;
  message: string;
  success: string;
  data?: any;
  form?: any;
};

export const register = async (data: RegisterUser) => {
  return (await axios.post(Routes.register, data)) as ResponseStyle;
};

export const login = async (data: { email: string; password: string }) => {
  return (await axios.post(Routes.login, data)) as ResponseStyle;
};

export const getSession = async (setState: Dispatch<SetStateAction<any>>) => {
  const res = await axios.get(Routes.session);
  setState(res.data);
};

const token_key = "__token";

export const getToken = () => {
  return getCookie(token_key) as string;
};

export const setToken = (token: string) => {
  setCookie(token_key, token, {
    maxAge: 60 * 60,
  });
};

export const logout = () => {
  deleteCookie(token_key);
};
