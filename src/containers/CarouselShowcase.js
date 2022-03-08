import PropTypes from "prop-types";
import styles from "@styles/CarouselShowcase.module.sass";

export default function CarouselShowcase({ children, carouselStyles }) {
  return (
    <section className={styles["sliderReel__showcase--container"]}>
      <div className={styles.sliderReel__showcase} style={carouselStyles()}>
        {children}
      </div>
    </section>
  );
}

CarouselShowcase.propTypes = {
  carouselStyles: PropTypes.func,
};

CarouselShowcase.defaultProps = {
  carouselStyles: () => ({ transform: "translateX(50%)" }),
};
