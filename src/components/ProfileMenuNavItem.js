import Link from "next/link";
import PropTypes from "prop-types";
import styles from "@styles/ProfileMenuNavItem.module.sass";

export default function ProfileMenuNavItem({ itemText }) {
  return (
    <li className={styles.profileMenuNav__items}>
      <Link href={`/${itemText === "home" ? "" : itemText}`}>
        <a>{itemText}</a>
      </Link>
    </li>
  );
}

ProfileMenuNavItem.propTypes = {
  itemText: PropTypes.string,
};

ProfileMenuNavItem.defaultProps = {
  itemText: "home",
};
