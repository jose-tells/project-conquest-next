export const PresentationCardSkeleton = () => (
  <>
    <div className="PresentationCard__image--container skeleton__container">
      <div className="PresentationCard__image skeleton" />
    </div>
    <style jsx>{`
      .PresentationCard__image--container {
        width: 35%;
        height: 35rem;
      }
    `}</style>
  </>
);
