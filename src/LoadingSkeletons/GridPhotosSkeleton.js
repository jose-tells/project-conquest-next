export const GridPhotosSkeleton = () => (
  <>
    <div className="gridItem__container landscape skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container portrait skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container landscape skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container portrait skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container landscape skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container landscape skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container landscape skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container portrait skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container landscape skeleton__container">
      <div className="skeleton" />
    </div>
    <div className="gridItem__container landscape skeleton__container">
      <div className="skeleton" />
    </div>
    <style jsx>{`
      .landscape {
        grid-column: span 2;
        grid-row: span 1;
      }

      .portrait {
        grid-column: span 2;
        grid-row: span 3;
      }
    `}</style>
  </>
);
