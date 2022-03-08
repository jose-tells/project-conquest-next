import { Instagram } from "@atoms/Instagram";
import { Discord } from "@atoms/Discord";
import { Youtube } from "@atoms/Youtube";
import { styleVars } from "@utils/vars";
import PropTypes from "prop-types";
import styles from "@styles/Footer.module.sass";

export default function Footer({ isDark }) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__header}>
          <div className={styles["footer__header--underline"]} />
          <h1 className="footer__header--title">Project Conquest</h1>
          <div className={styles["footer__header--underline"]} />
        </div>
        <div className={styles.footer__brand}>
          <section className={styles["footer__social--media"]}>
            <a href="http://www.instagram.com/projectconquestt">
              <Instagram />
            </a>
            <a href="https://discord.gg/89dtH59Wrv">
              <Discord />
            </a>
            <a href="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag">
              <Youtube />
            </a>
          </section>
        </div>
      </footer>
      <style jsx>{`
        .footer__header--title {
          color: ${isDark ? styleVars.color8 : styleVars.color4};
          text-align: center;
          text-transform: uppercase;
          font-size: 1.8rem;
          font-weight: 300;
          margin-bottom: 0.3rem;
        }
      `}</style>
    </>
  );
}

Footer.propTypes = {
  isDark: PropTypes.bool,
};

Footer.defaultProps = {
  isDark: false,
};
