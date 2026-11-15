import { business, reviews } from "@/data/data";
import { type FC } from "react";
import styles from "./Reviews.module.css";
import Review from "./review/Review";
import SocialLink from "@/components/footer/social-link/SocialLink";
const Reviews: FC = () => {
  return (
    <section id="reviews" className={`section `}>
      <div className="container">
        <div>
          <h2 className="section-title">Отзывы</h2>
          <p className="section-sub">
            <SocialLink
              className={styles.addressLink}
              goTo={business.mapsUrl}
              text={"100+ отзывов на Яндекс Картах"}
              title={"Ссылка на яндекс карты"}
              aria-label={"Ссылка на кондитерскую"}
            />
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
