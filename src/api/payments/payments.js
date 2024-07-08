import { axiosInstance } from "../config";

export const fetchGetPayments = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.get("/payments/me");

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error:
        error?.response?.data?.message ||
        error?.message ||
        "Get Payments Error",
    };
  }
};

export const fetchPostPayment = async (data) => {
  try {
    const { data: responseData } = await axiosInstance.post("/invoices", data);

    return { success: true, ...responseData };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error:
        error?.response?.data?.message ||
        error?.message ||
        "Post Payment Error",
    };
  }
};
