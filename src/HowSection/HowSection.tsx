import styles from "./HowSection.module.css";
export const HowSection = () => {
  return (
    <section id="how-section" className={`section-container`}>
      <p className={"subheader"}>How it works</p>
      <h2 className={"header-2"}>
        Your daily dose of health in 3 simple steps
      </h2>
      <div className={styles["steps-list"]}>
        {steps.map(({ description, label, imgName }, index) => (
          <div className={styles.step} key={label}>
            <div className={styles["step-info"]}>
              <span className={styles["step-number"]}>{`0${index + 1}`}</span>
              <h3 className={`header-3`}>{label}</h3>
              <p>{description}</p>
            </div>
            <div className={styles["step-media"]}>
              <span className={styles["img-decoration"]}>
                <img alt={imgName} src={`img/app/${imgName}.png`} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const steps = [
  {
    label: `Tell us what you like (and what not)`,
    description: `Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!`,
    imgName: "app-screen-1",
  },
  {
    label: `Approve your weekly meal plan`,
    description: `Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.`,
    imgName: "app-screen-2",
  },
  {
    label: `Receive meals at convenient time`,
    description: `Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!`,
    imgName: "app-screen-3",
  },
];
