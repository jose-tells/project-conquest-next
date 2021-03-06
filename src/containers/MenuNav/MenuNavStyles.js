import css from "styled-jsx/css";
import { styleVars } from "@utils/vars";

export default css`
  .menuNav__logo {
    padding: 2rem;
    font-size: 1.4rem;
    color: ${styleVars.color4};
    text-align: center;
    text-decoration: none;
  }

  .menuNav__logo.isDark {
    color: ${styleVars.color8};
  }

  .MenuSlide__container {
    position: fixed;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    box-shadow: 1px 0 4px ${styleVars.color7};
    transform: translateY(-100%);
    transition: 0.5s ease;
    z-index: 20;
  }

  .MenuSlide__container.isOpen {
    transform: translateY(0);
  }

  .MenuSlide__container.isDark {
    background: ${styleVars.color4};
    box-shadow: none;
  }

  .menuNav__button {
    width: fit-content;
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 0.4rem;
    margin: 1rem 2rem 0 0;
    z-index: 30;
    cursor: pointer;
  }

  .menuNav__button > div {
    height: 0.3rem;
    background: ${styleVars.color2};
    border-radius: 40px;
    transition: 0.5s ease all;
  }

  .menuNav__button div:nth-child(1) {
    width: 3rem;
  }

  .menuNav__button div:nth-child(2) {
    width: 2rem;
  }

  .menuNav__button div:nth-child(3) {
    width: 3rem;
  }

  .menuNav__button div:nth-child(4) {
    width: 2rem;
  }

  .menuNav__button.isOpen div:nth-child(1) {
    width: 3rem;
    transform-origin: top right;
    transform: rotate(-45deg);
  }

  .menuNav__button.isOpen div:nth-child(4) {
    width: 3rem;
    transform-origin: bottom right;
    transform: rotate(45deg);
  }

  .menuNav__button.isOpen > div {
    width: 0;
  }
`;
