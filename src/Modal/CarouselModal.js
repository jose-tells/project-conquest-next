import ReactDOM from "react-dom";
import styles from "@modals/CarouselModal.module.sass";

export default function CarouselModal({ children }) {
  return ReactDOM.createPortal(
    <div className={styles.carousel__modal}>{children}</div>,
    document.getElementById("modal")
  );
}
