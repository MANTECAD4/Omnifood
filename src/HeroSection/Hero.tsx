import styles from "./Hero.module.css";
import { arrowDownOutline, checkmarkOutline, chevronUp } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Navbar } from "./Navbar/Navbar";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { GoUpButton } from "./Navbar/MobileNav/GoUpButton";

export const Hero = () => {
  const [ref, entry] = useIntersectionObserver({
    root: null,
    threshold: 0,
    rootMargin: "0px",
  });
  const isHeroNotIntersecting: boolean = !entry?.isIntersecting;
  return (
    <>
      <Navbar enableSticky={isHeroNotIntersecting} />
      <section
        className={`${styles["hero-section"]} ${
          isHeroNotIntersecting ? styles["compesate-space"] : ""
        }`}
        ref={ref}
      >
        <div className={`${styles["content"]} `}>
          <div className={styles["text-content"]}>
            <h1 className={styles["heading"]}>
              A healthy meal delivered to your door, every single day
            </h1>
            <p className={styles["description"]}>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <div>
              <a href="#cta-section" className={"btn btn--primary"}>
                Start eating well
              </a>
              <a
                href="#how-section"
                className={`${styles["hero-btn-secondary"]} btn btn--secondary`}
              >
                Learn more
                <IonIcon
                  icon={arrowDownOutline}
                  className={styles["arrow-down"]}
                />
              </a>
            </div>

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
                <span className={styles["meals-delivered-count"]}>
                  250,000+
                </span>{" "}
                meals delivered last year!
              </p>
            </div>
          </div>
          <div className={styles["hero-images-content"]}>
            <img
              className={styles["hero-img"]}
              src="img/hero.webp"
              alt="Gallery"
            />
          </div>
        </div>
      </section>
      <GoUpButton isVisible={isHeroNotIntersecting} />
    </>
  );
};
