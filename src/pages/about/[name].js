import { useEffect } from "react";
import Image from "next/image";
import { useLoader } from "@hooks/useLoader";
import { getMedia, getSpecificMedia } from "@firebase/client";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import ProfileDescription from "@containers/ProfileDescription";
import SocialMedia from "@components/SocialMedia";
import ProfileMenuNav from "@components/ProfileMenuNav";
import ProfileMenuNavItem from "@components/ProfileMenuNavItem";
import { ProfileSkeleton } from "@skeletons/ProfileSkeleton";
import styles from "@styles/Profile.module.sass";

export async function getStaticPaths() {
  const profiles = await getMedia("Profiles");

  const paths = profiles.map(({ title }) => ({
    params: {
      name: title,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const profile = await getSpecificMedia("Profiles", params?.name);

  return {
    props: {
      profile,
    },
  };
}

export default function Profile({ profile }) {
  const router = useRouter();

  const { loading, complete, error, setComplete } = useLoader();

  const handleNextProfile = () => {
    router.push(`/about/${profile.next}`);
  };

  useEffect(() => {
    setComplete();
  }, []);

  return (
    <div className={styles.profile__container}>
      {loading && !error && <ProfileSkeleton />}
      {complete && !error && (
        <>
          <ProfileMenuNav>
            {menuNavItems.map((item) => (
              <ProfileMenuNavItem key={item} itemText={item} />
            ))}
          </ProfileMenuNav>
          <section className={styles["profile__photo--wrapper"]}>
            <div className={styles["profile__photo--container"]}>
              <Image
                className={styles.profile__photo}
                src={profile.fileUrl}
                alt={profile.title}
                layout="fill"
                priority
              />
            </div>
          </section>
          <ProfileDescription
            name={profile.title}
            description={profile.description}
          >
            <SocialMedia
              instagram={profile.socials?.instagram}
              youtube={profile.socials?.youtube}
              twitter={profile.socials?.twitter}
            />
          </ProfileDescription>
          <button
            type="button"
            className={styles.profile__nextBtn}
            onClick={handleNextProfile}
          >
            <h1 className={styles["profile__nextBtn--text"]}>{profile.next}</h1>
          </button>
        </>
      )}
    </div>
  );
}

const menuNavItems = [
  "home",
  "portfolio",
  "photography",
  "filmmaking",
  "illustration",
  "contact",
];

Profile.propTypes = {
  profile: PropTypes.object,
};

Profile.defaultProps = {
  profile: {},
};
