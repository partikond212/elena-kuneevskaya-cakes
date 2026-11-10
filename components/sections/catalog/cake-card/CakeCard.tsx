import { Cake } from "@/types";
import React, { type FC } from "react";
import Image from "next/image";
import styles from "./CakeCard.module.css";
import CheckCatalogLink from "@/components/ui/check-catalog-link/CheckCatalogLink";
type CakeCardProps = { cake: Cake };
const CakeCard: FC<CakeCardProps> = ({ cake }) => {
  return (
    <div className={styles.cakeCard}>
      <div className={styles.imageContainer}>
        <Image
          src={cake.image}
          loading="lazy"
          className={styles.cakeImage}
          fill
          sizes="(max-width: 600px) 100vw, 33vw"
          alt="Торт от Елены Кунеевской"
        />
      </div>
      <div className={styles.cakeInfoContainer}>
        <div className={styles.cakeInfo}>
          <h3 className={styles.cakeTitle}>{cake.title}</h3>
          <p className={styles.cakePrice}>
            от {cake.price} ₽ / {cake.unitValue} кг
          </p>
        </div>
        <CheckCatalogLink
          goTo={"order"}
          text={"Хочу такой"}
          className={`CheckCatalogLink ${styles.orderCakeBtn} `}
        />
      </div>
    </div>
  );
};

export default CakeCard;
