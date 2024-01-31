import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : "https://f3e6-2405-201-200c-701a-381a-389f-1e4b-c873.ngrok-free.app",
});

API.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    config.headers.Authorization = authToken ? authToken : null;
    return config;
  },
  (error) => Promise.reject(error)
);
