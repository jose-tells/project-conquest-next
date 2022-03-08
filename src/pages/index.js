import MenuNav from "@containers/MenuNav";
import Title from "@containers/Title";
import MenuSlideItem from "@components/MenuSlideItem";
import styles from "@styles/Home.module.sass";
import PropTypes from "prop-types";

export async function getStaticProps() {
  const result = await fetch(
    `${process.env.API_URL}/videos/videos/${process.env.VIDEO_COVER_ID}`,
    {
      headers: { Authorization: process.env.API_KEY },
    }
  );
  const data = result.json();
  const { id, image, video_files } = await data;

  return {
    props: {
      videoCover: {
        id,
        image,
        media: video_files.find((file) => file.width >= 1280),
      },
    },
  };
}

export default function Home({ videoCover }) {
  const hasVideo = Object.values(videoCover).length > 0;

  return (
    <>
      {hasVideo && (
        <div className={styles.reel__container}>
          <video
            autoPlay
            className={styles.reel}
            loop
            muted
            type={videoCover?.media.file_type}
            playsInline
            src={videoCover.media.link}
          />
        </div>
      )}
      <MenuNav isDark>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <main className={styles.wrap_container}>
        <Title />
      </main>
    </>
  );
}

const items = ["portfolio", "about", "contact"];

Home.propTypes = {
  videoCover: PropTypes.object,
};

Home.defaultProps = {
  videoCover: {},
};
