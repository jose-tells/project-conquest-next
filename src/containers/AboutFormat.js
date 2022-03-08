import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@styles/AboutFormat.module.sass";

export default function AboutFormat({ media, link, caption }) {
  return (
    <div className={styles["gridAbout__item--container"]}>
      <div className={styles["gridAbout__image--container"]}>
        <Image
          layout="fill"
          className={styles.gridAbout__image}
          src={media}
          alt={caption}
          priority
        />
      </div>
      <Link href={`/about/${link}`}>
        <a className={styles.gridAbout__link}> </a>
      </Link>
    </div>
  );
}

AboutFormat.propTypes = {
  media: PropTypes.string,
  link: PropTypes.string,
};

AboutFormat.defaultProps = {
  media: "",
  link: "",
};
