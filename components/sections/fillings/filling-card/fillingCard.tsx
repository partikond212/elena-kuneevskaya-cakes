import React, { type FC } from "react";
import styles from "./fillingCard.module.css";
import { Filling } from "@/data/data";
type fillingCardProps = { filling: Filling };
const fillingCard: FC<fillingCardProps> = ({ filling }) => {
  //Карточка начинки
  return (
    <div className={styles.fillingCard}>
      button
      <h3>{filling.name}</h3>
      <p>{filling.desc}</p>
    </div>
  );
};

export default fillingCard;
