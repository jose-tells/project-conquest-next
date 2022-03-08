import Image from "next/image";
import { useLoader } from "@hooks/useLoader";
import { useEffect } from "react";
import { getMedia, loadCover } from "@firebase/client";
import MenuNav from "@containers/MenuNav";
import MenuSlideItem from "@components/MenuSlideItem";
import PresentationCard from "@containers/PresentationCard";
import PresentationCardImage from "@components/PresentationCardImage";
import RedirectLink from "@components/RedirectLink";
import LinkCard from "@components/LinkCard";
import Footer from "@containers/Footer";
import PropTypes from "prop-types";
import { LinkCardSkeleton } from "@skeletons/LinkCardSkeleton";
import { PresentationCardSkeleton } from "@skeletons/PresentationCardSkeleton";
import styles from "@styles/Portfolio.module.sass";

export async function getStaticProps() {
  const presentationPhoto = await loadCover("Photos");
  const photos = await getMedia("Photos", 5);
  const illustrations = await getMedia("Illustrations", 5);
  const videos = await getMedia("Videos", 5);

  return {
    props: {
      presentationPhoto,
      photos,
      illustrations,
      videos,
    },
  };
}

export default function Portfolio({
  photos,
  illustrations,
  presentationPhoto,
  videos,
}) {
  const { loading, complete, error, setComplete } = useLoader();

  useEffect(() => {
    const complete = setTimeout(() => {
      setComplete();
    }, 100);

    return () => clearTimeout(complete);
  }, []);

  return (
    <>
      <MenuNav isDark={false}>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <PresentationCard>
        {loading && !error && <PresentationCardSkeleton />}
        {complete && !error && (
          <PresentationCardImage
            dimensions={presentationPhoto[0].dimensions}
            media={presentationPhoto[0].fileUrl}
            caption={presentationPhoto[0].caption}
          />
        )}
      </PresentationCard>

      <div className={styles.titlePortfolio__container}>
        <div className={styles.titlePortfolio__strokes} />
        <h1 className={styles.titlePortfolio__text}>Portfolio</h1>
        <div className={styles.titlePortfolio__strokes} />
      </div>
      <section className={styles.linkCards__wrapper}>
        {loading && !error && (
          <>
            <LinkCardSkeleton />
            <LinkCardSkeleton />
            <LinkCardSkeleton />
          </>
        )}
        {!error && complete && (
          <>
            <LinkCard
              cardTitle="photography"
              media={photos}
              renderImagesReel={(media) => (
                <div
                  className={styles["linkCard__images--container"]}
                  key={media.id}
                >
                  <Image
                    layout="fill"
                    className={styles.linkCard__image}
                    src={media.fileUrl}
                    alt={media.caption}
                    priority
                  />
                </div>
              )}
            >
              <RedirectLink link="photography" linkText="See More" />
            </LinkCard>
            <LinkCard
              cardTitle="illustration"
              media={illustrations}
              renderImagesReel={(media) => (
                <div
                  className={styles["linkCard__images--container"]}
                  key={media.id}
                >
                  <Image
                    layout="fill"
                    key={media.id}
                    className={styles.linkCard__image}
                    src={media.fileUrl}
                    alt={media.caption}
                    priority
                  />
                </div>
              )}
            >
              <RedirectLink link="illustration" linkText="See More" />
            </LinkCard>
            <LinkCard
              cardTitle="filmmaking"
              media={videos}
              renderImagesReel={(media) => (
                <div
                  className={styles["linkCard__images--container"]}
                  key={media.id}
                >
                  <Image
                    layout="fill"
                    key={media.id}
                    className={styles.linkCard__image}
                    src={media.videoThumbnail}
                    alt={media.caption}
                    priority
                  />
                </div>
              )}
            >
              <RedirectLink link="filmmaking" linkText="See More" />
            </LinkCard>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

const items = ["home", "about", "contact"];
Portfolio.propTypes = {
  photos: PropTypes.array,
  illustrations: PropTypes.array,
  presentationPhoto: PropTypes.array,
  videos: PropTypes.array,
};

Portfolio.defaultProps = {
  photos: [],
  illustrations: [],
  videos: [],
  presentationPhoto: [],
};
