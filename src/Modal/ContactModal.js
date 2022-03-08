import { createPortal } from "react-dom";

export default function Modal({ children, modalStyles }) {
  return createPortal(
    <>
      <div className={`Modal ${modalStyles ? "isOpen" : ""}`}>{children}</div>
      <style jsx>{`
        .Modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          bottom: -50%;
          width: 100vw;
          min-height: 30rem;
          background: white;
          box-shadow: 0.5px 0 5px rgba(179, 172, 168, 0.5);
          transition: 0.5s all ease;
          -webkit-transition: 0.5s all ease;
        }
        .Modal.isOpen {
          bottom: 0;
        }
      `}</style>
    </>,
    document.getElementById("modal")
  );
}
