import { useRouter } from "next/router";
import { getMedia } from "@firebase/client";
import PropTypes from "prop-types";
import MenuNav from "@containers/MenuNav";
import MenuSlideItem from "@components/MenuSlideItem";
import GridVideo from "@containers/GridVideo";
import VideoFormat from "@components/VideoFormat";
import VideoDescription from "@components/VideoDescription";
import SectionsWithItems from "@hocs/SectionsWithItems";
import Footer from "@containers/Footer";
import styles from "@styles/Filmmaking.module.sass";

export async function getStaticProps() {
  const videosAPI = await getMedia("Videos");

  const videos = videosAPI.map((video) => ({
    media: video.fileUrl,
    ...video,
  }));

  return {
    props: {
      videos,
    },
  };
}

export default function Filmmaking({ videos }) {
  const { pathname } = useRouter();
  const hasVideos = Object.values(videos).length > 0;

  const isOdd = (number) => {
    if (number % 2 === 0) {
      return "right";
    }
    return "left";
  };

  return (
    <main className={styles["Filmmaking-body"]}>
      <MenuNav isDark>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <SectionsWithItems isDark sectionName="filmmaking" location={pathname} />
      {hasVideos && (
        <GridVideo>
          {videos.map((item, index) => (
            <VideoFormat
              key={item.id}
              source={item.fileUrl}
              position={isOdd(index + 1)}
            >
              <VideoDescription
                title={item.title}
                caption={item.caption}
                author={item.author}
                position={isOdd(index + 1)}
              />
            </VideoFormat>
          ))}
        </GridVideo>
      )}
      <Footer isDark />
    </main>
  );
}

const items = ["home", "portfolio", "about", "contact"];

Filmmaking.propTypes = {
  videos: PropTypes.array,
};

Filmmaking.defaultProps = {
  videos: [],
};
