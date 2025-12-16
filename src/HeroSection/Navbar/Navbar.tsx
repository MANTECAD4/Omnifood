import styles from "./Navbar.module.css";
const links = [
  { label: "How it works", href: "#" },
  { label: "Meals", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Pricing", href: "#" },
];
export const Navbar = () => {
  return (
    <header className={styles["hero-header"]}>
      <img className={styles.logo} src="img/omnifood-logo.png" alt="Logo" />
      <nav className={styles.navbar}>
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
