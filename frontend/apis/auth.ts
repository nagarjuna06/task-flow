import axios, { ResponseStyle } from "@/apis/axios";
import { RegisterUser } from "@/types/user";
import { Routes } from "./routes";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { token_cookie_name } from "@/lib/utils";

export const register = async (data: RegisterUser) => {
  return (await axios.post(Routes.register, data)) as ResponseStyle;
};

export const login = async (data: { email: string; password: string }) => {
  return (await axios.post(Routes.login, data)) as ResponseStyle;
};

export const getSession = async () => {
  return (await axios.get(Routes.session)) as ResponseStyle;
};

export const getToken = () => {
  return getCookie(token_cookie_name) as string;
};

export const setToken = (token: string) => {
  setCookie(token_cookie_name, token, {
    maxAge: 60 * 60,
  });
};

export const logout = () => {
  deleteCookie(token_cookie_name);
};
