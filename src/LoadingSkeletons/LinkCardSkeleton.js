// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LinkCardSkeleton = () => (
  <>
    <div className="linkCard__container">
      <div className="linkCard__section--container skeleton__container">
        <div className="linkCard__images--container skeleton" />
      </div>
      <div className="RedirectLink__container">
        <h1 className="RedirectLink__text disabled">
          See More
          {/* <FontAwesomeIcon
          icon={faArrowRight}
          className="RedirectLink__icon disabled"
        /> */}
        </h1>
        <div className="RedirectLink__underline disabled" />
      </div>
    </div>
    <style jsx>{`
      .linkCard__container {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
      }
      .linkCard__section--container {
        width: 100%;
        height: 25rem;
      }

      .RedirectLink__text {
        font-weight: 400;
      }
      .RedirectLink__underline {
        width: 100%;
        height: 0.5rem;
      }
    `}</style>
  </>
);
