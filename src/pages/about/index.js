import { useEffect } from "react";
import { useLoader } from "@hooks/useLoader";
import { getMedia } from "@firebase/client";
import PropTypes from "prop-types";
import AboutFormat from "@containers/AboutFormat";
import { AboutFormatSkeleton } from "@skeletons/AboutFormatSkeleton";
import styles from "@styles/GridAbout.module.sass";

export async function getStaticProps() {
  const profiles = await getMedia("Profiles");

  return {
    props: {
      profiles,
    },
  };
}

export default function About({ profiles }) {
  const { loading, complete, error, setComplete } = useLoader();

  useEffect(() => {
    setComplete();
  }, []);

  return (
    <main className={styles.gridAbout}>
      {loading && !error && <AboutFormatSkeleton />}
      {complete &&
        !error &&
        profiles.map((item) => (
          <AboutFormat
            key={item.id}
            media={item.fileUrl}
            caption={item.caption}
            link={item.title.toLowerCase()}
          />
        ))}
      <h1 className={styles.gridAbout__title}>The Crazy Minds</h1>
    </main>
  );
}

About.propTypes = {
  profiles: PropTypes.array,
};

About.defaultProps = {
  profiles: [],
};
