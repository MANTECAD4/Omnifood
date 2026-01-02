import { IonIcon } from "@ionic/react";
import styles from "./FooterSection.module.css";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";
import { CSSProperties } from "react";
export const FooterSection = () => {
  return (
    <footer>
      <div className={`${styles["footer"]} section-container`}>
        <div className={styles["footer-col"]} style={{ gridArea: "logo" }}>
          <img
            src={"img/omnifood-logo.png"}
            className={styles["footer-logo"]}
            alt="Omnifood logo"
          />
          <div className={styles["social-media"]}>
            <a href="#" className={styles["social-media-link"]}>
              <IonIcon
                className={styles["social-media-logo"]}
                icon={logoInstagram}
              />
            </a>
            <a href="#" className={styles["social-media-link"]}>
              <IonIcon
                className={styles["social-media-logo"]}
                icon={logoFacebook}
              />
            </a>
            <a href="#" className={styles["social-media-link"]}>
              <IonIcon
                className={styles["social-media-logo"]}
                icon={logoTwitter}
              />
            </a>
          </div>
          <p className={`${styles.copyright}`}>
            Copyright © 2025 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        {linkCols.map(({ title, links, gridArea }) => (
          <div className={styles["footer-col"]} style={gridArea} key={title}>
            <p className={styles["footer-heading"]}>{title}</p>
            <ul className={styles["link-list"]}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles["footer-link"]}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

type linkColumn = {
  gridArea: CSSProperties;
  title: string;
  links: string[];
};
const linkCols: linkColumn[] = [
  {
    gridArea: { gridArea: "contact" },
    title: "Contact us",
    links: [
      `623 Harrison St., 2nd Floor, San Francisco, CA 94107`,
      `415-201-6370`,
      `hello@omnifood.com`,
    ],
  },
  {
    gridArea: { gridArea: "account" },
    title: "Account",
    links: [`Create account`, `Sign in`, `iOS app`, `Android app`],
  },
  {
    gridArea: { gridArea: "company" },
    title: "Company",
    links: [`About Omnifood`, `For Business`, `Cooking Partners`, `Careers`],
  },
  {
    gridArea: { gridArea: "resources" },
    title: "Resources",
    links: [`Recipe Directory`, `Help center`, `Privacy & Terms`],
  },
];
