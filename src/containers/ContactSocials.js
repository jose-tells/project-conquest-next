import styles from "@styles/ContactSocials.module.sass";

export default function ContactSocials() {
  return (
    <div className={styles.gridContact__socialMedia}>
      <h1 className={styles["gridContact__socialMedia--title"]}>Follow us!</h1>
      <a
        href="https://www.instagram.com/projectconquestt/"
        className={styles["gridContact__socialMedia--socials"]}
      >
        Instagram
      </a>
      <a
        href="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag"
        className={styles["gridContact__socialMedia--socials"]}
      >
        Youtube
      </a>
      <a
        href="https://twitter.com/jose_tells"
        className={styles["gridContact__socialMedia--socials"]}
      >
        Twitter
      </a>
      <a
        href="https://twitter.com/jose_tells"
        className={styles["gridContact__socialMedia--socials"]}
      >
        Discord
      </a>
    </div>
  );
}
