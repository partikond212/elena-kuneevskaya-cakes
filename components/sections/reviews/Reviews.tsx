import { business, reviews } from "@/data/data";
import React, { type FC } from "react";
import styles from "./Reviews.module.css";
import Review from "./review/Review";
const Reviews: FC = () => {
  return (
    <section id="reviews" className={`section `}>
      <div className="container">
        <div>
          <h2 className="section-title">Отзывы</h2>
          <p className="section-sub">
            115 отзывов на
            <a className={styles.addressLink} href={business.address}>
              Яндекс Картах
            </a>
          </p>
        </div>
        <div className={styles.reviewsContainer}>
          {reviews.map((r) => (
            <Review review={r} key={r.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
