"use client";
import { type FC } from "react";
import Image from "next/image";
import styles from "./FillingModal.module.css";
import { Filling } from "@/data/data";
type FillingModalProps = {
  currentFilling: Filling | null;
  onClose: () => void;
};
const FillingModal: FC<FillingModalProps> = ({ currentFilling, onClose }) => {
  if (!currentFilling) return;
  return (
    <div className={styles.overlay}>
      <div className={styles.fillingModalWrapper}>
        <button onClick={onClose}>×</button>
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
