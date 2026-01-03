import { useEffect, useState } from "react";
import { MobileNavButton } from "./MobileNav/MobileNavButton";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "@uidotdev/usehooks";
const links = [
  { label: "How it works", href: "#how-section" },
  { label: "Meals", href: "#meals-section" },
  { label: "Testimonials", href: "#testimonials-section" },
  { label: "Pricing", href: "#pricing-section" },
];
export const Navbar = () => {
  const matchesMobileSize = useMediaQuery("(max-width: 60em)");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuhidden, setIsMenuHidden] = useState(false);

  useEffect(() => {
    if (matchesMobileSize === false) setIsMenuOpen(false);
  }, [matchesMobileSize, setIsMenuOpen]);

  return (
    <header className={styles["navbar"]}>
      <img className={styles.logo} src="img/omnifood-logo.png" alt="Logo" />
      <MobileNavButton isMenuOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
      <nav
        className={`${styles.navigation} ${
          matchesMobileSize
            ? `${styles["mobile-nav"]} ${
                isMenuOpen ? styles["menu-open"] : styles["menu-closed"]
              }`
            : ""
        }`}
      >
        <ul className={styles["nav-link-list"]}>
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={"#cta-section"}
              className={`${styles["nav-btn"]} btn btn--primary`}
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
