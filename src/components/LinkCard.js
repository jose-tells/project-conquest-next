import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "@styles/LinkCard.module.sass";

export default function LinkCard({
  cardTitle,
  children,
  renderImagesReel,
  media,
}) {
  const [position, setPosition] = useState(0);

  const cardImagesContainerStyles = () => ({
    transform: `translateX(${-position * 100}%)`,
  });

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(animation);
  }, [position]);

  return (
    <div className={styles.linkCard__container}>
      <div className={styles["linkCard__section--container"]}>
        <div className={styles["linkCard__images--glass"]} />
        <div
          className={styles["linkCard__images--carousel"]}
          style={cardImagesContainerStyles()}
        >
          {media.map(renderImagesReel)}
        </div>
        <h1 className={styles.linkCard__title}>{cardTitle}</h1>
      </div>
      {children}
    </div>
  );
}

LinkCard.propTypes = {
  cardTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
  renderImagesReel: PropTypes.func,
  media: PropTypes.array,
};

LinkCard.defaultProps = {
  cardTitle: "Photography",
  renderImagesReel: () => {},
  media: [],
};
