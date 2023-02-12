import axios from "axios";
import { global } from "../enviroments/global";

const axiosInstance = axios.create({
  baseURL: global.api_url,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization =
    typeof window !== "undefined"
      ? `Bearer ${localStorage.getItem("access_token")}`
      : "";
  return config;
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = localStorage.getItem("refresh_token");

      axios("/auth/refresh", {
        baseURL: global.api_url,
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }).then((data) => {
        localStorage.setItem("access_token", data.data.accessToken);
        localStorage.setItem("refresh_token", data.data.refreshToken);

        error.config.headers.Authorization = `Bearer ${data.data.accessToken}`;

        axiosInstance(error.config);
      });
    }
    return error;
  }
);

export default axiosInstance;
