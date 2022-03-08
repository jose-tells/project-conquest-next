import styles from "@styles/GridVideo.module.sass";

export default function GridVideos({ children }) {
  return <section className={styles.gridVideo}>{children}</section>;
}
