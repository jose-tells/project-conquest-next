import { useRef, useState } from "react";
import PropTypes from "prop-types";

export default function VideoFormat({ children, source, position }) {
  const videoRef = useRef(null);

  const [isPlay, setPlay] = useState(true);

  const toggleVideo = () => {
    if (!isPlay) {
      videoRef.current
        .play()
        .then(() => setPlay(true))
        .catch(console.error);
    }
    if (isPlay) {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <>
      <div className={`video__container ${position}`}>
        <div>
          <video
            onClick={toggleVideo}
            className="video__item"
            ref={videoRef}
            muted
            src={source}
            type="video/mp4"
            playsInline
            autoPlay
          />
        </div>
        {children}
      </div>
      <style jsx>{`
        .video__container.left {
          grid-column: 1/5;
          z-index: 0;
        }

        .video__item {
          width: 100%;
        }

        .video__container.right {
          grid-column: 2/6;
          z-index: 0;
        }
      `}</style>
    </>
  );
}

VideoFormat.propTypes = {
  source: PropTypes.string,
  position: PropTypes.string,
};

VideoFormat.defaultProps = {
  source: "",
  position: "left",
};
