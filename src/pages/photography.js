import Image from "next/image";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MenuNav from "@containers/MenuNav";
import MenuSlideItem from "@components/MenuSlideItem";
import GridFormat from "@components/GridFormat";
import GridPhotos from "@components/GridPhotos";
import CarouselShowcase from "@containers/CarouselShowcase";
import CarouselShowcaseItem from "@components/CarouselShowcaseItem";
import HeaderCarousel from "@components/HeaderCarousel";
import BodyCarousel from "@components/BodyCarousel";
import CarouselModal from "@modals/CarouselModal";
import SectionsWithItems from "@hocs/SectionsWithItems";
import Footer from "@containers/Footer";
import { GridPhotosSkeleton } from "@skeletons/GridPhotosSkeleton";
import { useLoader } from "@hooks/useLoader";
import { useRouter } from "next/router";
import { getMedia } from "@firebase/client";
import styles from "@styles/BodyCarousel.module.sass";

export async function getStaticProps() {
  const photosAPI = await getMedia("Photos");

  const photos = photosAPI.map((photo) => ({
    media: photo.fileUrl,
    orientation:
      photo.dimensions.width >= photo.dimensions.height
        ? "landscape"
        : "portrait",
    ...photo,
  }));

  return {
    props: {
      photos,
    },
  };
}

export default function Photography({ photos }) {
  const { pathname } = useRouter();

  const { loading, complete, error, setComplete } = useLoader();

  const [modalOpen, setModalOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  const carouselStyles = () => {
    const position = 7.8 / 2 + 7.8 * mediaIndex;
    return {
      transform: `translateX(calc(50% - ${position}rem))`,
    };
  };

  const handleRight = () => {
    if (mediaIndex !== photos.length - 1) setMediaIndex((prev) => prev + 1);
  };

  const handleLeft = () => {
    if (mediaIndex > 0) setMediaIndex((prev) => prev - 1);
  };

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
      <SectionsWithItems sectionName="photography" location={pathname} />
      <GridPhotos>
        {loading && !error && <GridPhotosSkeleton />}
        {complete &&
          !error &&
          photos.map((item, index) => (
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
            mediaLength={photos.length}
            itemId={mediaIndex + 1}
            setModalOpen={setModalOpen}
          />
          <BodyCarousel
            handleRight={handleRight}
            handleLeft={handleLeft}
            mediaIndex={mediaIndex}
          >
            {photos.map((item) => (
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
            {photos.map((item, index) => (
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

Photography.propTypes = {
  photos: PropTypes.array,
};

Photography.defaultProps = {
  photos: [],
};
