import {
  infiniteOutline,
  leafOutline,
  nutritionOutline,
  pauseCircleOutline,
} from "ionicons/icons";
import styles from "./ExtraFeaturesSection.module.css";
import { MiniCard } from "./MiniCard/MiniCard";
export const ExtraFeaturesSection = () => {
  return (
    <div className={`grid grid--4-cols`}>
      {extraFeatures.map((feature) => (
        <MiniCard key={feature.label} {...feature} />
      ))}
    </div>
  );
};

const extraFeatures = [
  {
    label: "Never cook again!",
    description: `Our subscriptions cover 365 days per year, even including major holidays.`,
    icon: infiniteOutline,
  },
  {
    label: "Local and organic",
    description: `Our cooks only use local, fresh, and organic products to prepare your meals.`,
    icon: nutritionOutline,
  },
  {
    label: "No waste",
    description: `All our partners only use reusable containers to package all your meals.`,
    icon: leafOutline,
  },
  {
    label: "Pause anytime",
    description: `Going on vacation? Just pause your subscription, and we refund unused days.`,
    icon: pauseCircleOutline,
  },
];
