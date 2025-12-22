import styles from "./Hero.module.css";
import { arrowDownOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

export const Hero = () => {
  return (
    <section className={styles["hero-section"]}>
      <div className={`${styles["content"]} `}>
        <div className={styles["text-content"]}>
          <h1 className={styles["header"]}>
            A healthy meal delivered to your door, every single day
          </h1>
          <p className={styles["description"]}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <button className={"btn btn--primary"}>Start eating well</button>
          <button
            className={`${styles["hero-btn-secondary"]} btn btn--secondary`}
          >
            Learn more
            <IonIcon icon={arrowDownOutline} className={styles["arrow-down"]} />
          </button>

          <div className={styles["meals-delivered"]}>
            <div className={styles["avatar-group"]}>
              <img
                className={styles.avatar}
                alt="Customer Image"
                src="img/customers/customer-1.jpg"
              />
              <img
                className={styles.avatar}
                alt="Customer Image"
                src="img/customers/customer-2.jpg"
              />
              <img
                className={styles.avatar}
                alt="Customer Image"
                src="img/customers/customer-3.jpg"
              />
              <img
                className={styles.avatar}
                alt="Customer Image"
                src="img/customers/customer-4.jpg"
              />
              <img
                className={styles.avatar}
                alt="Customer Image"
                src="img/customers/customer-5.jpg"
              />
              <img
                className={styles.avatar}
                alt="Customer Image"
                src="img/customers/customer-6.jpg"
              />
            </div>
            <p className={styles["meals-delivered-label"]}>
              <span className={styles["meals-delivered-count"]}>250,000+</span>{" "}
              meals delivered last year!
            </p>
          </div>
        </div>
        <div className={styles["hero-images-content"]}>
          <img
            className={styles["hero-img"]}
            src="img/hero.png"
            alt="Gallery"
          />
        </div>
      </div>
    </section>
  );
};
