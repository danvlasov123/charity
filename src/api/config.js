import axios from "axios";

const API_URL = "https://charity.runflare.run/api";

axios.defaults.baseURL = API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
});
