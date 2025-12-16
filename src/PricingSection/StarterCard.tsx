import { IonIcon } from "@ionic/react";
import styles from "./PricingSection.module.css";
import { checkmarkOutline, closeOutline } from "ionicons/icons";
export const StarterCard = () => {
  return (
    <div className={styles.card}>
      <p className={`${styles["card-title"]}`}>Starter</p>
      <p className={`${styles.price}`}>
        <span className={`${styles["dollar-sign"]}`}>$ </span>399
      </p>
      <p className={`${styles["per-month-info"]}`}>
        per month. That's just $13 per meal!
      </p>
      <ul className={`${styles["feature-list"]}`}>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={checkmarkOutline} />1
          meal per day
        </li>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={checkmarkOutline} />
          Order from 11 a.m. to 9 p.m.
        </li>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={checkmarkOutline} />
          Delivery is free
        </li>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={closeOutline} />
        </li>
      </ul>
      <button className={`btn btn--primary ${styles["action-btn"]}`}>
        Start eating well
      </button>{" "}
    </div>
  );
};
