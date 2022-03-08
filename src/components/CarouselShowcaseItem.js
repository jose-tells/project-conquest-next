import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@styles/CarouselShowcaseItem.module.sass";

export default function CarouselShowcaseItem({
  mediaIndex,
  index,
  setMediaIndex,
  media,
}) {
  return (
    <>
      <div
        className="sliderReel__showcaseImage--container"
        onClick={() => setMediaIndex(index)}
      >
        <Image
          layout="fill"
          src={media}
          alt=""
          className={styles.sliderReel__showcaseImage}
        />
      </div>
      <style jsx>{`
        .sliderReel__showcaseImage--container {
          position: relative;
          min-width: ${index === mediaIndex ? "10rem" : "7.8rem"};
          height: ${index === mediaIndex ? "100%" : "5.5rem"};
          transition: 0.2s ease all;
          filter: ${index === mediaIndex ? "grayscale(0)" : "grayscale(1)"};
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

CarouselShowcaseItem.propTypes = {
  mediaIndex: PropTypes.number,
  index: PropTypes.number,
  setMediaIndex: PropTypes.func,
  media: PropTypes.string,
};

CarouselShowcaseItem.defaultProps = {
  mediaIndex: 0,
  index: 0,
  setMediaIndex: () => {},
  media: "",
};
