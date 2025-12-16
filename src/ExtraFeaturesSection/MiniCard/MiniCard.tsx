import styles from "./MiniCard.module.css";
import { IonIcon } from "@ionic/react";

type Props = {
  label: string;
  description: string;
  icon: any;
};
export const MiniCard = ({ description, icon, label }: Props) => {
  return (
    <div>
      <IonIcon icon={icon} className={styles["feature-icon"]} />
      <p className={styles["feature-title"]}>{label}</p>
      <p className={styles["feature-description"]}>{description}</p>
    </div>
  );
};
