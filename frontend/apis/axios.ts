import Axios, { AxiosResponse } from "axios";
import { getToken, setToken } from "./auth";

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
    return err.response.data;
  }
);

export default axios;
