import styles from "./TestimonialMiniCard.module.css";

type Props = {
  clientName: string;
  profilePicture: string;
  review: string;
};
export const TestimonialMiniCard = ({
  clientName,
  profilePicture,
  review,
}: Props) => {
  return (
    <figure className={`${styles["testimonial-card"]}`}>
      <img
        className={styles["testimonial-picture"]}
        src={`img/customers/${profilePicture}`}
        alt={"Client picture"}
      />
      <blockquote className={styles["testimonial-text"]}>{review}</blockquote>
      <span className={styles["testimonial-name"]}>- {clientName}</span>
    </figure>
  );
};
