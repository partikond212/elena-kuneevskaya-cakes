"use client";
import React, { type FC } from "react";

import styles from "./FillingCard.module.css";
import { Filling } from "@/data/data";

type FillingCardProps = {
  filling: Filling;
  // Вызовется при клике на картинку — сюда потом передашь открытие модалки
  onOpen?: (filling: Filling) => void;
};

//Карточка начинки
const FillingCard: FC<FillingCardProps> = ({ filling, onOpen }) => {
  return (
    <div className={styles.fillingCard}>
      {/* Кнопка «инфо» — по клику потом откроешь модалку с фото начинки */}
      <button
        type="button"
        className={styles.infoBtn}
        onClick={() => onOpen?.(filling)}
        aria-label={`Подробнее о начинке «${filling.name}»`}
        title={`Подробнее о начинке «${filling.name}»`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="11" />
          <circle cx="12" cy="7.5" r="0.6" fill="currentColor" />
        </svg>
      </button>
      <div className={styles.info}>
        <h3 className={styles.title}>{filling.name}</h3>
        <p className={styles.desc}>{filling.desc}</p>
      </div>
    </div>
  );
};

export default FillingCard;
