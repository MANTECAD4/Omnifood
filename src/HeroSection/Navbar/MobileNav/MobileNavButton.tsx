import { Dispatch, FC, SetStateAction } from "react";
import styles from "./MobileNavButton.module.css";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
};

export const MobileNavButton: FC<Props> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <button
        className={`${styles["menu-btn"]}`}
        onClick={() => toggleMenu((prevState) => !prevState)}
      >
        <div
          className={`${styles["menu-btn-bar"]} ${styles["menu-bar-1"]} ${
            isMenuOpen
              ? styles["menu-bar-1--open"]
              : styles["menu-bar-1--closed"]
          }`}
        />
        <div
          className={`${styles["menu-btn-bar"]} ${styles["menu-bar-2"]} ${
            isMenuOpen
              ? styles["menu-bar-2--open"]
              : styles["menu-bar-2--closed"]
          }`}
        />
        <div
          className={`${styles["menu-btn-bar"]} ${styles["menu-bar-3"]} ${
            isMenuOpen
              ? styles["menu-bar-3--open"]
              : styles["menu-bar-3--closed"]
          }`}
        />
      </button>
    </>
  );
};
