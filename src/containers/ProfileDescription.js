import PropTypes from "prop-types";
import styles from "@styles/ProfileDescription.module.sass";

export default function ProfileDescription({ name, description, children }) {
  return (
    <div className={styles["profileDescription__description--container"]}>
      <div className={styles["profileDescription__title--container"]}>
        <h1 className={styles.profileDescription__title}>{name}</h1>
        <div className={styles["profileDescription__title--underline"]} />
      </div>
      <p className={styles.profileDescription__description}>{description}</p>
      {children}
    </div>
  );
}

ProfileDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

ProfileDescription.defaultProps = {
  name: "Jose",
  description:
    "Oh, you came across this default message! So, let's make it not boring, say something fun!",
};
