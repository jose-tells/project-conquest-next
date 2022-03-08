import { useState } from "react";
import { styleVars } from "@utils/vars";
import PropTypes from "prop-types";
import styles from "@styles/ProfileMenuNav.module.sass";

export default function ProfileMenuNav({ children }) {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <nav className={`profileMenuNav__container ${isOpen && "isOpen"}`}>
        <ul className={styles["profileMenuNav__items--container"]}>
          {children}
        </ul>
        <button
          type="button"
          onClick={handleOpen}
          className={styles.profileMenuNav__button}
        >
          <div />
          <div />
          <div />
        </button>
      </nav>
      <style jsx>{`
        .profileMenuNav__container {
          grid-column: 1/4;
          grid-row: 1/11;
          justify-self: flex-start;
          transform: translateX(calc(-100% + 3rem));
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 22rem;
          height: 100vh;
          background-color: transparent;
          gap: 4rem;
          z-index: 10;
          transition: 0.5s all ease;
        }

        .profileMenuNav__container.isOpen {
          background-color: ${styleVars.color4};
          transform: translateX(0);
        }
      `}</style>
    </>
  );
}

ProfileMenuNav.propTypes = {
  children: PropTypes.array.isRequired,
};
