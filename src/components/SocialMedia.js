import PropTypes from "prop-types";
import { Twitter } from "@atoms/Twitter";
import { Youtube } from "@atoms/Youtube";
import { Instagram } from "@atoms/Instagram";
import { Discord } from "@atoms/Discord";
import styles from "@styles/SocialMedia.module.sass";

export default function SocialMedia({ instagram, youtube, discord, twitter }) {
  return (
    <div className={styles.socialMedia__container}>
      <a className={styles.socialMedia__item} href={instagram}>
        <Instagram />
      </a>
      {!!youtube && (
        <a className={styles.socialMedia__item} href={youtube}>
          <Youtube />
        </a>
      )}
      {!!discord && (
        <a className={styles.socialMedia__item} href={discord}>
          <Discord />
        </a>
      )}
      <a className={styles.socialMedia__item} href={twitter}>
        <Twitter />
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  instagram: PropTypes.string,
  youtube: PropTypes.string,
  discord: PropTypes.string,
  twitter: PropTypes.string,
};

SocialMedia.defaultProps = {
  instagram: "#",
  youtube: "",
  discord: "",
  twitter: "#",
};
