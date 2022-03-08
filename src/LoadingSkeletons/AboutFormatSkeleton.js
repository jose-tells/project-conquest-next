export const AboutFormatSkeleton = () => {
  const normalizerStyle = {
    transform: "translateX(0)",
  };

  return (
    <>
      <div className="gridAbout__item--container">
        <div className="gridAbout__image--container skeleton__container">
          <div className="gridAbout__image skeleton" style={normalizerStyle} />
        </div>
      </div>
      <div className="gridAbout__item--container">
        <div className="gridAbout__image--container skeleton__container">
          <div className="gridAbout__image skeleton" style={normalizerStyle} />
        </div>
      </div>
      <div className="gridAbout__item--container">
        <div className="gridAbout__image--container skeleton__container">
          <div className="gridAbout__image skeleton" style={normalizerStyle} />
        </div>
      </div>
      <style jsx>{`
        .gridAbout__item--container {
          width: 33.333%;
          height: 100vh;
        }
        .gridAbout__image--container {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};
