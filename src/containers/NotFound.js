import Link from "next/link";
import Image from "next/image";
import LostPerson from "../../public/lostPerson.jpg";
import styles from "@styles/NotFound.module.sass";

export default function NotFound() {
  return (
    <main className={styles.NotFound__container}>
      <header className={styles["NotFound__message--header"]}>
        <div className={styles["NotFound__error--container"]}>
          <h1 className={styles.NotFound__error}>404</h1>
          <div className={styles["NotFound__error--underline"]} />
        </div>
        <p className={styles.NotFound__message}>
          Oh no! It seems you are a bit lost pal :(
        </p>
        <button
          type="button"
          className={styles["NotFound__redirectButton--container"]}
        >
          <Link href="/">
            <a className={styles.NotFound__redirectButton}>Let's Go Home!</a>
          </Link>
        </button>
      </header>
      <div className={styles["NotFound__image--container"]}>
        <Image
          className={styles.NotFound__image}
          src={LostPerson}
          alt="Lost"
          layout="fill"
        />
        <p className={styles["NotFound__image--credits"]}>
          Photo by{" "}
          <a href="https://unsplash.com/@averieclaire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText/">
            averie woodard
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/lost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </main>
  );
}
