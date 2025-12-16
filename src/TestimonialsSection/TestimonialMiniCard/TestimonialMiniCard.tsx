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
    <div className={`${styles["testimonial-card"]}`}>
      <img
        className={styles["testimonial-picture"]}
        src={`img/customers/${profilePicture}`}
        alt={"Client picture"}
      />
      <p>{review}</p>
      <span className={styles["testimonial-name"]}>- {clientName}</span>
    </div>
  );
};
