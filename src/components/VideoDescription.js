import PropTypes from "prop-types";
import styles from "@styles/VideoDescription.module.sass";

export default function VideoDescription({ title, caption, author, position }) {
  return (
    <>
      <div className={`description ${position}`}>
        <h2 className={styles["description--title"]}>{title}</h2>
        <p className={styles["description--caption"]}>{caption}</p>
        <p className={styles["description--author"]}>{author}</p>
      </div>
      <style jsx>{`
        .description {
          display: flex;
          flex-direction: column;
          align-self: center;
          z-index: 10;
        }

        .left {
          align-items: flex-end;
          text-align: right;
          transform: translate(4rem, -3rem);
        }

        .right {
          align-items: flex-start;
          text-align: left;
          transform: translate(-4rem, -3rem);
        }
      `}</style>
    </>
  );
}

VideoDescription.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.string,
};

VideoDescription.defaultProps = {
  title: "Hi!",
  caption: "Videos will be arriving soon!",
  author: "Jose Marquinez",
  position: "left",
};
