import Axios from "axios";
import { API_URL } from "@/config/constants";
import { storage } from "@/utils/storage";

export const apiClient = Axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = storage.getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.accept = "application/json";
  config.headers["ngrok-skip-browser-warning"] = "69420";
  return config;
});
