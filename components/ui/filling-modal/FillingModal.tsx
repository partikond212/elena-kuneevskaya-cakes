"use client";
import { useEffect, type FC } from "react";
import Image from "next/image";
import styles from "./FillingModal.module.css";
import { Filling } from "@/data/data";
type FillingModalProps = {
  currentFilling: Filling | null;
  onClose: () => void;
};
const FillingModal: FC<FillingModalProps> = ({ currentFilling, onClose }) => {
  useEffect(() => {
    //Хук для предотвращения скролла во время открытой модалки
    if (!currentFilling) return;

    const html = document.documentElement;

    html.style.overflow = "hidden";

    return () => {
      html.style.overflow = "";
    };
  }, [currentFilling]);

  if (!currentFilling) return;
  return (
    <div className={styles.overlay}>
      <div className={styles.fillingModalWrapper}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <div className={styles.imgContainer}>
          <Image
            src={currentFilling.image}
            loading="lazy"
            fill
            sizes="480px"
            className={styles.currentImage}
            alt={`Изображение начинки <<${currentFilling.image}>>`}
          />
          <div className={styles.fillingInfo}>
            <p>{currentFilling.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillingModal;
