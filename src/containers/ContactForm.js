import { useState } from "react";
import PropTypes from "prop-types";
import { Cancel } from "@atoms/Cancel";
import styles from "@styles/ContactForm.module.sass";

export default function ContactForm({ handleClose, isClose, successfulQuery }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const hasInput = Object.values(form).find((item) => item.includes(""));

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    handleClose(false);
  };

  return (
    <div className={styles.contactForm}>
      <form
        action={`https://formsubmit.co/${process.env.RANDOM_STRING_EMAIL}`}
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="_next"
          value={`${process.env.MY_DOMAIN}contact?successful=${successfulQuery}`}
        />
        <input
          type="hidden"
          name="_subject"
          value={`New beautiful message from ${form.name}`}
        />
        <input type="hidden" name="_template" value="table" />
        <button
          type="button"
          disabled={isClose}
          onClick={() => handleClose(!!hasInput)}
          className={styles.contactForm__closeButton}
        >
          <Cancel />
        </button>
        <section className={styles["contactForm__input--container"]}>
          <label className={styles.contactForm__label}>
            Name
            <input
              className={styles.contactForm__input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label className={styles.contactForm__label}>
            Email
            <input
              className={styles.contactForm__input}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
        </section>
        <section className={styles["contactForm__input--container"]}>
          <label className={styles.contactForm__label}>
            Message
            <textarea
              className={styles.contactForm__textarea}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
            />
          </label>
        </section>
        <button type="submit" className={styles.contactForm__button}>
          Let&apos;s work together!
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  handleClose: PropTypes.func,
  isClose: PropTypes.bool,
};

ContactForm.defaultProps = {
  handleClose: () => {},
  isClose: true,
};
