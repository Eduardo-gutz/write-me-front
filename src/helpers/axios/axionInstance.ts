import axios from "axios";
import { global } from "../enviroments/global";

const axiosInstance = axios.create({
  baseURL: global.api_url,
  headers: {
    Authorization: typeof window !== "undefined" ? localStorage.getItem('access_token') : ''
  }
})

export default axiosInstance