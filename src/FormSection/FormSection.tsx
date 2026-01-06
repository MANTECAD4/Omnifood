import styles from "./FormSection.module.css";
export const FormSection = () => {
  return (
    <section id="cta-section" className={styles["cta-container"]}>
      <div className={`${styles.cta}`}>
        <div className={styles["cta-text-content"]}>
          <h2 className={`header-2 ${styles["cta-header"]}`}>
            Get your first meal for free!
          </h2>
          <p className={`${styles["cta-paragraph"]}`}>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <form className={styles["cta-form"]} name="sign-up">
            <div className={styles["cta-form-field"]}>
              <label className={styles["input-label"]} htmlFor="fullName">
                Full name
              </label>
              <input
                required
                className={styles["cta-form-input"]}
                id="fullName"
                name="fullName"
                placeholder="John Smith"
                type="text"
              />
            </div>
            <div className={styles["cta-form-field"]}>
              <label className={styles["input-label"]} htmlFor="email">
                Email address
              </label>
              <input
                required
                className={styles["cta-form-input"]}
                id="email"
                name="email"
                placeholder="me@example.com"
              />
            </div>
            <div className={styles["cta-form-field"]}>
              <label className={styles["input-label"]} htmlFor="source">
                Where did you hear from us?
              </label>
              <select
                required
                id="source"
                name="source"
                className={styles["cta-form-input"]}
              >
                <option value="">Please choose an option</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook Ad</option>
                <option value="other">Others</option>
              </select>
            </div>
            <button className={styles["cta-submit-btn"]}>Sign up now</button>
          </form>
        </div>
        <div
          className={styles["cta-image"]}
          role="img"
          aria-label="Woman enjoying food"
        ></div>
      </div>
    </section>
  );
};
