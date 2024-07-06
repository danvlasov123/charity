import { axiosInstance } from "../config";

export const fetchGetPosts = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.get("/posts", data);

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error:
        error?.response?.data?.message || error?.message || "Get Posts Error",
    };
  }
};

export const fetchGetPostById = async (id) => {
  try {
    const { data: responseData } = await axiosInstance.get(`/posts/${id}`);

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error:
        error?.response?.data?.message || error?.message || "Get Post Error",
    };
  }
};
