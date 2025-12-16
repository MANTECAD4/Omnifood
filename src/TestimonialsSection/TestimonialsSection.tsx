import { TestimonialMiniCard } from "./TestimonialMiniCard/TestimonialMiniCard";
import styles from "./TestimonialsSection.module.css";
export const TestimonialsSection = () => {
  return (
    <div className={styles["testimonials-section"]}>
      <div className={`section-content-container grid grid--2-cols`}>
        <div className={styles["testimonials-text"]}>
          <p className="subheader">Testimonials</p>
          <h2 className="header-2">Once you try it, you can't go back</h2>
          <div
            className={`${styles["testimonials-text-grid"]} grid grid--2-cols`}
          >
            {testimonials.map((testimonial) => (
              <TestimonialMiniCard
                key={testimonial.clientName}
                {...testimonial}
              />
            ))}
          </div>
        </div>

        <div className={`${styles["testimonials-gallery"]}`}>
          {images.map((image) => (
            <div key={image} className={styles["gallery-item"]}>
              <img src={`img/gallery/${image}`} alt="Meal Picture" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    clientName: "Dave Bryson",
    review: `Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.`,
    profilePicture: "dave.jpg",
  },
  {
    clientName: "Ben Hadley",
    review: `The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!`,
    profilePicture: "ben.jpg",
  },
  {
    clientName: "Steve Miller",
    review: `Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!`,
    profilePicture: "steve.jpg",
  },
  {
    clientName: "Hannah Smith",
    review: `I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.`,
    profilePicture: "hannah.jpg",
  },
];

const images = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
  "gallery-9.jpg",
  "gallery-10.jpg",
  "gallery-11.jpg",
  "gallery-12.jpg",
];
