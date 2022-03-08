import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@styles/PresentationCardImage.module.sass";

export default function PresentationCardImage({ media, caption }) {
  return (
    <div className={styles["PresentationCard__image--container"]}>
      <Image
        className={styles.PresentationCard__image}
        layout="fill"
        src={media}
        alt={caption}
        priority
      />
    </div>
  );
}

PresentationCardImage.propTypes = {
  media: PropTypes.string,
  caption: PropTypes.string,
};

PresentationCardImage.defaultProps = {
  media: "",
  caption: "Photography section",
};
