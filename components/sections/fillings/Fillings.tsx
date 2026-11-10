import React, { type FC } from "react";
import styles from "./Fillings.module.css";
import { fillings } from "@/data/data";
const Fillings: FC = () => {
  return (
    <section className={`section ${styles.fillings}`}>
      <div className="container">
        <h2 className="section-title">Начинки</h2>
        <p className="section-sub">
          Не знаете, что выбрать? Напишите, Елена подскажет под ваш вкус.
        </p>

        <div className={styles.fillings}>{fillings.map()}</div>
      </div>
    </section>
  );
};

export default Fillings;
