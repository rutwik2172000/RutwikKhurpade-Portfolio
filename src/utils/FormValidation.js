import * as Yup from "yup";

export const validationSchema = Yup.object({
  user_name: Yup.string().required("Please enter Your name"),
  user_email: Yup.string().email().required("Please enter an email address"),
  message: Yup.string().required("Please enter your message"),
});
