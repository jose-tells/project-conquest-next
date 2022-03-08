import { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuNavStyles from "./MenuNavStyles";
import styles from "@styles/MenuNav.module.sass";

export default function MenuNav({ isDark, children }) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const logoStyle = classNames("menuNav__logo", {
    isDark,
  });

  const StylesMenuSlide = classNames("MenuSlide__container", {
    isDark,
    isOpen,
  });

  const menuNavButtonStyles = classNames("menuNav__button", {
    isOpen,
  });

  return (
    <>
      <nav className={styles.menuNav__container}>
        <Link href="/">
          <a className={logoStyle}>PROJECT CONQUEST</a>
        </Link>
        <div className={menuNavButtonStyles} onClick={handleClick}>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={StylesMenuSlide}>
          <ul className={styles["MenuSlide__items--container"]}>{children}</ul>
        </div>
      </nav>
      <style jsx>{MenuNavStyles}</style>
    </>
  );
}

MenuNav.propTypes = {
  isDark: PropTypes.bool,
  children: PropTypes.array.isRequired,
};

MenuNav.defaultProps = {
  isDark: true,
};
