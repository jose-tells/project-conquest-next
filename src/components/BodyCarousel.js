import PropTypes from "prop-types";
import styles from "@styles/BodyCarousel.module.sass";

export default function BodyCarousel({
  handleLeft,
  handleRight,
  children,
  mediaIndex,
}) {
  return (
    <>
      <section className={styles.sliderReel__slider}>
        <button
          type="button"
          className="sliderReel__showcase--buttons left"
          onClick={handleLeft}
        />
        <div>{children}</div>
        <button
          type="button"
          className="sliderReel__showcase--buttons right"
          onClick={handleRight}
        />
      </section>
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 100%;
          transform: translateX(${mediaIndex * -100}%);
          transition: all 0.5s;
        }
        .sliderReel__showcase--buttons {
          position: absolute;
          background: transparent;
          border: none;
          width: 4rem;
          height: 100%;
          z-index: 100;
          cursor: pointer;
          outline: none;
        }
        .sliderReel__showcase--buttons.left {
          left: 0;
        }
        .sliderReel__showcase--buttons.right {
          right: 0;
        }
      `}</style>
    </>
  );
}

BodyCarousel.propTypes = {
  handleLeft: PropTypes.func,
  handleRight: PropTypes.func,
  children: PropTypes.array.isRequired,
};

BodyCarousel.defaultProps = {
  handleLeft: () => {},
  handleRight: () => {},
};
