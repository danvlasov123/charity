import { axiosInstance } from "../config";

export const fetchRegister = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);

    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const fetchLogin = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);

    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
