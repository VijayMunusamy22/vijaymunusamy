import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form className={styles.formContainer}>
      <h4 className={styles.headerText}>Contact me</h4>
      <input
        {...register("fullName", { required: true })}
        placeholder="Full name"
        className={styles.formMailField}
      />
      <input
        {...register("emailId", { required: true })}
        placeholder="Email Id"
        className={styles.formMailField}
      />
      <input
        {...register("phoneNumber", { required: false })}
        placeholder="Phone number"
        className={styles.formMailField}
      />
      <textarea
        {...register("message")}
        placeholder="Few lines about the proposal"
        className={styles.formMailField}
        rows={6}
      />
      <input type="submit" className={styles.formButton} />
    </form>
  );
};

export default Contact;
