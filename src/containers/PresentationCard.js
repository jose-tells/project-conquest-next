import PropTypes from "prop-types";
import RedirectLink from "../components/RedirectLink";
import styles from "@styles/PresentationCard.module.sass";

export default function PresentationCard({ children }) {
  return (
    <div className={styles.PresentationCard__container}>
      {children}
      <div className={styles["PresentationCard__text--container"]}>
        <h1 className={styles.PresentationCard__text}>
          HI I AM JOSE!
          <br />
          <span>PROJECT CONQUEST</span>
          <br />
          WEBPAGE CREATOR BUT,
          <br />
          THERE ARE TWO MORE
          <br />
          ARTIST WITH ME
          <br />
          CREATING MORE CREATIVE STUFF!
        </h1>
        <RedirectLink link="about" linkText="About us" />
      </div>
    </div>
  );
}

PresentationCard.propTypes = {
  children: PropTypes.array.isRequired,
};
