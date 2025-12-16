import { FC } from "react";
import styles from "./MealCard.module.css";

type Props = {
  dietCategories: string[];
  imgUrl: string;
  mealName: string;
  numCalories: number;
  nutriScore: number;
  rating: { score: number; numReviews: number };
};

const dietColors: Record<string, string> = {
  vegetarian: "#8ce99a",
  vegan: "#ffe066",
  pescatarian: "#ffe3e3",
  "gluten-free": "#ffd8a8",
  "lactose-free": "#fcc2d7",
  keto: "#a5d8ff",
  paleo: "#eebefa",
  "low foodmap": "#d0bfff",
  "kid-friendly": "#99e9f2",
};
export const MealCard: FC<Props> = ({
  mealName,
  dietCategories,
  nutriScore,
  numCalories,
  imgUrl,
  rating: { score, numReviews },
}) => {
  return (
    <div className={styles.card}>
      <img className={styles["card-media"]} src={imgUrl} alt={imgUrl} />
      <div className={styles["card-content"]}>
        <div className={styles["tags-container"]}>
          {dietCategories.map((category) => (
            <span
              className={styles.tag}
              key={category}
              style={{ backgroundColor: dietColors[category.toLowerCase()] }}
            >
              {category}
            </span>
          ))}
        </div>
        <p className={styles["meal-title"]}>{mealName}</p>
        <ul className={styles["meals-attributes"]}>
          <li
            className={`${styles["meal-attribute"]} ${styles["meal-attribute--calories"]}`}
          >
            <span className={styles["meal-number"]}>{numCalories}</span>{" "}
            calories
          </li>
          <li
            className={`${styles["meal-attribute"]} ${styles["meal-attribute--nutriscore"]}`}
          >
            NutriScore ®{" "}
            <span className={styles["meal-number"]}>{nutriScore}</span>
          </li>
          <li
            className={`${styles["meal-attribute"]} ${styles["meal-attribute--rating"]}`}
          >
            <span className={styles["meal-number"]}>{score}</span> rating (
            {numReviews})
          </li>
        </ul>
      </div>
    </div>
  );
};
