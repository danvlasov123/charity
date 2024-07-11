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
        "Authorization Error",
    };
  }
};

export const fetchPostChangePassword = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.post(
      "/auth/change-password",
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
        "Change Password Error",
    };
  }
};

export const fetchPostResetPassword = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.post(
      "/reset-password/start",
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
        "Reset Password Error",
    };
  }
};

export const fetchPostResetFinishPassword = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.post(
      "/reset-password/reset",
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
        "Reset Password Error",
    };
  }
};
