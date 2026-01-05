import { IonIcon } from "@ionic/react";
import styles from "./PricingSection.module.css";
import { checkmarkOutline } from "ionicons/icons";
export const CompleteCard = () => {
  return (
    <div className={`${styles.card} ${styles["card--complete"]}`}>
      <p className={`${styles["card-title"]}`}>Complete</p>
      <p className={`${styles.price}`}>
        <span className={`${styles["dollar-sign"]}`}>$ </span>649
      </p>
      <p className={`${styles["per-month-info"]}`}>
        per month. That's just $11 per meal!
      </p>
      <ul className={`${styles["feature-list"]}`}>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={checkmarkOutline} />2
          meals per day
        </li>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={checkmarkOutline} />
          Order 24/7
        </li>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={checkmarkOutline} />
          Delivery is free
        </li>
        <li className={`${styles.feature}`}>
          <IonIcon className={styles["list-icon"]} icon={checkmarkOutline} />
          Get access to latest recipes
        </li>
      </ul>
      <a
        href="#cta-section"
        className={`btn btn--primary ${styles["action-btn"]}`}
      >
        Start eating well
      </a>
    </div>
  );
};
