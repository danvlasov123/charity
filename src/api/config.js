import axios from "axios";

import { store } from "src/store";

const API_URL = "https://charity.runflare.run/api";

axios.defaults.baseURL = API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      Authorization: `Bearer  ${store.getState().user.access_token}`,
    },
  },
});
