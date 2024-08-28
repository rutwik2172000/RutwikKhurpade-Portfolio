import styles from "@/styles/Contact.module.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { validationSchema } from "@/utils/FormValidation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
const ContactForm = () => {
  const formRef = useRef();
  // formik for validation purposes
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        user_name: "",
        user_email: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values, { resetForm }) => {
        // for sending email using email js
        emailjs
          .sendForm("service_alf2q0s", "template_bw0th0l", formRef.current, {
            publicKey: "KXS2ROy2Fk1bvrxA4",
          })
          .then(
            (result) => {
              formRef.current.reset();
              toast.success("Email sent successfully");
            },
            (error) => {
              formRef.current.reset();
              toast.error("Something went wrong Please try again");
            }
          );
      },
    });
  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles.formContainer}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="user_name" className={styles.labels}>
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {/* For Showing error messages */}
          {errors.user_name && touched.user_name ? (
            <p className={styles.errorMessage}>{errors.user_name}</p>
          ) : null}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="user_email" className={styles.labels}>
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Johndoe1234@gmail.com"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {/* For Showing error messages */}
          {errors.user_email && touched.user_email ? (
            <p className={styles.errorMessage}>{errors.user_email}</p>
          ) : null}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message" className={styles.labels}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message..."
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {/* For Showing error messages */}
          {errors.message && touched.message ? (
            <p className={styles.errorMessage}>{errors.message}</p>
          ) : null}
        </div>
        <input type="submit" value="Send" className={styles.submitBtn} />
      </form>
    </>
  );
};

export default ContactForm;
