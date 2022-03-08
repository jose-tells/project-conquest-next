import { useEffect, useRef, useState } from "react";
import styles from "@styles/SliderTitle.module.sass";

export default function SliderTitle() {
  const [id, setId] = useState(0);
  const timeOutRef = useRef(null);

  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  useEffect(() => {
    resetTimeOut();

    timeOutRef.current = setTimeout(() => {
      setId((prevId) => (prevId === phrases.length - 1 ? 0 : prevId + 1));
    }, 3500);

    return () => {
      resetTimeOut();
    };
  }, [id]);

  return (
    <div className={styles.slider}>
      <h1 className={styles.slider__text}>Want to make real your</h1>
      <div className={styles.slider__container}>
        {phrases.map((word) => (
          <h1
            key={word}
            className={styles.slider__animation}
            style={{ transform: `translate(${-id * 100}%, 0)` }}
          >
            {word}
          </h1>
        ))}
      </div>
      <h1 className={styles.slider__text}>idea?</h1>
    </div>
  );
}

const phrases = ["Crazy", "Gorgeous", "Outstanding", "Wonder"];
