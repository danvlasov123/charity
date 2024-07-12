import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required field"),
  email: Yup.string().email("Invalid email address").required("Required field"),
  password: Yup.string().required("Required field"),
  message: Yup.string(),
  agree: Yup.bool().oneOf([true]).required(),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required field"),
  password: Yup.string().required("Required field"),
  message: Yup.string(),
});

export const UpdatePasswordSchema = Yup.object().shape({
  "current-password": Yup.string().required("Required field"),
  "new-password": Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Required field"),
  "confirm-password": Yup.string()
    .oneOf([Yup.ref("new-password"), null], "New password doesn't match")
    .required("Required field"),
});

export const UpdateUserSchema = Yup.object().shape({
  firstName: Yup.string().required("Required field"),
  lastName: Yup.string().required("Required field"),
});

export const DonateAmountSchema = Yup.object().shape({
  amount: Yup.number().min(5, "Minimum $5.00").required("Required field"),
});

export const ResetPasswordSchema = {
  email: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required field"),
  }),
  password: Yup.object().shape({
    new_password: Yup.string()
      .min(8, "Minimum 8 characters")
      .required("Required field"),
    password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "New password doesn't match")
      .required("Required field"),
  }),
};
