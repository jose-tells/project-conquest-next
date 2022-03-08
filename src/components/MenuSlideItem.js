import Link from "next/link";
import PropTypes from "prop-types";
import styles from "@styles/MenuSlideItem.module.sass";

export default function MenuSlideItem({ name, link }) {
  return (
    <li>
      <Link href={`/${link === "home" ? "" : link}`}>
        <a className={styles.item}>{name}</a>
      </Link>
    </li>
  );
}

MenuSlideItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

MenuSlideItem.defaultProps = {
  name: "Home",
  link: "",
};
