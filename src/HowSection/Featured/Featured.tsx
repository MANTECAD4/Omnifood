import styles from "./Featured.module.css";
const companyNames = [
  "business-insider",
  "forbes",
  "techcrunch",
  "the-new-york-times",
  "usa-today",
];
export const Featured = () => {
  return (
    <div className={`${styles["logos-section"]} section-content-container`}>
      <h2 className={`${styles["heading-logos"]}`}>As featured in</h2>
      <div className={styles["logos-container"]}>
        {companyNames.map((company) => (
          <img
            key={company}
            className={styles.logo}
            src={`img/logos/${company}.png`}
            title={`Visit Article ↗`}
          />
        ))}
      </div>
    </div>
  );
};
