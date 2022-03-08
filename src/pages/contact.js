import { useReducer } from "react";
import { fontVars, styleVars } from "@utils/vars";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@containers/ContactForm";
import SliderTitle from "@containers/SliderTitle";
import ContactSocials from "@containers/ContactSocials";
import ContactBackground from "../../public/Solitude_shared.jpg";
import { ArrowRight } from "@atoms/ArrowRight";
import { Home } from "@atoms/Home";
import Modal from "@modals/ContactModal";
import styles from "@styles/Contact.module.sass";

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const successfulQuery = "beautiful";

  const isSuccessfullySubmitted = router.query?.successful === successfulQuery;

  const handleOpen = () => {
    dispatch({ type: onOpen });

    setTimeout(() => {
      dispatch({ type: onOpen, payload: true });
    }, 100);
  };

  const handleClose = (payload) => {
    dispatch({ type: onClose, payload: true });

    setTimeout(() => {
      dispatch({ type: onClose, payload });
    }, 300);
  };

  const redirect = () => {
    router.push("/");
  };

  return (
    <>
      <section className={styles.gridContact}>
        <div className={styles["gridContact__background--container"]}>
          <div className="gridContact__background--photoContainer">
            <Image
              className={styles.gridContact__background}
              src={ContactBackground}
              layout="fill"
              alt="Solitude"
            />
          </div>
        </div>
        <Link href="/">
          <a className={styles["grid__home--container"]}>
            <Home className={styles["grid__home--icon"]} />
          </a>
        </Link>
        <SliderTitle />
        <ContactSocials />
        <div className={styles["gridContact__button--container"]}>
          <button
            type="button"
            className={styles.gridContact__button}
            onClick={!isSuccessfullySubmitted ? handleOpen : redirect}
            disabled={state.open}
          >
            <span
              className={`gridContact__button--text ${router.query.successful}`}
            >
              {isSuccessfullySubmitted ? (
                <>
                  Successfully Submitted!{" "}
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: "1.2rem",
                      textAlign: "left",
                    }}
                  >
                    thanks for your message!
                  </p>
                </>
              ) : (
                "Keep in touch!"
              )}
            </span>
            {!isSuccessfullySubmitted && (
              <ArrowRight className={styles["gridContact__button--icon"]} />
            )}
          </button>
          <div
            className={`gridContact__button--animation ${
              state.open && "isOpen"
            }`}
          />
        </div>
      </section>
      {state.show && (
        <Modal modalStyles={state.open}>
          <ContactForm
            successfulQuery={successfulQuery}
            handleClose={handleClose}
            isClose={state.close}
          />
        </Modal>
      )}
      <style jsx>{`
        .gridContact__button--text {
          font-family: ${fontVars.mainFont};
          font-weight: 400;
          font-size: 1.6rem;
          color: ${styleVars.color2};
        }
        .gridContact__button--text.beautiful {
          font-weight: 500;
          color: ${styleVars.color2};
        }
        .gridContact__button--animation {
          width: 0%;
          height: 0.5px;
          background-color: ${styleVars.color2};
          transition: 0.5s ease all;
        }

        .isOpen {
          width: 100%;
        }
      `}</style>
    </>
  );
}

const onOpen = "ON_OPEN";
const onClose = "ON_CLOSE";

const reducer = (state, action) => {
  switch (action.type) {
    case onOpen:
      return {
        open: !!action.payload,
        close: false,
        show: true,
      };
    case onClose:
      return {
        open: false,
        close: true,
        show: !!action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const initialState = {
  open: false,
  close: true,
  show: false,
};
