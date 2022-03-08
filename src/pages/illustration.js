import { useLoader } from "@hooks/useLoader";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getMedia } from "@firebase/client";
import PropTypes from "prop-types";
import MenuNav from "@containers/MenuNav";
import MenuSlideItem from "@components/MenuSlideItem";
import GridPhotos from "@components/GridPhotos";
import GridFormat from "@components/GridFormat";
import CarouselModal from "@modals/CarouselModal";
import HeaderCarousel from "@components/HeaderCarousel";
import CarouselShowcase from "@containers/CarouselShowcase";
import CarouselShowcaseItem from "@components/CarouselShowcaseItem";
import BodyCarousel from "@components/BodyCarousel";
import { GridPhotosSkeleton } from "@skeletons/GridPhotosSkeleton";
import SectionsWithItems from "@hocs/SectionsWithItems";
import Footer from "@containers/Footer";
import styles from "@styles/BodyCarousel.module.sass";

export async function getStaticProps() {
  const illustrationsAPI = await getMedia("Illustrations");

  const illustrations = illustrationsAPI.map((illustration) => ({
    media: illustration.fileUrl,
    orientation:
      illustration.dimensions.width >= illustration.dimensions.height
        ? "landscape"
        : "portrait",
    ...illustration,
  }));

  return {
    props: {
      illustrations,
    },
  };
}

export default function Illustration({ illustrations }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  const { loading, complete, error, setComplete } = useLoader();

  const { pathname } = useRouter();

  const carouselStyles = () => {
    const position = 7.8 / 2 + 7.8 * mediaIndex;
    return {
      transform: `translateX(calc(50% - ${position}rem))`,
    };
  };

  const handleRight = () => {
    if (mediaIndex !== illustrations.length - 1)
      setMediaIndex((prev) => prev + 1);
  };

  const handleLeft = () => {
    if (mediaIndex > 0) setMediaIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const complete = setTimeout(() => {
      setComplete();
    }, 100);

    return () => clearTimeout(complete);
  });

  return (
    <>
      <MenuNav isDark={false}>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <SectionsWithItems sectionName="illustration" location={pathname} />
      <GridPhotos>
        {loading && !error && <GridPhotosSkeleton />}
        {complete &&
          !error &&
          illustrations.map((item, index) => (
            <GridFormat
              key={item.id}
              media={item.media}
              orientation={item.orientation}
              dimensions={item.dimensions}
              setModalOpen={setModalOpen}
              setMediaIndex={() => setMediaIndex(index)}
            />
          ))}
      </GridPhotos>
      {modalOpen && (
        <CarouselModal>
          <HeaderCarousel
            mediaLength={illustrations.length}
            itemId={mediaIndex + 1}
            setModalOpen={setModalOpen}
          />
          <BodyCarousel
            handleRight={handleRight}
            handleLeft={handleLeft}
            mediaIndex={mediaIndex}
          >
            {illustrations.map((item) => (
              <div key={item.id} className={styles["slider__reel--carousel"]}>
                <Image
                  className={styles["slider__reel--photo"]}
                  width={item?.dimensions.width}
                  height={item?.dimensions.height}
                  src={item?.media}
                  alt={item?.caption}
                  priority
                />
              </div>
            ))}
          </BodyCarousel>
          <CarouselShowcase carouselStyles={carouselStyles}>
            {illustrations.map((item, index) => (
              <CarouselShowcaseItem
                key={item.id}
                index={index}
                mediaIndex={mediaIndex}
                setMediaIndex={setMediaIndex}
                media={item.media}
              />
            ))}
          </CarouselShowcase>
        </CarouselModal>
      )}
      <Footer />
    </>
  );
}

const items = ["home", "portfolio", "about", "contact"];

Illustration.propTypes = {
  illustrations: PropTypes.array,
};

Illustration.defaultProps = {
  illustrations: [],
};
