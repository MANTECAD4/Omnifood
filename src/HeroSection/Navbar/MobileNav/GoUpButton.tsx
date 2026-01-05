import { IonIcon } from "@ionic/react";
import { chevronUp } from "ionicons/icons";
import styles from "./GoUpButton.module.css";
import { FC } from "react";

type Props = {
  isVisible: boolean;
};
export const GoUpButton: FC<Props> = ({ isVisible }) => {
  return (
    <a
      href="#"
      className={`${styles["go-up-btn"]} ${
        isVisible ? styles["show-btn"] : ""
      }`}
      title="Go back"
    >
      <IonIcon icon={chevronUp} className={styles["arrow-up"]} />
    </a>
  );
};
