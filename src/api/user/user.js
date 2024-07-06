import { axiosInstance } from "../config";

export const fetchGetProfile = async () => {
  try {
    const { data: responseData } = await axiosInstance.get("/auth/profile");

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error:
        error?.response?.data?.message || error?.message || "Get Profile Error",
    };
  }
};

export const fetchPostProfile = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.post(
      "/auth/profile",
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
        "Post Profile Error",
    };
  }
};
