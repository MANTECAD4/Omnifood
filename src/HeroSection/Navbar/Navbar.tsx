import { useState } from "react";
import styles from "./Navbar.module.css";
const links = [
  { label: "How it works", href: "#" },
  { label: "Meals", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Pricing", href: "#" },
];
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles["navbar"]}>
      <img className={styles.logo} src="img/omnifood-logo.png" alt="Logo" />
      <button
        className={`${styles["menu-btn"]}`}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
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
      <nav className={styles.navigation}>
        <ul className={styles["nav-link-list"]}>
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <button className={`${styles["nav-btn"]} btn btn--primary`}>
              Try for free
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
