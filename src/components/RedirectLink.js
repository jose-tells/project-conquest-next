import Link from "next/link";
import PropTypes from "prop-types";
import { ArrowRight } from "@atoms/ArrowRight";
import styles from "@styles/RedirectLink.module.sass";

export default function RedirectLink({ link, linkText }) {
  return (
    <div className={styles.RedirectLink__container}>
      <div className={styles.RedirectLink__link}>
        <Link href={`/${link}`}>
          <a className={styles.RedirectLink__text}>{linkText}</a>
        </Link>
        <ArrowRight className={styles.RedirectLink__icon} />
      </div>
      <div className={styles.RedirectLink__underline} />
    </div>
  );
}

RedirectLink.propTypes = {
  link: PropTypes.string,
  linkText: PropTypes.string,
};

RedirectLink.defaultProps = {
  link: "",
  linkText: "Home",
};
