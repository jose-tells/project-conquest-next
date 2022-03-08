import PropTypes from "prop-types";
import { Share } from "@atoms/Share";
import { Cancel } from "@atoms/Cancel";
import styles from "@styles/HeaderReel.module.sass";

export default function HeaderReel({ itemId, setModalOpen, mediaLength }) {
  return (
    <header className={styles.sliderReel__header}>
      <h1 className={styles["sliderReel__header--number"]}>
        {itemId}/{mediaLength}
      </h1>
      <div className={styles["sliderReel__header--buttons"]}>
        {/* <button type="button"></button> */}
        <button type="button">
          <Share />
        </button>
        <button type="button" onClick={() => setModalOpen(false)}>
          <Cancel />
        </button>
      </div>
    </header>
  );
}

HeaderReel.propTypes = {
  itemId: PropTypes.number,
  setModalOpen: PropTypes.func,
};

HeaderReel.defaultProps = {
  itemId: 1,
  setModalOpen: () => {},
};
