import { axiosInstance } from "../config";

export const fetchRegister = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.post(
      "/auth/register",
      data,
    );

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error:
        error?.response?.data?.message ||
        error?.message ||
        "Registration Error",
    };
  }
};

export const fetchLogin = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.post(
      "/auth/login",
      data,
    );

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error:
        error?.response?.data?.message ||
        error?.message ||
        "Authorisation Error",
    };
  }
};
