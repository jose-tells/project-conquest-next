import { useEffect, useState } from "react";
import ButtonContact from "@components/ButtonContact";
import SocialMedia from "@components/SocialMedia";
import styles from "@styles/Title.module.sass";

export default function Title() {
  const [id, setId] = useState(0);

  useEffect(() => {
    const titleAnimation = setInterval(
      () => setId((prevId) => (prevId === phrases.length - 1 ? 0 : prevId + 1)),
      3500
    );
    return () => clearTimeout(titleAnimation);
  }, [id]);

  return (
    <div className={styles.title__container}>
      <h1 className={styles.title__text}>We are</h1>
      <div className={styles["title__slideshow--container"]}>
        {phrases.map((phrase) => (
          <h2
            key={phrase}
            className={styles.text__slideshow}
            style={{ transform: `translate3d(${-id * 100.5}%,0,0)` }}
          >
            {phrase}
          </h2>
        ))}
      </div>
      <ButtonContact />
      <SocialMedia
        instagram="https://www.instagram.com/projectconquestt/"
        youtube="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag"
        discord="https://discord.gg/89dtH59Wrv"
      />
    </div>
  );
}

const phrases = ["Project Conquest", "Creativity", "Madness", "Art"];
