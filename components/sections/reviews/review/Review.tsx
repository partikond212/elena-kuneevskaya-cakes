import { ReviewT } from "@/types";
import React, { type FC } from "react";
import styles from "./Review.module.css";
const MAX_STARS = 5;
type ReviewProps = { review: ReviewT };
const Review: FC<ReviewProps> = ({ review }) => {
  return (
    <article className={styles.review}>
      <div
        className={styles.stars}
        aria-label={`Оценка ${review.mark} из ${MAX_STARS}`}
      >
        {Array.from({ length: MAX_STARS }, (_, i) => (
          <span
            key={i}
            aria-hidden={true}
            className={i < review.mark ? styles.starFilled : styles.starEmpty}
          >
            ★
          </span>
        ))}
      </div>
      <q className={styles.reviewText}>{review.reviewText}</q>
      <p className={styles.reviewAuthor}>{review.author}</p>
    </article>
  );
};

export default Review;
