// import {
//   faDiscord,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileMenuNav from "@components/ProfileMenuNav";
import ProfileMenuNavItem from "@components/ProfileMenuNavItem";
import { styleVars } from "@utils/vars";

export const ProfileSkeleton = () => {
  const descriptionStyles = {
    width: "23rem",
    height: "6rem",
  };

  const titleStyles = {
    width: "17rem",
    height: "4rem",
  };

  return (
    <>
      <ProfileMenuNav>
        {menuNavItems.map((item) => (
          <ProfileMenuNavItem key={item} itemText={item} />
        ))}
      </ProfileMenuNav>
      <div className="profile__photo" />
      <section className="profileDescription__description--container">
        <div className="profileDescription__title--container">
          <div className="skeleton" style={titleStyles} />
          <div className="profileDescription__title--underline skeleton" />
        </div>
        <p className="skeleton" style={descriptionStyles} />
        <section className="socialMedia__container">
          <div className="socialMedia__item disabled">
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </div>
          <div className="socialMedia__item disabled">
            {/* <FontAwesomeIcon icon={faYoutube} /> */}
          </div>
          <div className="socialMedia__item disabled">
            {/* <FontAwesomeIcon icon={faDiscord} /> */}
          </div>
          <div className="socialMedia__item disabled">
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
          </div>
        </section>
      </section>
      <div className="profile__nextBtn skeleton" />
      <style jsx>{`
        .profileDescription__description--container {
          margin-right: 2rem;
          display: flex;
          flex-direction: column;
          align-self: flex-end;
          align-items: flex-end;
          grid-column: 2/6;
          grid-row: 6/9;
          gap: 1rem;
        }

        .profileDescription__title--underline {
          width: 100%;
          height: 0.05rem;
          background-color: ${styleVars.color8};
          margin-top: 0.5rem;
        }

        .profile__nextBtn {
          justify-self: flex-end;
          width: 5.8rem;
          height: 22.2rem;
          grid-column: 5/6;
          grid-row: 1/4;
        }
      `}</style>
    </>
  );
};

const menuNavItems = [
  "home",
  "portfolio",
  "photography",
  "filmmaking",
  "illustration",
  "contact",
];
