import { IonIcon } from "@ionic/react";
import styles from "./FooterSection.module.css";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";
export const FooterSection = () => {
  return (
    <section>
      <div className={`${styles["footer"]} section-content-container`}>
        <div className={styles["footer-col"]}>
          <img
            src={"img/omnifood-logo.png"}
            className={styles["footer-logo"]}
            alt="Omnifood logo"
          />
          <div className={styles["social-media"]}>
            <IonIcon
              className={styles["social-media-logo"]}
              icon={logoInstagram}
            />
            <IonIcon
              className={styles["social-media-logo"]}
              icon={logoFacebook}
            />
            <IonIcon
              className={styles["social-media-logo"]}
              icon={logoTwitter}
            />
          </div>
          <p className={`${styles.copyright}`}>
            Copyright © 2025 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        {linkCols.map(({ title, links }) => (
          <div className={styles["footer-col"]} key={title}>
            <p className={styles["footer-heading"]}>{title}</p>
            {links.map((link) => (
              <a key={link} href="#" className={styles["footer-text"]}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const linkCols = [
  {
    title: "Contact us",
    links: [
      `623 Harrison St., 2nd Floor, San Francisco, CA 94107`,
      `415-201-6370`,
      `hello@omnifood.com`,
    ],
  },
  {
    title: "Account",
    links: [`Create account`, `Sign in`, `iOS app`, `Android app`],
  },
  {
    title: "Company",
    links: [`About Omnifood`, `For Business`, `Cooking Partners`, `Careers`],
  },
  {
    title: "Resources",
    links: [`Recipe Directory`, `Help center`, `Privacy & Terms`],
  },
];
