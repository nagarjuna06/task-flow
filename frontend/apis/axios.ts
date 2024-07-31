import Axios, { AxiosResponse } from "axios";
import { getToken, setToken } from "./auth";

export type ResponseStyle = {
  code: string;
  message: string;
  success: string;
  data?: any;
  form?: any;
};

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use((req) => {
  const token = getToken();
  if (token) {
    req.headers.set("Authorization", `Bearer ${token}`);
  }
  return req;
});

axios.interceptors.response.use(
  (res) => {
    if (res.status < 400 && res.config.url == "/auth/login") {
      setToken(res.data.data.token);
    }
    return res.data as AxiosResponse["data"];
  },
  (err) => {
    if (err.response) {
      return err.response.data;
    }
    return {
      success: false,
      data: null,
    };
  }
);

export default axios;
