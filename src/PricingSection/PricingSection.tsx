import { CompleteCard } from "./CompleteCard";
import { StarterCard } from "./StarterCard";
import styles from "./PricingSection.module.css";
import { ExtraFeaturesSection } from "../ExtraFeaturesSection/ExtraFeaturesSection";
export const PricingSection = () => {
  return (
    <section className={`section-content-container`}>
      <p className="subheader">Pricing</p>
      <h2 className="header-2">Eating well without breaking the bank</h2>
      <div className={styles["cards-container"]}>
        <StarterCard />
        <CompleteCard />
      </div>
      <p className={styles["pricing-conditions"]}>
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>
      <ExtraFeaturesSection />
    </section>
  );
};
