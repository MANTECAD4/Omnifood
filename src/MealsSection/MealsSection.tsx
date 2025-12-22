import { MealCard } from "./MealCard/MealCard";
import styles from "./MealsSection.module.css";
export const MealsSection = () => {
  return (
    <div className={`section-container ${styles["meals-section"]}`}>
      <p className={`subheader`}>Meals</p>
      <h2 className={`header-2`}>Omnifood AI chooses from 5,000+ recipes</h2>
      <div className={`${styles["cards-container"]}`}>
        {mealsInfo.map((meal) => (
          <MealCard key={meal.mealName} {...meal} />
        ))}
        <div>
          <h3 className={`header-3`}>Works with any diet:</h3>
          <ul className={styles["diets-list"]}>
            {dietsNames.map((diet) => (
              <li key={diet} className={styles["diet-item"]}>
                {diet}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a className={styles["see-recipes-link"]} href="#">
        See all recipes
      </a>
    </div>
  );
};
const dietsNames = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low FODMAP",
  "Kid-friendly",
];

const mealsInfo = [
  {
    dietCategories: ["Vegetarian"],
    imgUrl: "img/meals/meal-1.jpg",
    mealName: "Japanese Gyozas",
    numCalories: 650,
    nutriScore: 74,
    rating: { score: 4.9, numReviews: 537 },
  },
  {
    dietCategories: ["vegan", "paleo"],
    imgUrl: "img/meals/meal-2.jpg",
    mealName: "Avocado Salad",
    numCalories: 400,
    nutriScore: 92,
    rating: { score: 4.8, numReviews: 441 },
  },
];
