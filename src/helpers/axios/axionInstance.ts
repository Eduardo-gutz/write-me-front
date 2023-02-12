import axios from "axios";
import { global } from "../enviroments/global";

const axiosInstance = axios.create({
  baseURL: global.api_url,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = typeof window !== "undefined" ? `bearer ${localStorage.getItem('access_token')}`  : ''
  return config
})

export default axiosInstance