import { store } from "src/store";
import { axiosInstance } from "../config";
import { userActions } from "src/store";

export const fetchGetProfile = async () => {
  try {
    const { data: responseData } = await axiosInstance.get("/auth/profile");

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return { success: false, error: error?.message || "Get Profile Error" };
  }
};
