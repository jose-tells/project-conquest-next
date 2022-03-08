import PropTypes from "prop-types";
import Image from "next/image";
import styles from "@styles/GridFormat.module.sass";

export default function GridFormat({
  media,
  caption,
  orientation,
  setModalOpen,
  setMediaIndex,
}) {
  const handleClick = () => {
    setModalOpen(true);
    setMediaIndex();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`gridItem__container ${orientation}`}
      >
        <Image
          className={styles.gridItem__item}
          layout="fill"
          src={media}
          alt={caption}
          priority
        />
      </div>
      <style jsx>{`
        .gridItem__container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          cursor: pointer;
        }

        .landscape {
          grid-column: span 2;
          grid-row: span 1;
        }

        .portrait {
          grid-row: span 4;
          grid-column: span 2;
        }
      `}</style>
    </>
  );
}

GridFormat.propTypes = {
  media: PropTypes.string,
  orientation: PropTypes.string,
  setModalOpen: PropTypes.func,
  setMediaIndex: PropTypes.func,
};

GridFormat.defaultProps = {
  media: "",
  orientation: "Landscape",
  setModalOpen: () => {},
  setMediaIndex: () => {},
};
