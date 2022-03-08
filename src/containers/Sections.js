import PropTypes from "prop-types";
import styles from "@styles/Sections.module.sass";

export default function Sections({ children, section }) {
  return (
    <header className={styles.sections}>
      <ul className={styles.sections__items}>{children}</ul>
      <h1 className={styles.sections__title}>{section}</h1>
    </header>
  );
}

Sections.propTypes = {
  children: PropTypes.array.isRequired,
  section: PropTypes.string,
};

Sections.defaultProps = {
  section: "Photography",
};
