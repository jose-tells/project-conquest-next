import PropTypes from "prop-types";
import styles from "@styles/GridPhotos.module.sass";

export default function GridPhotos({ children }) {
  return <section className={styles.gridPhotos}>{children}</section>;
}

GridPhotos.propTypes = {
  children: PropTypes.array.isRequired,
};
